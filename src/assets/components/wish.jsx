import {useState} from "react";
import wishlist from "../wishlist.json";

export default function Wish() {
    const [selectedItem, setSelectedItem] = useState(null);
    return (
        <section className="font-lazydog w-full flex flex-col items-center text-sky-blue pt-6 bg-cover bg-center h-full"
        style={{ backgroundImage: `url(${"/images/background.png"})` }}>
            <h2 className="text-2xl">Welcome!</h2>
            <p>Please bless a young soul out here</p>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-6 p-4 ">
                {wishlist.map(item => (
                    <div key={item.id} className="border-2 border-sky-blue rounded-lg flex flex-col items-center p-4 text-center">
                        <h2>{item.name}</h2>
                        <div className="w-full h-[200px] mt-2 mb-5">
                            <img src={item.image} alt={item.name} className="mt-2 mb-2 w-full h-full object-cover rounded-lg" />
                        </div>
                        <button className="bg-sky-blue text-white rounded-lg px-4 py-2" onClick={()=> setSelectedItem(item)}>
                            Why?
                        </button>
                        {/* <p>{item.reason}</p> */}
                    </div>   
                ))} 

            </div>

            {/* popup */}

            {selectedItem && (
                <div className="fixed inset-0 flex items-center justify-center bg-white/50">
                    <div className="bg-white rounded-xl p-6 max-w-md text-center shadow-lg relative">
                        <h2>{selectedItem.name}</h2>
                        <p>{selectedItem.reason}</p>
                        <button className="bg-sky-blue text-white rounded-lg px-4 py-2 mt-4" onClick={() => setSelectedItem(null)}>Okay, I believe you</button>
                    </div>
                </div>
            )}
        </section>
    )

}