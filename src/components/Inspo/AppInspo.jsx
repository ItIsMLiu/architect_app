// AppInspo.jsx
/* eslint-disable import/no-cycle */
import { Route, Routes } from 'react-router-dom';
import Tag from './TagInspo';
import Layout from './LayoutInspo';
import Search from './Search';
import { Error404 } from './ErrorPages';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route
        index
        element={(
          <h3>Click one of the tag buttons above or search for whatever you want!</h3>
        )}
      />
      <Route path="tag" element={<Tag />}>
        <Route
          index
          element={(
            <h2>Select a tag</h2>
          )}
        />
        <Route path=":tagTerm" element={<Tag />} />
      </Route>
      <Route path="search" element={<Search />}>
        <Route
          index
          element={(
            <h2>Enter text to search.</h2>
          )}
        />
        <Route path=":searchTerm" element={<Search />} />
      </Route>
      <Route path="*" element={<Error404 />} />
    </Route>
  </Routes>
);

export default App;
