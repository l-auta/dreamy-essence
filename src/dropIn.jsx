import React from "react";

function Note (){
    return (
        <div>
            <div class="relative flex items-center justify-center my-8">
                <div class="flex-grow border-t border-gray-300"></div>
                    <span class="flex-shrink mx-4 text-2xl">☁️</span>
                <div class="flex-grow border-t border-gray-300"></div>
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