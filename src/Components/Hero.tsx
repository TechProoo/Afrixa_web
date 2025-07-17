import App_store from "../assets/Vector.png";
import Play_store from "../assets/logos_google-play-icon.png";
import Phone from "../assets/Chat page 13.png";

const Hero = () => {
  return (
    <div className="mt-15 hero_container">
      <div className="hero_text">
        <h1>One App.</h1>
        <h1>A Million Possibilities.</h1>
        <p className="mt-10">
          Simplify life with chat, commerce, and payments — all in one app.
        </p>
      </div>

      <div className="hero_link flex items-center justify-center mt-10">
        <div className="flex gap-5">
          <button className="flex items-center gap-2">
            <img src={App_store} alt="" />
            App Store
          </button>
          <button className="flex items-center gap-2">
            {" "}
            <img src={Play_store} alt="" />
            Play Store
          </button>
        </div>
      </div>

      <div className="hero_pic flex justify-center mt-10">
        <img src={Phone} className="h-[650px]" alt="" />
      </div>

      <div className="hero_bg"></div>
    </div>
  );
};

export default Hero;
