//ErrorPages.jsx
import '../../style/Inspiration.css';

const Error404 = () => (
  <main className="error-message">
    <h2>404: Page Not Found</h2>
    <p>Try again.</p>
  </main>
);

const NoResults = () => (
  <main className="error-message">
    <h3>No Results Found</h3>
    <p>
      Your search did not return any results.
      <br />
      Please try again.
    </p>
  </main>
);

export { Error404, NoResults }
