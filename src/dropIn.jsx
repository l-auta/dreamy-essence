import React from "react";

function Note (){
    return (
        <div class="lg:max-w-7xl mx-auto my-19 px-4 relative select-none">
            <div class="relative flex items-center justify-center my-8">
                <div class="flex-grow border-t border-amber-900"></div>
                    <span class="flex-shrink mx-4 text-3xl">☁️</span>
                <div class="flex-grow border-t border-amber-900"></div>
            </div>
            <div class="sm:text-xl text-amber-900 pb-8"> 
                <p>To us, this isn’t just a café—it’s a home we’ve built with love, one cup at a time. Every corner, every scent of roasted beans, every carefully chosen detail is here for a reason: to make you feel like you belong. This place means a lot to us. We hope, in some small way, it means something to you too. So take a seat, take your time. Let us pour you something wonderful. </p>
    
                <div class="absolute right-4 bottom-0 text-sm italic text-amber-900">
                    - Note from Us
                </div>
            </div>
        </div>
    )
}

function DropIn() {
    return (
        <div id="drop-in">
            <Note />
            <div className="mt-10">
                <div className="flex sm:flex-nowrap flex-wrap gap-9 sm:justify-around items-center bg-rose-100 border border-amber-900 p-8">
                    <div>
                        <h2 className="text-2xl font-bold text-amber-900 mb-4">Location</h2>
                        <p className="text-amber-900 sm:text-xl">📍 12 Garden Lane, Westview, Nairobi</p>
                    </div>
                    <div className="select-none">
                        <h2 className="text-2xl font-bold text-amber-900 mb-4">Opening Hours</h2>
                        <p className="text-amber-900 sm:text-xl mt-4">🕰️ Mon–Fri: 8AM – 6PM</p>
                        <p className="text-amber-900 sm:text-xl mt-4">🌸 Sat–Sun: 9AM – 4PM</p>
                        <p className="text-amber-900 sm:text-xl mt-4">🚪 Closed on public holidays</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DropIn;