import "./App.css";
import React from "react";

function WhyUs() {
    return(
        <>
            <div>
                <h2 className=" sm:m-10 m-5 text-center text-3xl font-bold text-amber-900">Why Choose Us? <span class="material-symbols-outlined ">check_circle</span></h2>
                <div className="flex flex-col  sm:flex-row justify-around items-center gap-x-5 md:divide-x-2 text-amber-900">
                    <div className="flex flex-col items-center p-4 text-center">
                        <span class="material-symbols-outlined">sunny</span>
                        <h2 className="pb-3 font-semibold">Calm Atmosphere</h2>
                        <p>Relax in our cozy, serene environment designed for your comfort.</p>
                    </div>
                    <div className="flex flex-col items-center p-4 text-center">
                        <span class="material-symbols-outlined">sentiment_very_satisfied</span>
                        <h2 className="pb-3 font-semibold">Warm Service</h2>
                        <p>Our friendly staff is always ready to serve you with a smile.</p>
                    </div>
                    <div className="flex flex-col items-center p-4 text-center">
                        <span class="material-symbols-outlined">eco</span>
                        <h2 className="pb-3 font-semibold">Fresh & Thoughtful Menu</h2>
                        <p>We use only the freshest, highest-quality ingredients in our drinks and snacks.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

function OurWay() {
    return(
        <>
          <WhyUs />
            <div >
                <div className="sm:flex hidden items-center justify-between gap-5 md:gap-20 m-5 py-4">
                    <img className="md:w-160 w-80 rounded-lg" src="src/assets/images/Leonardo_Kino_XL_A_single_wooden_table_in_a_cozy_white_cafe_wi_3.jpg" alt="serving-pic" /> 
                    <p className="md:text-xl ">Our menu is small, but thoughtful — every drink and treat made with care. No noise, no rush. Just comfort, good coffee, and a warm hello behind the counter. We hope you leave feeling lighter than when you came in.</p>
                </div>
                <div className="sm:flex hidden items-center justify-between gap-5 md:gap-20 m-5 py-4">
                    <p className="md:text-xl">Dreamy Essence is a quiet little café with a big love for calm moments. We’ve kept our space intentionally clean and cozy — white walls, soft tones, and natural textures that let your thoughts settle. It is a place where you can come as you are, and just be.</p>
                    <img className="md:w-160 w-80 rounded-lg" src="src/assets/images/Leonardo_Kino_XL_Minimalist_cafe_interior_with_white_walls_and_0.jpg" alt="cafe-pic" />
                </div>
            </div>
            
        </>
    )
}

export default OurWay;