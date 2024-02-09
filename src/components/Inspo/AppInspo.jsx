/* eslint-disable import/no-cycle */
import { Route, Routes } from 'react-router-dom';
import Tag from '../../routes/TagInspo';
import Search from '../../routes/SearchInspo';
import Layout from './LayoutInspo';
import Error404 from './Error404Inspo';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route
        index
        element={(
          <h2>Click one of the tag buttons above or search for whatever you want!</h2>
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
