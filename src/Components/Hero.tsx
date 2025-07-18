import App_store from "../assets/Vector.png";
import Play_store from "../assets/logos_google-play-icon.png";
import { motion } from "framer-motion";
import Phone from "./Phone";

const Hero = () => {
  return (
    <motion.div
      className="hero_container min-h-screen text-white flex flex-col items-center justify-center px-4 py-10 md:py-20 text-center"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } },
      }}
    >
      {/* Text Section */}
      <motion.div
        className="hero_text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-[40px] sm:text-[40px] md:text-[60px] font-extrabold leading-tight text-green-400">
          One App.
        </h1>
        <h1 className="sm:block md:text-[60px] text-[40px]">A Million Possibilities.</h1>
        <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-200 max-w-xl mx-auto">
          Simplify life with chat, commerce, and payments — all in one app.
        </p>
      </motion.div>

      {/* Store Buttons */}
      <motion.div
        className="hero_link flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto items-center justify-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <button className="flex items-center gap-2 px-5 py-3 rounded-md bg-white text-black shadow-md hover:bg-gray-100 transition w-full sm:w-auto justify-center">
          <img src={App_store} alt="App Store" className="h-6 w-6" />
          <span>App Store</span>
        </button>
        <button className="flex items-center gap-2 px-5 py-3 rounded-md bg-white text-black shadow-md hover:bg-gray-100 transition w-full sm:w-auto justify-center">
          <img src={Play_store} alt="Play Store" className="h-6 w-6" />
          <span>Play Store</span>
        </button>
      </motion.div>

      {/* Phone with Glow */}
      <motion.div
        className="relative mt-16 w-full flex justify-center ml-[-130px] md:ml-0"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {/* Glow Effect */}
        <div className="absolute inset-4 rounded-[60px] blur-3xl bg-green-500 opacity-30 z-0" />

        {/* Phone Component */}
        <div className="relative z-10 w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px]">
          <Phone />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
