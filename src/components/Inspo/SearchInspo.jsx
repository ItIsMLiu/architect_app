// SearchInspo.jsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { searchPlaceholder } from '../../settingsInspo';
import '../../style/Inspiration.css';

const Search = () => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const navigate = useNavigate();
  const { searchTerm } = useParams();

  const handleChange = (ev) => {
    setSearchPhrase(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const sanitizedPhrase = searchPhrase.trim().replace(/[^\w ]/, '').replace(/\s/g, '+');
    navigate(`/architecture-app/inspiration/search/${sanitizedPhrase}`);
  };

  useEffect(() => {
    if (searchTerm !== '' && searchTerm !== undefined) {
      setSearchPhrase(searchTerm.trim().replace(/\+/g, ' '));
    } else {
      setSearchPhrase('');
    }
  }, [searchTerm]);

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        type="search"
        name="search"
        placeholder={searchPlaceholder}
        aria-label="Search Flickr.com image database"
        onChange={handleChange}
        value={searchPhrase}
        required
      />
      <button type="submit" className="search-button">
        {/* Your search button content here */}
      </button>
    </form>
  );
};

export default Search;

