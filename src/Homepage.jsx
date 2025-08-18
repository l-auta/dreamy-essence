import React from "react";
import './App.css';

function Navbar() {
    return (
        <nav className="bg-white shadow">
            <div className="px-4 sm:px-6 lg:px-8"> {/* for the sake of media responsiveness .....(was there initially causing the nav to be halfway) max-w-7xl*/}
                <div className="flex items-center justify-between h-16"> {/* the layout of the navbar*/}
                    <div className="sm:flex hidden items-center">
                        <img
                            className="h-16 sm:w-18"
                            src="src/assets/cafe Logos-2-Design_two.png"
                            alt="Dreamy Essence Logo"
                        /> 
                        </div>
                   
                        <div className="flex space-x-3 md:space-x-6 md:text-xl font-medium">
                            <a href="#home" className="text-amber-900 active:text-red-200">Home</a>
                            <a href="#our-way" className="text-amber-900 active:text-red-200">Our way</a>
                            <a href="#highlights" className="text-amber-900 active:text-red-200">Highlights</a>
                            <a href="#drop-in" className="text-amber-900 active:text-red-200">Drop-in</a>
                        </div>
                </div>
            </div>
        </nav>
    );
}

function Homepage() {
  return (
    <div id="home">
    <Navbar />
    <div class="relative sm:h-160 h-100 overflow-hidden">
        <img 
            src="src/assets/images/Leonardo_Kino_XL_Minimalist_cafe_interior_with_white_walls_war_2.jpg" 
            alt="Background"
            class="absolute inset-0 w-full h-full object-cover blur-md"
        />
  
        <div class="absolute inset-0 bg-black/30"></div>

        <div class="relative z-10 h-full flex flex-col gap-y-5 justify-center items-center p-4">
            <h2 class="sm:text-8xl text-3xl sm:mt-2 font-bold text-white">
                Sip. <span class="text-red-200">Savor.</span> Stay a while.
            </h2>
            <p class="sm:text-xl mt-3 text-center text-white">
                Dreamy essence is your cozy hideaway for calm moments and sweet treats.
            </p>
            <a href="#highlights" class="mt-4 px-4 py-2 bg-red-200 active:bg-red-100 text-black rounded-lg">
                See what's brewing
            </a>
        </div>
    </div>
    </div>
  );
}

export default Homepage;
