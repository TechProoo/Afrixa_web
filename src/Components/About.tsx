import PhoneOne from "../assets/Chat page 31.png";
import Extras from "./Extras";
import { motion } from "framer-motion";


const About = () => {
  return (
    <div className="about_container mt-20">
      <motion.div
        className="abt_first mx-5"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row justify-evenly items-center gap-10 md:gap-20">
          <motion.div
            className="flex-1 w-full md:w-auto"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text_bold text-start">
              <h1>One App.</h1>
              <h1>All Your</h1>
              <h1>Conversations</h1>
            </div>
            <div className="text_small mt-6 md:mt-10 text-start">
              <p>
                Tired of juggling WhatsApp, Telegram, and Messenger? Afrixa
                brings your chats, groups, and communities together — personal,
                business, and everything in between — in one clean,
                data-efficient space. Stay close to who matters most without app
                fatigue.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 flex justify-center w-full md:w-auto mt-8 md:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              className="h-[500px] md:h-[500px] w-auto max-w-full"
              src={PhoneOne}
              alt=""
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="abt_second mx-5 md:mx-10 mt-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col-reverse md:flex-row justify-evenly items-center gap-10 md:gap-20">
          <motion.div
        className="flex-1 flex justify-center w-full md:w-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
          >
        <img className=" h-[500px] md:h-[500px] w-auto max-w-full" src={PhoneOne} alt="" />
          </motion.div>

          <motion.div
        className="flex-1 w-full md:w-auto"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
          >
        <div className="text_bold text-start">
          <h1>Made For</h1>
          <h1>Movers and</h1>
          <h1>Makers.</h1>
        </div>
        <div className="text_small mt-6 md:mt-10 text-start">
          <p>
            Whether you're running a business, growing a fanbase, or
            starting a movement, Afrixa gives you the tools to organize,
            connect, and earn. Manage group chats, engage your audience, and
            monetize your content — all in real time, right from your home
            screen.
          </p>
        </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="flex justify-center items-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Extras />
      </motion.div>
    </div>
  );
};

export default About;
