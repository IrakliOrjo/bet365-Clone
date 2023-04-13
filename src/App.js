import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import Home from './Home.js'


import './index.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    
      {/* Match details*/}

    
    </Routes>
    </BrowserRouter>
  );
}

export default App;
