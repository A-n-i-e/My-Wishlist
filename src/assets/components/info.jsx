import {useState} from 'react';
import Warning from '/items/warning.svg';
export default function Info(){
    const [popup, setPopup] = useState(false);

    return (
        <div>
            <button className='bg-sky-blue text-white rounded-lg px-4 py-2' onClick={() => setPopup(true)}>Important Info</button>

            {popup && (
                <div className="fixed inset-0 flex items-center justify-center bg-white/50 z-3">
                    <div className="bg-white rounded-xl p-6 max-w-[350px] sm:max-w-md  text-center shadow-lg relative flex flex-col items-center">
                        <img src={Warning} alt="Warning Icon" className="mb-2" />
                        <h2 className="text-xl mb-4 underline">Please Note</h2>
                        <ul className="flex flex-col gap-2 text-left">
                            <li>Shirt Size: Medium or Small. <br/>
                            Note: I have broad shoulders</li>
                            <li>Jacket Size: Medium or Large depending on the structure</li>
                            <li>Pants Size: 30 or 32 <br/>
                            I like low rise pants (low waist)</li>
                            <li>Shoe Size: 40 or 41</li>
                            <li>Jewelry: Gold or Silver</li>
                        </ul>
                        <button className="bg-sky-blue text-white rounded-lg px-4 py-2 mt-4" onClick={() => setPopup(false)}>Noted, My dear</button>
                    </div>
                </div>
            )}
        </div>
    )
}