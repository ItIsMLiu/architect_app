import { Outlet, useParams } from 'react-router-dom';
import Title from '../components/Inspo/TitleInspo';
import PhotoContainer from '../components/Inspo/PhotoContainerInspo';
// eslint-disable-next-line import/no-cycle

const Search = () => {
  const { searchTerm } = useParams();

  if (!searchTerm) {
    return (
      <main>
        <Outlet />
      </main>
    );
  }

  return (
    <main>
      <Title phrase={searchTerm} />
      <PhotoContainer phrase={searchTerm} />
    </main>
  );
};

export default Search;
