import { NavLink } from 'react-router-dom';
import { defaultTags } from '../../APISettingsInspo';
import '../../style/Global.css';

// Nav component with predefined search tags
const Nav = () => {
  // Ensure there are no duplicate tags in the defaultTags array
  const uniqueTags = [...new Set(defaultTags)];

  // Generate NavLink elements for each unique tag
  const tagLinks = uniqueTags.map((tagTerm) => (
    <li key={tagTerm}>
      {/* For the 'to' URL, replace any spaces with '+' in tagTerm */}
      <NavLink to={`/architecture-app/inspiration/${tagTerm.trim().replace(/\s/g, '+')}`}>
        {/* Convert the tagTerm to Title Case */}
        {tagTerm.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())}
      </NavLink>
    </li>
  ));

  // Render the navigation bar with the generated tag links
  return (
    <nav className="main-nav">
      <ul>
        {tagLinks}
      </ul>
    </nav>
  );
};


export default Nav;

