import {
  useEffect,
  useState,
} from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  apiArgs,
  apiUrl
} from '../../APISettingsInspo';
import Loading from './LoadingInspo';
import PhotoList from './PhotoListInspo';
import '../../style/Inspiration.css';
import Title from './TitleInspo';

const PhotoContainer = () => {
  const [photosData, setPhotosData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { searchTerm } = useParams();

  // Replace any plus signs with spaces
  const humanizedPhrase = searchTerm.trim().replace(/\+/g, ' ');

  useEffect(() => {
    setIsLoading(true);

    const getPhotoData = async (q) => {
      if (!q) return {};

      // Test connectiom to a network.

      if (!navigator.onLine) {
        setError('Browser not connected to network.');
        setIsLoading(false);
        return {};
      }

      return axios.get(apiUrl, {
        params: {
          ...apiArgs,
          tags: q
        }
      })
        .then((resp) => {
          // Test Flickr API response
          if (!/ok/i.test(resp.data.stat)) {
            setError(resp.data.message);
          } else if (resp.status === 200) {
            return resp;
          }
          return {};
        })
        .catch((err) => {
          // If API url is incorrect.
          setError(`${err.message}: Check the API endpoint.`);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

    const handleResponse = (results) => {
      setPhotosData(results.data.photos.photo);

      if (results.data.photos.photo.length > 0) {
        // Save query results in sessionStorage
        sessionStorage.setItem(humanizedPhrase, JSON.stringify(results.data.photos.photo));
      }
    };

    // Check if query results are already in sessionStorage
    const getPhotos = async () => {
      if (sessionStorage.getItem(humanizedPhrase) !== null) {
        const storedData = sessionStorage.getItem(humanizedPhrase);
        const storedDataLength = JSON.parse(storedData).length;
        if (storedDataLength === apiArgs.per_page) {
          setPhotosData(JSON.parse(storedData));
        } else {
          const results = await getPhotoData(humanizedPhrase);
          setPhotosData(results.data.photos.photo);
          // Save query result in sessionStorage
          sessionStorage.setItem(humanizedPhrase, JSON.stringify(results.data.photos.photo));
        }
      } else {
        // Get data from API
        const results = await getPhotoData(humanizedPhrase);
        if (results) {
          handleResponse(results);
        }
      }
    };

    getPhotos().then(() => {
      setIsLoading(false);
    });
  }, [humanizedPhrase, searchTerm]);

  if (isLoading) return <Loading />;
  if (error) {
    return (
      <>
        <h2 className="error-message">Error loading data</h2>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </>
    );
  }

  return (
    <>
      <Title phrase={searchTerm} />
      <PhotoList photosData={photosData} />
    </>
  );
};

PhotoContainer.propTypes = {
  phrase: PropTypes.string.isRequired
};

export default PhotoContainer;
