import PhoneOne from "../assets/Chat page 31.png";
import Extras from "./Extras";

const About = () => {
  return (
    <div className="about_container mt-20">
      <div className="abt_first mx-5">
        <div className="flex justify-evenly items-center gap-20">
          <div className="flex-1">
            <div className="text_bold text-start">
              <h1>One App.</h1>
              <h1>All Your</h1>
              <h1>Conversations</h1>
            </div>
            <div className="text_small mt-10 text-start">
              <p>
                Tired of juggling WhatsApp, Telegram, and Messenger? Afrixa
                brings your chats, groups, and communities together — personal,
                business, and everything in between — in one clean,
                data-efficient space. Stay close to who matters most without app
                fatigue.
              </p>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img className="h-[500px]" src={PhoneOne} alt="" />
          </div>
        </div>
      </div>
      <div className="abt_second mx-10 mt-20">
        <div className="flex justify-evenly items-center">
          <div className="flex-1 flex justify-center">
            <img className="h-[500px]" src={PhoneOne} alt="" />
          </div>
          <div className="flex-1">
            <div className="text_bold text-start">
              <h1>Made For</h1>
              <h1>Movers and</h1>
              <h1>Makers.</h1>
            </div>
            <div className="text_small mt-10 text-start">
              <p>
                Whether you're running a business, growing a fanbase, or
                starting a movement, Afrixa gives you the tools to organize,
                connect, and earn. Manage group chats, engage your audience, and
                monetize your content — all in real time, right from your home
                screen.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Extras />
      </div>
    </div>
  );
};

export default About;
