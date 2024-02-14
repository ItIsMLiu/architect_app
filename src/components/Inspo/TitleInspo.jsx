import PropTypes from 'prop-types';

const Title = ({ phrase }) => {
  // If 'phrase' prop is false, return null (don't render anything)
  if (!phrase) { return null; }

  // Clean up the phrase by removing leading and trailing whitespaces,
  // and replacing any '+' symbols with a space
  const humanizedTerm = phrase.trim().replace(/\+/g, ' ');

  // Define the static part of the headline
  const headline = 'Results for ';

  // Update the document title in the browser tab with the dynamic content
  document.title = `${headline} "${humanizedTerm}"`;

  // Return a JSX element with the dynamic content highlighted using <mark>
  return (
    <h3>
      {headline}
      <mark data-testid="highlight" className='highlight'>{humanizedTerm}</mark>
    </h3>
  );
};

// Define prop types for the 'phrase' prop
Title.propTypes = {
  phrase: PropTypes.string.isRequired
};


export default Title;
