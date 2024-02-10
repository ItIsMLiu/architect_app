import PropTypes from 'prop-types';
import NoResults from './NoResultsInspo';
import Photo from './PhotoInspo';
import '../../style/Inspiration.css';

const PhotoList = ({ photosData }) => {
  if (photosData && photosData.length > 0) {
    const photos = photosData.map((photo) => (
      <Photo
        key={photo.id}
        photo={photo}
        imgSize="m"
      />
    ));
    return (
      <section className="photo-list">
        <ul>
          {photos}
        </ul>
      </section>
    );
  }
  return (
    <section className="photo-list">
      <NoResults />
    </section>
  );
};

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
