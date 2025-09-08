import {useState} from "react";
import wishlist from "../wishlist.json";
import Footer from "./footer";
import Info from "./info";

export default function Wish() {
    const [selectedItem, setSelectedItem] = useState(null);
    const [filter, setFilter] = useState("all"); // 👈 filter state

    // get unique categories from JSON
    const categories = ["all", ...new Set(wishlist.map(item => item.category))];

    // filter the list
    const filteredWishlist =
        filter === "all"
        ? wishlist
        : wishlist.filter(item => item.category === filter);


    return (
        <section className="font-lazydog w-full flex flex-col items-center text-sky-blue pt-6 bg-cover bg-center h-full relative"
        style={{ backgroundImage: `url(${"/items/background.png"})` }}>
            <div className="flex flex-col items-center gap-1">
                    <h2 className="text-2xl">Welcome!</h2>
                    <p>Please bless a young soul out here</p>

                <div className="my-4 flex justify-end gap-4 items-center">
                    <select
                    value={filter}
                    onChange={e => setFilter(e.target.value)}
                    className="border border-sky-blue rounded-lg px-3 py-2"
                    >
                    {categories.map(cat => (
                        <option key={cat} value={cat}>
                        {cat.toUpperCase()}
                        </option>
                    ))}
                    </select>
                    <Info />
                </div>
                
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {filteredWishlist.map(item => (
                    <div key={item.id} className="w-70 border-2 border-sky-blue rounded-lg  p-4 text-center">
                        <div className="flex flex-col items-center">
                            <h2>{item.name}</h2>
                            <div className="w-full h-[200px] mt-2 mb-5">
                                <img src={item.image} alt={item.name} className="mt-2 mb-2 w-full h-full object-cover rounded-lg" />
                            </div>
                
                            <button className="bg-sky-blue text-white rounded-lg px-4 py-2 mb-2" onClick={()=> setSelectedItem(item)}>
                                Why?
                            </button>
                        </div>
                        <p className="text-sm text-gray-400 uppercase tracking-wide p-2 flex justify-start underline">{item.category}</p>
                    </div>   
                    
                ))} 

            </div>

            {/* popup */}

            {selectedItem && (
                <div className="fixed inset-0 flex items-center justify-center bg-white/50 z-3">
                    <div className="bg-white rounded-xl p-6 max-w-[350px] sm:max-w-md  text-center shadow-lg relative">
                        <h2 className="text-xl mb-4 underline">{selectedItem.name}</h2>
                        <p>{selectedItem.reason}</p>
                        <button className="bg-sky-blue text-white rounded-lg px-4 py-2 mt-4" onClick={() => setSelectedItem(null)}>Okay, I believe you</button>
                    </div>
                </div>
            )}
            <Footer/>
        </section>
    )

}