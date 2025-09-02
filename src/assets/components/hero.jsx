import { motion } from "motion/react";

export default function Hero() {
  const images = [
    { src: "/hero/steph-shades.png", className: "-top-12 -left-15 w-70 md:w-80" },
    { src: "/hero/steph-study.png", className: "top-0 -right-23 w-50 md:w-70" },
    { src: "/hero/steph-cute.png", className: "-bottom-30 -left-50 w-100 lg:w-120" },
    { src: "/hero/steph-gang.png", className: "-bottom-2 -right-8 w-40 md:w-60" },
    { src: "/hero/steph-young.png", className: "-bottom-15 left-1/2 -translate-x-1/2 w-50 md:w-60 lg:w-70 z-11" }, // center
  ];

  return (
    <div className="relative h-[650px] w-full flex items-center justify-center overflow-hidden bg-sky-blue bg-cover" 
    style={{ backgroundImage: `url(${"/items/background.png"})` }}>

      <h1 className="absolute text-7xl md:text-8xl lg:text-9xl font-bold text-white text-center font-lazydog z-10">
        STEPH&apos;S <br /> WISHLIST
      </h1>


      {images.map((img, i) => (
        <motion.img
          key={i}
          src={img.src}
          alt={`wishlist-${i}`}
          className={`absolute object-contain ${img.className}`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: i * 0.4,
            type: "spring",
            stiffness: 200,
            damping: 15
          }}
          whileHover={{
            scale: 1.3,
            x: [0, -5, 5, -5, 0], // shake left-right
            transition: { 
                duration: 0.5, 
                ease: "easeOut"
            },
            }}
          
        />
      ))}
    </div>
  );
}
