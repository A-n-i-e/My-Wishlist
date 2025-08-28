import Background from '../assets/images/background-2.png';
import Cute from '../assets/images/steph-cute.png';

export default function Hero() {
    return (
        <section className='bg-cover bg-center bg-no-repeat h-full w-full flex flex-col justify-center font-lazydog' style={{ backgroundImage: `url(${Background})` }}>
            <h1 className='text-6xl md:text-9xl text-center text-white'>Stephanie's <br /> Wishlist</h1>  
            {/* <img src={Cute} alt="Cute Stephanie"  className='absolute bottom-0 right-10' /> */}
        </section>
    )

}