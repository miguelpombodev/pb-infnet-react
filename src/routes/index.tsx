import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Posts from '../pages/Posts';
import PostPage from '../pages/PostPage';
import NotFound from '../pages/NotFound';
import Groups from '../pages/Groups';
import UserPage from '../pages/UserPage';

function RoutesPaths () {
  return (
    <Routes>
      <Route index path="/" element={<Home />}/> 
      <Route path="/posts" element={<Posts />}></Route>
      <Route path='/posts/:id' element={<PostPage />}/>
      <Route path="/groups" element={<Groups />}></Route>
      <Route path="/user" element={<UserPage />}></Route>
      <Route path='*' element={<NotFound />}/>
    </Routes>
  )
}

export default RoutesPaths