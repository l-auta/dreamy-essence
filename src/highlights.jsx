import React from "react";

function Highlights() {
    return (
        <div className="my-10 p-5">
            <h2 className="text-center text-3xl font-bold text-amber-900 mb-5">Our Menu Highlights</h2>
            <div className="overflow-x-auto whitespace-nowrap py-4 hide-scrollbar md:p-10"> 
                <div className="inline-flex sm:gap-9"> 
                    <div className="snap-center flex flex-col items-center p-4">
                        <img 
                            src="src/assets/images/latte.jpg" 
                            alt="Latte" 
                            className="sm:w-70 w-30 object-cover rounded-3xl"
                        /> 
                        <h3 className="text-2xl font-semibold text-amber-900 mt-3 text-center">Signature Latte</h3>
                        <p className="text-amber-900">A creamy blend of espresso and steamed milk...</p>
                    </div>

                    <div className="snap-center flex flex-col items-center p-4">
                        <img 
                            src="src/assets/images/latte.jpg" 
                            alt="Latte" 
                            className="sm:w-70 w-30 object-cover rounded-3xl"
                        /> 
                        <h3 className="text-2xl font-semibold text-amber-900 mt-3">Signature Latte</h3>
                        <p className="text-amber-900">A creamy blend of espresso and steamed milk...</p>
                    </div>

                    <div className="snap-center flex flex-col items-center p-4">
                        <img 
                            src="src/assets/images/latte.jpg" 
                            alt="Latte" 
                            className="sm:w-70 w-30 object-cover rounded-3xl"
                        /> 
                        <h3 className="text-2xl font-semibold text-amber-900 mt-3">Signature Latte</h3>
                        <p className="text-amber-900">A creamy blend of espresso and steamed milk...</p>
                    </div>

                    <div className="snap-center flex flex-col items-center p-4">
                        <img 
                            src="src/assets/images/latte.jpg" 
                            alt="Latte" 
                            className="sm:w-70 w-30 object-cover rounded-3xl"
                        /> 
                        <h3 className="text-2xl font-semibold text-amber-900 mt-3">Signature Latte</h3>
                        <p className="text-amber-900">A creamy blend of espresso and steamed milk...</p>
                    </div>

                    <div className="snap-center flex flex-col items-center p-4">
                        <img 
                            src="src/assets/images/latte.jpg" 
                            alt="Latte" 
                            className="sm:w-70 w-30 object-cover rounded-3xl"
                        /> 
                        <h3 className="text-2xl font-semibold text-amber-900 mt-3">Signature Latte</h3>
                        <p className="text-amber-900">A creamy blend of espresso and steamed milk...</p>
                    </div>
      
                </div>
            </div>
        </div>
    );
}

export default Highlights;