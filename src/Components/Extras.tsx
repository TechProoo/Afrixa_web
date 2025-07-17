import Image1 from "../assets/02.png";
import Image2 from "../assets/08.png";
import Image3 from "../assets/14.png";
import App_store from "../assets/Vector.png";
import Play_store from "../assets/logos_google-play-icon.png";
import Logo from "../assets/e43ed4da90131d3ce337ae91b987aef184aff429 (2).png";
import { motion } from "framer-motion";

const Extras = () => {
  return (
    <motion.div
      className="extras_container mt-15 w-[80%]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
    <motion.div
      className="extras_cover flex"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="extras_img mt-20"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        animate={{
        y: [0, -20, 0],
        }}
        transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        }}
      >
        <img className="w-300" src={Image3} alt="" />
      </motion.div>
      <motion.div
        className="extras_img"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        animate={{
        y: [0, -20, 0],
        }}
        transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1,
        }}
      >
        <img className="w-300" src={Image1} alt="" />
      </motion.div>
      <motion.div
        className="extras_img mt-20"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        animate={{
        y: [0, -20, 0],
        }}
        transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2,
        }}
      >
        <img className="w-300" src={Image2} alt="" />
      </motion.div>
    </motion.div>

      <motion.div
        className="extras_text md:mt-[-150px] sm:mt-[-100px]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h1>Discover. Sell. Earn.</h1>
        <h1>All in One Tap.</h1>
        <p className="mt-5 text-center md:w-[50%] mx-auto">
          From side hustles to small shops, Afrixa helps you find, follow, and
          buy from the people and brands you trust. Want to start selling? Go
          from chat to checkout in seconds — with no extra apps or setup.
        </p>
      </motion.div>

      <motion.div
        className="hero_link flex flex-col md:flex-row items-center justify-center mt-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row gap-4 md:gap-5 w-full md:w-auto items-center justify-center">
          <motion.button
        className="flex items-center gap-2 px-4 py-2 rounded-md bg-white shadow hover:bg-gray-100 transition text-sm md:text-base w-full md:w-auto justify-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
          >
        <img src={App_store} alt="" className="w-6 h-6" />
        App Store
          </motion.button>
          <motion.button
        className="flex items-center gap-2 px-4 py-2 rounded-md bg-white shadow hover:bg-gray-100 transition text-sm md:text-base w-full md:w-auto justify-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
          >
        <img src={Play_store} alt="" className="w-6 h-6" />
        Play Store
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        className="extras_logo flex justify-center mt-25"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <img src={Logo} className="w-[70%]" alt="" />
      </motion.div>
    </motion.div>
  );
};

export default Extras;
