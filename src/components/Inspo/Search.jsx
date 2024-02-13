// Search.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { searchPlaceholder } from '../../APISettingsInspo';
import '../../style/Inspiration.css';
import Title from './TitleInspo';
import PhotoContainer from './PhotoContainerInspo';

const Search = () => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const navigate = useNavigate();

  const handleChange = (ev) => {
    setSearchPhrase(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const sanitizedPhrase = searchPhrase.trim().replace(/[^\w ]/g, '').replace(/\s/g, '+');
    navigate(`/architecture-app/inspiration/${sanitizedPhrase}`);
  };


  return (
    <>
      <header>
        <h1>
          Would you like some architectural inspiration?
        </h1>
      </header>
      <main>
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
            <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </button>
        </form>
      </main>
    </>
  );
};

export default Search;

