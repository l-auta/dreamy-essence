import './index.css'
import React from 'react'
import Homepage from './Homepage.jsx';
import OurWay from './about.jsx';
import Highlights from './highlights.jsx';
import DropIn from './dropIn.jsx';

function App() {
 
  return (
    <>
      <Homepage  />
      <OurWay />
      <Highlights />
      <DropIn />
      <footer className="select-none text-amber-900 text-center p-4 ">
        <p>&copy; Dreamy Essence 2025. </p>
      </footer>
    </>
  )
}

export default App

