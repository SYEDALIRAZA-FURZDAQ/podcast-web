import React from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Favourits from './components/Favourits'
import AudioPlayer from './components/AudioPlayer'
import Podcast from './components/Podcast'

const App = () => {
  return <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/podcast" element={<Podcast />} />
      <Route path="/favourit" element={<Favourits />} />
      <Route path="audioplayer" element={<AudioPlayer />} />
    </Routes>
    <Footer />    
    
    </Router>
}

export default App