import { NavLink } from 'react-router-dom';
import { defaultTags } from '../../settingsInspo';
import '../../style/Inspiration.css';

const Nav = () => {
  // Make sure there's no duplicates in defaultTags
  const uniqueTags = [...new Set(defaultTags)];

  // Use defaultTags from App settings to generate buttons
  const tagLinks = uniqueTags.map((tagTerm) => (
    <li key={tagTerm}>

      {/* For the 'to' url, replace any spaces with + in tagTerm */}
      <NavLink to={`/tag/${tagTerm.trim().replace(/\s/g, '+')}`}>
        {/* Make the tag Title Case */}
        {tagTerm.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())}
      </NavLink>

    </li>
  ));

  return (
    <nav className="main-nav">
      <ul>
        {tagLinks}
      </ul>
    </nav>
  );
};

export default Nav;
