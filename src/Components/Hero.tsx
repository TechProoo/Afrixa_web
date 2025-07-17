import App_store from "../assets/Vector.png";
import Play_store from "../assets/logos_google-play-icon.png";
import Phone from "../assets/Chat page 13.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      className="mt-15 hero_container"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } },
      }}
    >
      <motion.div
        className="hero_text"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-[55px] md:text-[70px] font-bold leading-tight">
          One App.
        </h1>
        <h1 className="text-[55px] md:text-[70px] font-bold leading-tight mt-2">
          A Million Possibilities.
        </h1>
        <p className="mt-6 md:mt-10 text-base md:text-lg max-w-md md:max-w-xl mx-auto text-center">
          Simplify life with chat, commerce, and payments — all in one app.
        </p>
      </motion.div>

      <motion.div
        className="hero_link flex flex-col md:flex-row items-center justify-center mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="flex flex-col md:flex-row gap-4 md:gap-5 w-full md:w-auto">
          <motion.button
        className="flex items-center gap-2 px-4 py-2 rounded-md bg-white shadow hover:bg-gray-100 transition text-base md:text-lg w-full md:w-auto justify-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
          >
        <img src={App_store} alt="App Store" className="h-6 w-6" />
        <span>App Store</span>
          </motion.button>

          <motion.button
        className="flex items-center gap-2 px-4 py-2 rounded-md bg-white shadow hover:bg-gray-100 transition text-base md:text-lg w-full md:w-auto justify-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
          >
        <img src={Play_store} alt="Play Store" className="h-6 w-6" />
        <span>Play Store</span>
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        className="hero_pic flex justify-center mt-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <img src={Phone} className="h-[650px]" alt="" />
      </motion.div>

      <div className="hero_bg"></div>
    </motion.div>
  );
};

export default Hero;
