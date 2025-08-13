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
                   
                        <div className="flex space-x-3 md:space-x-9 md:text-3xl font-medium ">
                            <span className="primary-col ">Home</span>
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
    <div class="relative h-150 overflow-hidden">
    <img 
    src="src/assets/images/Leonardo_Kino_XL_Minimalist_cafe_interior_with_white_walls_war_2.jpg" 
    alt="Background"
    class="absolute inset-0 w-full h-full object-cover blur-md"
    />
  
 
  <div class="absolute inset-0 bg-black/20"></div>
  
 
  <div class="relative z-10 h-full flex flex-col gap-y-5 justify-center items-center text-white p-4">
    <h2 class="text-7xl font-bold">
        Sip. <span class="primary-col">Savor.</span> Stay a while.
    </h2>
    <p class=" text-center">
        Your content stays perfectly sharp on top
    </p>
    <button class="mt-4 px-4 py-2 bg-white text-black rounded-lg">
      See what's brewing
    </button>
  </div>
</div>
    </>
  );
}

export default Homepage;
