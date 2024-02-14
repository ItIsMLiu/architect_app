// AppInspo.jsx
/* eslint-disable import/no-cycle */
import { Route, Routes } from 'react-router-dom';
import Layout from './LayoutInspo';
import { Error404 } from './ErrorPages';
import PhotoContainer from './PhotoContainerInspo';
import '../../style/Inspiration.css'

const Inspiration = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route
        index
        element={(
          <h3>Click one of the tag buttons above or search for whatever you want!</h3>
        )}
      />
      <Route path=":searchTerm" element={<PhotoContainer />} />
    </Route>
    <Route path="*" element={<Error404 />} />
  </Routes>
);

export default Inspiration;
