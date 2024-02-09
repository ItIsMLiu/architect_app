import { Outlet, useParams } from 'react-router-dom';
import Error404 from '../components/Inspo/Error404Inspo';
import Title from '../components/Inspo/TitleInspo';
import PhotoContainer from '../components/Inspo/PhotoContainerInspo';
import { defaultTags } from '../settingsInspo';
// eslint-disable-next-line import/no-cycle

// Check that invalid tags are not entered directly into URL
const Tag = () => {
  const { tagTerm } = useParams();
  // Clear previous searches
  const searchInput = document.querySelector('input[type="search"]');
  if (searchInput) {
    searchInput.value = '';
  }

  if (tagTerm) {
    // Humanize the tag (convert into human readable form) term and compare it to the list of default tags
    const humanizedTerm = tagTerm.trim().replace(/\+/g, ' ');
    if (!defaultTags.includes(humanizedTerm)) {
      return (
        <Error404 />
      );
    }

    return (
      <main>
        <Title phrase={tagTerm} />
        <PhotoContainer phrase={tagTerm} />
      </main>
    );
  }

  return (
    <main>
      <Outlet />
    </main>
  );
};

export default Tag;
