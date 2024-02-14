import PropTypes from 'prop-types';
import { NoResults } from './ErrorPages';
import Photo from './PhotoInspo';
import '../../style/Inspiration.css';


const PhotoList = ({ photosData }) => {
  // Check if there are photos in the data
  if (photosData && photosData.length > 0) {
    // Map over each photo in the data and create a Photo component for each
    const photos = photosData.map((photo) => (
      <Photo
        key={photo.id}
        photo={photo}
        imgSize="n"  // Pass the imgSize prop with a default value of "n"
      />
    ));

    // Render a section with an unordered list containing the photos
    return (
      <section className="photo-list">
        <ul>
          {photos}
        </ul>
      </section>
    );
  }

  // If there are no photos, render a section with a NoResults component
  return (
    <section className="photo-list">
      <NoResults />
    </section>
  );
};

// Define prop types for the 'photosData' prop to ensure correct data structure
PhotoList.propTypes = {
  photosData: PropTypes.arrayOf(PropTypes.shape({
    farm: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    isfamily: PropTypes.number.isRequired,
    isfriend: PropTypes.number.isRequired,
    ispublic: PropTypes.number.isRequired,
    owner: PropTypes.string.isRequired,
    secret: PropTypes.string.isRequired,
    server: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })).isRequired
};


export default PhotoList;

