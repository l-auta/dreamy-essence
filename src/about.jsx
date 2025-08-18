import "./App.css";
import React from "react";

function WhyUs() {
    return(
        <>
            <div className="sm:py-4 sm:bg-rose-100">
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
        <div id="our-way" className="my-20">
            <div className="hidden sm:block md:mt-20 md:mb-15 my-5 px-5 text-amber-900 ">
                <img className="md:w-160 w-70 m-5 rounded-lg float-right" src="src/assets/images/Leonardo_Kino_XL_Minimalist_cafe_interior_with_white_walls_and_0.jpg" alt="cafe-pic" />
                <p className="hidden lg:block md:text-xl p-5 m-5">
                     Dreamy Essence is a quiet little café with a big love for calm moments. From the first sip of your coffee to the gentle hum of conversation in the background, every detail here has been thoughtfully designed to wrap you in a sense of ease. We’ve kept our space intentionally clean and cozy—white walls that reflect the morning light, soft earthy tones that soothe the mind, and natural textures like warm wood and linen that invite you to linger. The air carries the comforting aroma of freshly brewed coffee and homemade pastries, while the soft clink of ceramic cups and the occasional rustle of pages turning in a book create a rhythm that feels like a quiet exhale. This is more than just a café; it’s a pause in your day. A place where time slows just enough for you to settle into your thoughts, unwind with a friend, or simply watch the world go by. There are no loud distractions here—just the warmth of good coffee, the comfort of a well-worn chair, and the gentle encouragement to come as you are and just be. Whether you’re here to start your morning with intention, steal a quiet afternoon for yourself, or find a cozy corner to daydream in, we hope Dreamy Essence feels like a small refuge—a place where the outside world softens, even if just for a little while. After all, the best moments often happen when you allow yourself the space to enjoy them. So take a seat, take your time. We’re so glad you’re here.
                </p>

                <p className="hidden sm:block lg:hidden md:text-xl p-5 m-5">
                    Dreamy Essence is a quiet little café designed for calm moments. White walls and soft natural textures create a space where you can slow down and breathe. The air carries the aroma of freshly brewed coffee and baked goods, while sunlight filters through the windows, inviting you to stay awhile. This is more than just a café—it's a place to pause. Where the clink of cups and rustle of book pages become a gentle soundtrack to your thoughts.
                </p>
            </div>
            <WhyUs />
        </div>
    )
}

export default OurWay;