import Frame from "../assets/471_component.png";
import { Search, MoreVertical, Plus } from "lucide-react";
import App_store from "../assets/Vector.png";
import Play_store from "../assets/logos_google-play-icon.png";
import { motion } from "framer-motion";
import { MessageCircle, BarChart2, Play, Grid, User } from "lucide-react"; // or any icon set of your choice
import { useState } from "react";

const bottomTabs = [
  { label: "Chats", icon: <MessageCircle className="w-5 h-5" /> },
  { label: "Channels", icon: <BarChart2 className="w-5 h-5" /> },
  { label: "Moments", icon: <Play className="w-5 h-5" /> },
  { label: "Discover", icon: <Grid className="w-5 h-5" /> },
  { label: "Me", icon: <User className="w-5 h-5" /> },
];

const Phone = () => {
  const [activeTab, setActiveTab] = useState("Chats");
  const [showModal, setShowModal] = useState(false);

  const [seenStories, setSeenStories] = useState<string[]>([]);
  const stories = [
    { name: "Sammy...", img: "https://i.pravatar.cc/100?img=1" },
    { name: "Jane Lee", img: "https://i.pravatar.cc/100?img=2" },
    { name: "Georgina", img: "https://i.pravatar.cc/100?img=3" },
    { name: "Joseph", img: "https://i.pravatar.cc/100?img=4" },
    { name: "Joel", img: "https://i.pravatar.cc/100?img=5" },
  ];

  const handleStoryClick = (name: string) => {
    if (!seenStories.includes(name)) {
      setSeenStories((prev) => [...prev, name]);
    }
    setShowModal(true);
  };

  const chatData = [
    {
      name: "George Simmons",
      msg: "Lorem ipsum dolor sit amet consectetur...",
      time: "10:30 AM",
      status: "online",
      avatar:
        "https://contributors.gettyimages.com/imgsz/800/c1daf68a-e976-47bc-aedc-c6f2234b318f.jpg",
    },
    {
      name: "Boomplay Group",
      msg: "Sender: Lorem ipsum dolor sit amet consectetur...",
      time: "4:30 PM",
      avatar:
        "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
    },
    {
      name: "Cody Fisher",
      msg: "📹 Video",
      time: "4:30 PM",
      status: "online",
      unread: true,
      avatar:
        "https://imageio.forbes.com/specials-images/imageserve/5faad4255239c9448d6c7bcd/Best-Animal-Photos-Contest--Close-Up-Of-baby-monkey/960x0.jpg?format=jpg&width=960",
    },
    {
      name: "Robert Allen",
      msg: "🖼️ Photo Lorem ipsum dolor sit amet consectetur...",
      time: "4:30 PM",
      status: "online",
      avatar:
        "https://tse1.mm.bing.net/th/id/OET.7252da000e8341b2ba1fb61c275c1f30?w=594&h=594&c=7&rs=1&r=0&o=5&pid=1.9",
    },
    {
      name: "Epic Game",
      msg: "John Paul: @Robert Lorem ipsum dolor sit amet...",
      time: "4:30 PM",
      mentions: 24,
      status: "mention",
      avatar:
        "https://www.piclumen.com/wp-content/uploads/2024/10/piclumen-marquee-03.webp",
    },
    {
      name: "John Paul",
      msg: "✅ Sticker",
      time: "4:30 PM",
      avatar:
        "https://cdn.pixabay.com/photo/2024/12/05/21/28/candles-9247498_1280.jpg",
    },
    {
      name: "Ashley Kim",
      msg: "Can you review the docs by tomorrow?",
      time: "4:10 PM",
      unread: true,
      status: "online",
      avatar: "https://i.pravatar.cc/100?img=12",
    },
    {
      name: "Developers Chat",
      msg: "🧠 @Matt pushed new commits to dev branch",
      time: "4:00 PM",
      mentions: 4,
      avatar: "https://i.pravatar.cc/100?img=65",
    },
    {
      name: "Liam Howard",
      msg: "Let’s catch up later this week!",
      time: "3:45 PM",
      avatar: "https://i.pravatar.cc/100?img=6",
    },
    {
      name: "Olivia Carter",
      msg: "🎤 Voice Message (0:21)",
      time: "3:30 PM",
      unread: true,
      avatar: "https://i.pravatar.cc/100?img=7",
    },
    {
      name: "Study Group",
      msg: "📄 New file shared: Chapter-5.pdf",
      time: "3:15 PM",
      mentions: 1,
      avatar: "https://i.pravatar.cc/100?img=77",
    },
    {
      name: "Sara",
      msg: "✨ Sent a reaction",
      time: "3:00 PM",
      status: "online",
      avatar: "https://i.pravatar.cc/100?img=20",
    },
    {
      name: "Ravi Patel",
      msg: "📷 Check these pics!",
      time: "2:30 PM",
      avatar: "https://i.pravatar.cc/100?img=21",
    },
    {
      name: "Event Team",
      msg: "Reminder: Standup in 10 mins",
      time: "2:00 PM",
      mentions: 2,
      avatar: "https://i.pravatar.cc/100?img=23",
    },
    {
      name: "Tina",
      msg: "❤️ Miss you!",
      time: "1:45 PM",
      unread: true,
      avatar: "https://i.pravatar.cc/100?img=14",
    },
    {
      name: "Daniel Lee",
      msg: "🏷️ Label updated: #bugfix",
      time: "1:00 PM",
      avatar: "https://i.pravatar.cc/100?img=24",
    },
    {
      name: "Gaming Squad",
      msg: "@Chris Let's queue up tonight 🎮",
      time: "12:30 PM",
      mentions: 6,
      avatar: "https://i.pravatar.cc/100?img=28",
    },
    {
      name: "Emma",
      msg: "🌸 Happy Birthday!",
      time: "12:00 PM",
      status: "online",
      avatar: "https://i.pravatar.cc/100?img=30",
    },
    {
      name: "Lucas Moore",
      msg: "👍 Okay, got it.",
      time: "11:45 AM",
      avatar: "https://i.pravatar.cc/100?img=31",
    },
    {
      name: "Work Sync",
      msg: "📅 Meeting moved to 3 PM",
      time: "11:00 AM",
      mentions: 3,
      avatar: "https://i.pravatar.cc/100?img=55",
    },
  ];

  return (
    <div className="relative w-[414px] h-[860px] mx-auto">
      {/* Screen inside the frame */}
      <div className="absolute top-[33px] left-[21px] w-[372px] h-[794px] bg-white rounded-[34px] overflow-hidden shadow-md z-10 font-sans text-sm flex flex-col">
        <div className="sticky top-0 z-10 bg-white">
          {/* Top Navigation */}
          <div className="flex items-center justify-between px-4 pt-4 pb-2">
            <h1 className="text-xl font-bold text-black">AFRIXA</h1>
            <div className="flex items-center gap-4 text-black">
              <Search className="w-5 h-5" />
              <MoreVertical className="w-5 h-5" />
            </div>
          </div>

          {/* Stories Row */}
          <div className="flex space-x-4 overflow-x-auto px-4 pb-3 mt-1 no-scrollbar">
            {stories.map((user, i) => (
              <button
                key={i}
                onClick={() => handleStoryClick(user.name)}
                className="flex flex-col items-center text-center w-14 focus:outline-none group"
              >
                <div
                  className={`w-12 h-12 rounded-full border-[2.5px] p-[2px] ${
                    seenStories.includes(user.name)
                      ? "border-gray-300"
                      : "border-[#0E3FE2]"
                  }`}
                >
                  <img
                    src={user.img}
                    alt={user.name}
                    className="rounded-full w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <span className="text-xs mt-1 truncate text-[#4F2820]">
                  {user.name}
                </span>
              </button>
            ))}
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-3 px-4 border-b border-gray-100 pb-4">
            {["All 99+", "Unread 14", "Groups 10", "Favorites 10"].map(
              (label, i) => (
                <button
                  key={i}
                  onClick={() => console.log(label)}
                  className={`text-xs px-3 py-[6px] rounded-full border font-medium whitespace-nowrap transition-all duration-200 active:scale-95 hover:brightness-95 ${
                    i === 0
                      ? "bg-green-100 text-green-700 border-green-200 hover:bg-green-200"
                      : "text-gray-600 border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {label}
                </button>
              )
            )}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-2 pb-24">
          {chatData.map((chat, i) => (
            <div
              key={i}
              className="flex justify-between px-2 py-3 hover:bg-gray-100 rounded-lg cursor-pointer"
            >
              <div className="flex items-start gap-3 relative">
                <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                  {chat.avatar && (
                    <img
                      src={chat.avatar}
                      alt={chat.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                {chat.status === "online" && (
                  <span className="absolute bottom-0 left-8 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full" />
                )}
                {chat.status === "mention" && (
                  <span className="absolute bottom-0 left-8 w-2.5 h-2.5 bg-yellow-400 border-2 border-white rounded-full" />
                )}
                <div>
                  <h2 className="font-semibold text-sm text-start text-black">
                    {chat.name}
                  </h2>
                  <p className="text-gray-500 text-start text-xs truncate mt-1 w-[220px]">
                    {chat.msg}
                  </p>
                </div>
              </div>

              <div className="text-right min-w-[45px]">
                <p className="text-xs text-gray-500 font-semibold">
                  {chat.time}
                </p>
                {chat.mentions && (
                  <div className="w-5 h-5 bg-black text-white text-[10px] rounded-full flex items-center justify-center mt-1 ml-auto">
                    {chat.mentions}
                  </div>
                )}
                {chat.unread && !chat.mentions && (
                  <div className="w-3 h-3 bg-black rounded-full mt-1 ml-auto" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* FAB Button */}
        <div className="absolute bottom-24 right-5 z-20">
          <div className="relative">
            {/* Glowing background */}
            <div className="absolute inset-0 rounded-full bg-green-400 blur-xl opacity-50 animate-ping scale-110 z-[-1]" />

            {/* Actual FAB button */}
            <button className="w-12 h-12 bg-green-500 rounded-full text-white text-3xl flex items-center justify-center relative">
              <Plus />
            </button>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-white p-3 border-t flex justify-around items-center text-xs">
          {bottomTabs.map((tab) => {
            const isActive = activeTab === tab.label;

            return (
              <button
                key={tab.label}
                onClick={() => setActiveTab(tab.label)}
                className="flex flex-col items-center justify-center focus:outline-none"
              >
                <div
                  className={`mb-1 ${
                    isActive ? "text-black" : "text-[#7C7C7C]"
                  }`}
                >
                  {tab.icon}
                </div>
                <span
                  className={`${
                    isActive ? "text-black font-semibold" : "text-[#7C7C7C]"
                  }`}
                >
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Phone Frame Overlay */}
      <img
        src={Frame}
        alt="Phone Frame"
        className="absolute inset-0 w-full h-full object-contain z-20 pointer-events-none"
      />

      {showModal && (
        <div className="absolute top-0 left-0 w-full h-full bg-opacity-40 flex items-center justify-center z-30">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-xl w-[90%] max-w-[320px] p-6 text-center relative"
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
            >
              ×
            </button>
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Download Now
            </h2>
            <p className="text-gray-600 mb-6">
              Get the full experience on mobile
            </p>
            <motion.div
              className="hero_link flex flex-col gap-4 mt-8 w-full sm:w-auto items-center justify-center"
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
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Phone;
