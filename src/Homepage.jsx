import React from "react";
import './App.css';

function Navbar() {
    return (
        <nav className="bg-white shadow">
            <div className="px-4 sm:px-6 lg:px-8"> {/* for the sake of media responsiveness .....(was there initially causing the nav to be halfway) max-w-7xl*/}
                <div className="flex items-center justify-between h-16"> {/* the layout of the navbar*/}
                    <div className="flex items-center">
                        <img
                            className="h-16 sm:w-18"
                            src="src/assets/cafe Logos-2-Design_two.png"
                            alt="Dreamy Essence Logo"
                        />
                        </div>
                   
                        <div className="flex space-x-3 md:space-x-9 md:text-3xl font-medium">
                            <span className="primary-col">Home</span>
                            <span className="primary-col">About</span>
                            <span className="primary-col">Services</span>
                            <span className="primary-col">Contact</span>
                        </div>
                </div>
            </div>
        </nav>
    );
}

function Homepage() {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <p className="text-2xl mt-4">This is the main content area. </p>
    </div>
    </>
  );
}

export default Homepage;
