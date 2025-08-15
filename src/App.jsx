import './App.css'
import React from 'react'
import Homepage from './Homepage.jsx';
import OurWay from './about.jsx';
import Highlights from './highlights.jsx';

function App() {
 
  return (
    <>
      <Homepage />
      <OurWay />
      <Highlights />
      <footer className=" text-amber-900 text-center p-4 ">
        <p>&copy; Dreamy Essence 2025. </p>
      </footer>
    </>
  )
}

export default App

