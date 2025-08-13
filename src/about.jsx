import "./App.css";
import React from "react";

function WhyUs() {
    return(
        <>
            <div>
                <h2 className=" m-10 text-center text-3xl font-bold text-amber-900">Why Choose Us? <span class="material-symbols-outlined ">check_circle</span></h2>
                <div className="flex flex-col  sm:flex-row justify-around items-center gap-x-5 sm:divide-x-2 text-amber-900">
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
                <br />
                <p>We offer the best coffee in town, made from the finest beans.</p>
            </div>
        </>
    )
}

function OurWay() {
    return(
        <>
          <WhyUs />
            <div>
                <h1>Hellowww</h1>
            </div>
            
        </>
    )
}

export default OurWay;