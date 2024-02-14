import PropTypes from 'prop-types';
import { imgSize } from '../../APISettingsInspo';

// Photo component displays a single photo
const Photo = ({ photo }) => {
  // Construct the URL for the Flickr photo using provided details
  const url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${imgSize}.jpg`;

  return (
    <li>
      {/* Display the photo with its title as alt text */}
      <img
        src={url}
        alt={photo.title}
      />
    </li>
  );
};

// Define prop types for the 'photo' prop to ensure correct data structure
Photo.propTypes = {
  photo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    farm: PropTypes.number.isRequired,
    server: PropTypes.string.isRequired,
    secret: PropTypes.string.isRequired
  }).isRequired
};


export default Photo;

