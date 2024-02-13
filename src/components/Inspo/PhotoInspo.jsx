import PropTypes from 'prop-types';
import { imgSize } from '../../APISettingsInspo';

const Photo = ({ photo }) => {
  const url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${imgSize}.jpg`;

  return (
    <li>
      <img
        src={url}
        alt={photo.title}
      />
    </li>
  );
};

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
