import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Posts from '../pages/Posts';

function RoutesPaths () {
  return (
    <Routes>
      <Route index path="/" element={<Home />}/> 
      <Route path="/posts" element={<Posts />}/> 
    </Routes>
  )
}

export default RoutesPaths