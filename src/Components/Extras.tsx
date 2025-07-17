import Image1 from "../assets/02.png";
import Image2 from "../assets/08.png";
import Image3 from "../assets/14.png";
import App_store from "../assets/Vector.png";
import Play_store from "../assets/logos_google-play-icon.png";
import Logo from "../assets/e43ed4da90131d3ce337ae91b987aef184aff429 (2).png"

const Extras = () => {
  return (
    <div className="extras_container mt-15 w-[80%]">
      <div className="extras_cover flex ">
        <div className="extras_img mt-20">
          <img src={Image3} alt="" />
        </div>
        <div className="extras_img">
          <img src={Image1} alt="" />
        </div>
        <div className="extras_img mt-20">
          <img src={Image2} alt="" />
        </div>
      </div>
      <div className="extras_text">
        <h1>Discover.Sell.Earn.</h1>
        <h1>All in One Tap.</h1>
        <p className="mt-5 text-center w-[50%] mx-auto">
          From side hustles to small shops, Afrixa helps you find, follow, and
          buy from the people and brands you trust. Want to start selling? Go
          from chat to checkout in seconds — with no extra apps or setup.
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
      <div className="extras_logo flex justify-center mt-25">
        <img src={Logo} className="w-[70%]" alt="" />
      </div>
    </div>
  );
};

export default Extras;
