import React from "react";

function Note (){
    return (
        <div class="max-w-5xl mx-auto my-12 px-4 relative">
            <div class="relative flex items-center justify-center my-8">
                <div class="flex-grow border-t border-amber-900"></div>
                    <span class="flex-shrink mx-4 text-3xl">☁️</span>
                <div class="flex-grow border-t border-amber-900"></div>
            </div>
            <div class="text-xl text-amber-900 pb-8"> 
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
        <>
            <Note />
            
        </>
    )
}

export default DropIn;