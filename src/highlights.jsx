import React from "react";

function Highlights() {
    return (
        <div id="highlights" className="my-10 p-5">
            <h2 className="text-center text-3xl font-bold text-amber-900 mb-5">Our Menu Highlights</h2>
            <div className="overflow-x-auto  py-4 hide-scrollbar md:p-10"> 
                <div className="inline-flex gap-9"> 
                    <div className="snap-center flex flex-col items-center p-4 shadow-sm sm:w-100 w-70 rounded-lg">
                        <img 
                            src="src/assets/images/latte.jpg" 
                            alt="Latte" 
                            className="sm:w-70 w-50 object-cover rounded-3xl"
                        /> 
                        <h3 className="text-2xl font-semibold text-amber-900 mt-3 text-center">Signature Latte</h3>
                        <p className="text-amber-900 text-center">Smooth espresso and velvety milk, finished with gentle latte art — a classic hug in a cup.</p>
                    </div>

                    <div className="snap-center flex flex-col items-center p-4 shadow-sm sm:w-100 w-70 rounded-lg">
                        <img 
                            src="src/assets/images/strawberry_cake.jpg" 
                            alt="Strawberry shortcake" 
                            className="sm:w-70 w-50 object-cover rounded-3xl"
                        /> 
                        <h3 className="text-2xl font-semibold text-amber-900 mt-3">Strawberry shortcake</h3>
                        <p className="text-amber-900 text-center">Layers of soft sponge, fresh cream, and sweet strawberries — light and dreamy.</p>
                    </div>

                    <div className="snap-center flex flex-col items-center p-4 shadow-sm sm:w-100 w-70 rounded-lg">
                        <img 
                            src="src/assets/images/hot_chocolate.jpg" 
                            alt="Hot chocolate" 
                            className="sm:w-70 w-50 object-cover rounded-3xl"
                        /> 
                        <h3 className="text-2xl font-semibold text-amber-900 mt-3">Hot chocolate</h3>
                        <p className="text-amber-900 text-center">Rich cocoa topped with pillowy marshmallows — perfect for quiet afternoons.</p>
                    </div>

                    <div className="snap-center flex flex-col items-center p-4 shadow-sm sm:w-100 w-70 rounded-lg">
                        <img 
                            src="src/assets/images/macaroons.jpg" 
                            alt="Pastel macaroons" 
                            className="sm:w-70 w-50 object-cover rounded-3xl"
                        /> 
                        <h3 className="text-2xl font-semibold text-amber-900 mt-3">Pastel macaroons</h3>
                        <p className="text-amber-900 text-center">Light and crisp on the outside, soft and sweet inside — delicate flavors in dreamy colors.</p>
                    </div>

                    <div className="snap-center flex flex-col items-center p-4 shadow-sm sm:w-100 w-70 rounded-lg">
                        <img 
                            src="src/assets/images/matcha_latte.jpg" 
                            alt="Iced matcha latte" 
                            className="sm:w-70 w-50 object-cover rounded-3xl"
                        /> 
                        <h3 className="text-2xl font-semibold text-amber-900 mt-3">Iced matcha latte</h3>
                        <p className="text-amber-900 text-center">Earthy matcha and creamy milk over ice — refreshing, balanced, and beautiful. </p>
                    </div>
      
                </div>
            </div>
        </div>
    );
}

export default Highlights;