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

// PhotoContainer component fetches and displays photos based on a search term
const PhotoContainer = () => {
  const [photosData, setPhotosData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { searchTerm } = useParams();

  // Replace any plus signs with spaces in the search term
  const humanizedPhrase = searchTerm.trim().replace(/\+/g, ' ');

  useEffect(() => {
    setIsLoading(true);

    const getPhotoData = async (q) => {
      if (!q) return {};

      // Check if the browser is online
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
          // Handle errors, e.g., incorrect API endpoint
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

    const getPhotos = async () => {
      if (sessionStorage.getItem(humanizedPhrase) !== null) {
        // Retrieve and use data from sessionStorage if available
        const storedData = sessionStorage.getItem(humanizedPhrase);
        const storedDataLength = JSON.parse(storedData).length;
        if (storedDataLength === apiArgs.per_page) {
          setPhotosData(JSON.parse(storedData));
        } else {
          // Fetch new data from the API if the stored data is incomplete
          const results = await getPhotoData(humanizedPhrase);
          setPhotosData(results.data.photos.photo);
          // Save query result in sessionStorage
          sessionStorage.setItem(humanizedPhrase, JSON.stringify(results.data.photos.photo));
        }
      } else {
        // Get data from API if not available in sessionStorage
        const results = await getPhotoData(humanizedPhrase);
        if (results) {
          handleResponse(results);
        }
      }
    };

    // Fetch and handle photo data
    getPhotos().then(() => {
      setIsLoading(false);
    });
  }, [humanizedPhrase, searchTerm]);

  // Render loading spinner while fetching data
  if (isLoading) return <Loading />;
  // Render error message and details if there's an error
  if (error) {
    return (
      <>
        <h2 className="error-message">Error loading data</h2>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </>
    );
  }

  // Render the Title and PhotoList components with fetched data
  return (
    <>
      <Title phrase={searchTerm} />
      <PhotoList photosData={photosData} />
    </>
  );
};

// Prop types for the PhotoContainer component
PhotoContainer.propTypes = {
  searchTerm: PropTypes.string,
};

export default PhotoContainer;
