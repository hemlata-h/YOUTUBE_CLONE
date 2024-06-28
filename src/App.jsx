import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home/Home'
import Video from './pages/Video/Video';


function App() {
const[side, setSide] = useState(true);

  return (
    <div>
    <Navbar setSide={setSide} side={side}/>
   
    <Routes>
      <Route path='/' element={<Home side={side}/>}></Route>
      <Route path='/video/:categoryId/:videoId' element={<Video/>}></Route>
     </Routes>
    </div>
  );
}

export default App
