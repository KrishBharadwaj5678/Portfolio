import React, { useState } from 'react';
import MyWorkHeader from "./MyWorkHeader";
import { FaEye, FaTimes, FaVideo } from 'react-icons/fa'; 
import { FaGithub, FaPlay, FaExternalLinkAlt } from 'react-icons/fa';
// Web Development
import gamelyImg from "../../assets/WebDev/Gamely.png";
import gamelyVid from "../../assets/WebDev/Gamely.mp4";
import DharmaGyanImg from "../../assets/WebDev/DharmaGyan.png";
import DharmaGyanVid from "../../assets/WebDev/DharmaGyan.mp4";
import YT2MP3Img from "../../assets/WebDev/YT2MP3.png";
import YT2MP3Vid from "../../assets/WebDev/YT2MP3.mp4";
import FilmSpotterImg from "../../assets/WebDev/FilmSpotter.png";
import FilmSpotterVid from "../../assets/WebDev/FilmSpotter.mp4";
import InstaSnoopImg from "../../assets/WebDev/InstaSnoop.png";
import InstaSnoopVid from "../../assets/WebDev/InstaSnoop.mp4";
import WrestleWaveVid from "../../assets/WebDev/WrestleWave.mp4";
import WrestleWaveImg from "../../assets/WebDev/WrestleWave.png";
import StockFlixVid from "../../assets/WebDev/StockFlix.mp4";
import StockFlixImg from "../../assets/WebDev/StockFlix.png";
import VisigenVid from "../../assets/WebDev/Visigen.mp4";
import VisigenImg from "../../assets/WebDev/Visigen.png";
import GesturaVid from "../../assets/WebDev/Gestura.mp4";
import GesturaImg from "../../assets/WebDev/Gestura.png";
import DrawlyVid from "../../assets/WebDev/Drawly.mp4";
import DrawlyImg from "../../assets/WebDev/Drawly.png";
import NeuraAIVid from "../../assets/WebDev/NeuraAI.mp4";
import NeuraAIImg from "../../assets/WebDev/NeuraAI.png";
import ChatzyxVid from "../../assets/WebDev/Chatzyx.mp4";
import ChatzyxImg from "../../assets/WebDev/Chatzyx.png";
import LinkoVid from "../../assets/WebDev/Linko.mp4";
import LinkoImg from "../../assets/WebDev/Linko.png";
import DetectlyVid from "../../assets/WebDev/Detectly.mp4";
import DetectlyImg from "../../assets/WebDev/Detectly.png";
import SarvyaVid from "../../assets/WebDev/Sarvya.mp4";
import SarvyaImg from "../../assets/WebDev/Sarvya.png";

// AR (best portrait -> Square 1:1)
import ARStreamVid from "../../assets/AR/ARStream.mp4";
import ARStreamImg from "../../assets/AR/ARStream.jpg";
import HeliSphereVid from "../../assets/AR/HeliSphere.mp4";
import HeliSphereImg from "../../assets/AR/HeliSphere.jpg";
import BeastifyVid from "../../assets/AR/Beastify.mp4";
import BeastifyImg from "../../assets/AR/Beastify.png";

// 3D 
import GoldRingImg from "../../assets/3D/GoldRing.png";

// Python
import HandTrackPyVid from "../../assets/Python/HandTrackPy.mp4";
import HandTrackPyImg from "../../assets/Python/HandTrackPy.png";
import ScriptifyVid from "../../assets/Python/Scriptify.mp4";
import ScriptifyImg from "../../assets/Python/Scriptify.png";
import AstroPulseVid from "../../assets/Python/AstroPulse.mp4";
import AstroPulseImg from "../../assets/Python/AstroPulse.png";
import GlobalTranslateVid from "../../assets/Python/GlobalTranslate.mp4";
import GlobalTranslateImg from "../../assets/Python/GlobalTranslate.png";
import EmailSenderVid from "../../assets/Python/EmailSender.mp4";
import EmailSenderImg from "../../assets/Python/EmailSender.png";
import InspireVistaVid from "../../assets/Python/InspireVista.mp4";
import InspireVistaImg from "../../assets/Python/InspireVista.png";
import BookinVid from "../../assets/Python/Bookin.mp4";
import BookinImg from "../../assets/Python/Bookin.png";
import WordWhizVid from "../../assets/Python/WordWhiz.mp4";
import WordWhizImg from "../../assets/Python/WordWhiz.png";
import MoodMeterVid from "../../assets/Python/MoodMeter.mp4";
import MoodMeterImg from "../../assets/Python/MoodMeter.png";


// Updated data structure for multiple categories
const projectsData = {
  "Web Development": [
    {
      name: "Gamely",
      description: "Gamely is a free gaming website where you can play games directly in your browser. Enjoy a variety of exciting games anytime, anywhere.",
      image: gamelyImg,
      gitLink: "https://github.com/KrishBharadwaj5678/Gamely",
      demoLink: "https://gamely.vercel.app/", 
      videoLink: gamelyVid, 
    },
    {
      name: "Dharma Gyan",
      description: "Unlock the timeless wisdom of Indian gods with Dharma Gyan. Discover profound spiritual teachings, all thoughtfully curated to inspire and enlighten.",
      image: DharmaGyanImg,
      gitLink: "https://github.com/KrishBharadwaj5678/DharmaGyan",
      demoLink: "https://dharmagyan.onrender.com/", 
      videoLink: DharmaGyanVid
    },
    {
      name: "Drawly",
      description: "Drawly is the ultimate online whiteboard for creativity! It lets you to share your ideas in real time. Drawly smooth interface makes it easy and fun to bring your thoughts to life.",
      image: DrawlyImg,
      gitLink: "https://github.com/KrishBharadwaj5678/Drawly",
      demoLink: "https://drawly.onrender.com/", 
      videoLink: DrawlyVid
    },
    {
      name: "Neura AI",
      description: "Neura AI is an advanced AI chatbot that provides instant responses tailored to your needs. It features text to speech and allows you to easily download prompts as PDFs.",
      image: NeuraAIImg,
      gitLink: "https://github.com/KrishBharadwaj5678/NeuraAI",
      demoLink: "https://neuraai.onrender.com/", 
      videoLink: NeuraAIVid
    },
    {
      name: "Detectly",
      description: "Detectly is a real-time web application that detects faces, body poses, hands, gestures, and objects using your webcam directly in the browser.",
      image: DetectlyImg,
      gitLink: "https://github.com/KrishBharadwaj5678/Detectly/",
      demoLink: "https://detectly.onrender.com/", 
      videoLink: DetectlyVid
    },
    {
      name: "Linko",
      description: "Linko is a modern video conferencing webapp designed for seamless virtual communication. Linko connects teams, families, and friends effortlessly.",
      image: LinkoImg,
      gitLink: "https://github.com/KrishBharadwaj5678/Linko",
      demoLink: "https://linko.onrender.com/", 
      videoLink: LinkoVid
    },
    {
      name: "Chatzyx",
      description: "Chatzyx connects you with random users from around the world for real time. Dive into a dynamic chat experience and make connections that matter!",
      image: ChatzyxImg,
      gitLink: "https://github.com/KrishBharadwaj5678/Chatzyx",
      demoLink: "https://chatzyx.onrender.com/", 
      videoLink: ChatzyxVid
    },
    {
      name: "Gestura",
      description: "An advanced AI powered webpage for real time detection of face gestures, landmarks, age, and gender. Gestura brings facial recognition technology to your fingertips.",
      image: GesturaImg,
      gitLink: "https://github.com/KrishBharadwaj5678/Gestura",
      demoLink: "https://gestura.onrender.com/", 
      videoLink: GesturaVid
    },
    {
      name: "Stock Flix",
      description: "Stay ahead of the market with Stock Flick. Get stock details, track top gainers and losers, and access comprehensive global market status updates.",
      image: StockFlixImg,
      gitLink: "https://github.com/KrishBharadwaj5678/StockFlick",
      demoLink: "https://stockflick.netlify.app/", 
      videoLink: StockFlixVid
    },
    {
      name: "Sarvya",
      description: "Sarvya is an AI-powered voice assistant that answers your questions, helps with daily tasks, and automates simple actions all through natural voice commands.",
      image: SarvyaImg,
      gitLink: "https://github.com/KrishBharadwaj5678/Sarvya",
      demoLink: "https://sarvya.vercel.app", 
      videoLink: SarvyaVid
    },
    {
      name: "Wrestle Wave",
      description: "Dive into WrestleWave, the exciting game where you identify WWE Superstars by their theme music. Enjoy immersive sound effects and prove your wrestling knowledge.",
      image: WrestleWaveImg,
      gitLink: "https://github.com/KrishBharadwaj5678/WrestleWave-1",
      demoLink: "https://wrestlewave.netlify.app/", 
      videoLink: WrestleWaveVid
    },
    {
      name: "Film Spotter",
      description: "Film Spotter is your curated guide to the world of cinema. It helps you navigate the vast landscape of movies information, ensuring every viewing experience is memorable.",
      image: FilmSpotterImg,
      gitLink: "https://github.com/KrishBharadwaj5678/FilmSpotter",
      demoLink: "https://filmspotter.netlify.app/", 
      videoLink: FilmSpotterVid
    },
    {
      name: "YT2Music",
      description: "Transform your favorite YouTube videos into high quality audio with YT2Music! Whether it’s music, podcasts YT2Music delivers the audio experience you crave.",
      image: YT2MP3Img,
      gitLink: "https://github.com/KrishBharadwaj5678/YT2Music",
      demoLink: "https://yt-2-music.netlify.app/", 
      videoLink: YT2MP3Vid
    },
    {
      name: "Visigen",
      description: "Discover the future of art creation. With Visigen, simply enter a prompt and our powerful AI will generate unique images that capture your vision.",
      image: VisigenImg,
      gitLink: "https://github.com/KrishBharadwaj5678/Visigen",
      demoLink: "https://visigen.netlify.app/", 
      videoLink: VisigenVid
    },
    {
      name: "Insta Snoop",
      description: "InstaSnoop enables you to deep dive into Instagram profiles, offering a seamless way to scrape and explore user data for valuable insights.",
      image: InstaSnoopImg,
      gitLink: "https://github.com/KrishBharadwaj5678/InstaSnoop",
      demoLink: "https://instasnoop.netlify.app/", 
      videoLink: InstaSnoopVid
    },
  ],
  "Augmented Reality": [
    {
      name: "Beastify",
      description: "Beastify is an immersive AR experience where wildlife comes to life! Explore stunning 3D animal models, uncover fascinating facts with text-to-speech.",
      image: BeastifyImg,
      gitLink: "https://github.com/KrishBharadwaj5678/Beastify",
      demoLink: "https://beastify.onrender.com/",
      videoLink: BeastifyVid
    },
    {
      name: "HeliSphere",
      description: "Heli Sphere offers an immersive AR experience with a customizable 3D helicopter model. Select, Scale, adjust Speed and Position in your real world environment.",
      image: HeliSphereImg,
      gitLink: "https://github.com/KrishBharadwaj5678/Heli-Sphere",
      demoLink: "https://drive.google.com/file/d/1m19KtJQ-Yef_QL7YNKiPtsoLOVY63FWM/view?usp=sharing",
      videoLink: HeliSphereVid
    },
    {
      name: "AR Stream",
      description: "An augmented reality app developed with Unity that tracks images in real time. Upon detection, it overlays specified video seamlessly onto the tracked image.",
      image: ARStreamImg,
      demoLink: "https://drive.google.com/file/d/13SmxGZ6HcaWwHZ5YEKYXUpAlhEdbyakS/view?usp=sharing",
      videoLink: ARStreamVid
    }
  ],
  "Python": [
    {
      name: "HandTrackPy",
      description: "HandTrackPy is a real time hand tracking which detects and tracks multiple hands, providing key landmarks for gesture recognition and interactive applications.",
      image: HandTrackPyImg,
      gitLink: "https://github.com/KrishBharadwaj5678/HandTrackPy",
      videoLink: HandTrackPyVid
    },
    {
      name: "Scriptify",
      description: "Unleash the charm of handwritten text with Scriptify! Instantly convert your typed words into beautiful handwriting.",
      image: ScriptifyImg,
      gitLink: "https://github.com/KrishBharadwaj5678/Scriptify",
      demoLink: "https://scriptify.streamlit.app/", 
      videoLink: ScriptifyVid
    },
    {
      name: "AstroPulse",
      description: "Stay updated with daily,weekly and monthly horoscopes tailored to your zodiac sign. Align yourself with the cosmic rhythms for better living.",
      image: AstroPulseImg,
      gitLink: "https://github.com/KrishBharadwaj5678/AstroPulse",
      demoLink: "https://astropulse.streamlit.app/", 
      videoLink: AstroPulseVid
    },
    {
      name: "Global Translate",
      description: "Global Translate brings the world to your fingertips with its powerful translation engine. Effortlessly communicate across borders and cultures with precision and ease.",
      image: GlobalTranslateImg,
      gitLink: "https://github.com/KrishBharadwaj5678/Global-Translate",
      demoLink: "https://global-translate.streamlit.app/", 
      videoLink: GlobalTranslateVid
    },
    {
      name: "Email Sender",
      description: "Streamline your communication with our intuitive email sending platform. Our user friendly interface lets you effortlessly compose and send emails to recipients at once.",
      image: EmailSenderImg,
      gitLink: "https://github.com/KrishBharadwaj5678/Email-Sender",
      demoLink: "https://mail-sender.streamlit.app/", 
      videoLink: EmailSenderVid
    },
    {
      name: "Inspire Vista",
      description: "Feeling stuck or in need of a little inspiration? You've come to the right place! Our Motivational Quotes Generator is here to lift your spirits and help you seize the day.",
      image: InspireVistaImg,
      gitLink: "https://github.com/KrishBharadwaj5678/Inspire-Vista",
      demoLink: "https://inspire-vista.streamlit.app/", 
      videoLink: InspireVistaVid
    },
    {
      name: "Bookin",
      description: "Bookin provides a powerful admin dashboard for managing hotel bookings. This system allows you to effortlessly handle all booking tasks.",
      image: BookinImg,
      gitLink: "https://github.com/KrishBharadwaj5678/Bookin",
      demoLink: "https://bookin.streamlit.app/", 
      videoLink: BookinVid
    },
    {
      name: "Word Whiz",
      description: "Our comprehensive online dictionary provides detailed parts of speech, synonyms, antonyms, and example sentences to help you master every word.",
      image: WordWhizImg,
      gitLink: "https://github.com/KrishBharadwaj5678/Word-Whiz",
      demoLink: "https://word-whiz.streamlit.app/", 
      videoLink: WordWhizVid
    },
    {
      name: "Mood Meter",
      description: "Mood Meter allows you to instantly understand the sentiment of any text, providing accurate and swift emotional insights.",
      image: MoodMeterImg,
      gitLink: "https://github.com/KrishBharadwaj5678/Mood-Meter",
      demoLink: "https://moodmeter.streamlit.app/", 
      videoLink: MoodMeterVid
    },
  ],
  "3D": [
    {
      name: "Gold Ring",
      description: "High Quality 3D model of a beautifully crafted ring. Ideal for designers, game developers, and 3D artists looking for a asset.",
      image: GoldRingImg,
      demoLink: "https://skfb.ly/puxLx",
      videoLink: "https://sketchfab.com/models/f182351c85454a9999d5e5465ba18c74/embed"
    }
  ]
  // "App Development": [
  //   {
  //     name: "Mobile App Project",
  //     description: "A mobile app developed for iOS/Android",
  //     image: "app_project_1.png",
  //     gitLink: "https://github.com/app_project1",
  //     demoLink: "https://demo.app_project1.com",
  //     videoLink: "https://www.youtube.com/embed/app_project_video"
  //   }
  // ]
};

const MyWork = () => {
  const [selectedTab, setSelectedTab] = useState("Web Development");
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState({
    "Web Development": 6,
    "AR": 6,
    "Python": 6,
    "3D": 6,
    "App Development": 6
  }); // Tracks the visible projects per category

  // Function to handle tab click
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    setVisibleProjects(prev => ({ ...prev, [tab]: 6 })); // Reset to 6 when switching tabs
  };

  // Show the demo video in the modal
  const handleDemoClick = (project) => {
    setModalData(project);  // Set the modal data with the clicked project
    setShowModal(true); // Show the modal
  };

  // Hide the modal
  const handleCloseModal = () => {
    setShowModal(false);
    setModalData(null);
  };

  // Load more projects (increase visible projects by 6)
  const handleLoadMore = () => {
    setVisibleProjects(prev => ({
      ...prev,
      [selectedTab]: prev[selectedTab] + 6
    }));
  };

  return (
    <div className="text-white p-6 md:p-16 mt-0 md:mt-[-30px]">
      
      <MyWorkHeader />

      {/* Tabs */}
      <div className="flex justify-center flex-wrap mt-13 mb-8 gap-4 md:flex-nowrap space-x-6 md:mb-12">
        {Object.keys(projectsData).map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`py-3 px-5 md:py-4 md:px-5 cursor-pointer rounded-sm text-lg font-semibold transition-all duration-300 transform ${
              selectedTab === tab
                ? "text-white gradient-border bg-gray-800 scale-105"
                : "bg-gray-800 text-gray-400  hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {projectsData[selectedTab].slice(0, visibleProjects[selectedTab]).map((project, index) => (
          <div
            key={index}
            className="bg-[#191919] p-4 rounded-md shadow-2xl transition-transform duration-300 transform hover:scale-102" 
          >
            {/* Project Image */}
            <img
              src={`${project.image}`}
              alt={project.name}
              className="w-full h-48 md:h-60 object-cover md:object-fill rounded-md mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
            <p className="text-gray-400 mb-4 line-clamp-3 md:line-clamp-0">{project.description}</p>

            <div className="flex justify-evenly mt-4">
              {/* GitHub Link with Icon */}
              {
                project.gitLink && (
                  <a
                    href={project.gitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center cursor-pointer hover:text-gray-300 text-lg"
                  >
                    <FaGithub className="mr-2 text-2xl md:text-xl" />
                    <span className="hidden sm:inline text-md">GitHub</span>
                  </a>
                )
              }

              {/* Demo Button with Icon */}
              <button
                onClick={() => handleDemoClick(project)}
                className="inline-flex cursor-pointer items-center hover:text-gray-300 text-lg"
              >
                <FaVideo className="mr-2 text-2xl md:text-xl" />
                <span className="hidden sm:inline text-lg">Demo</span>
              </button>

              {/* Live Demo Link with Icon */}

              {
                project?.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center cursor-pointer hover:text-gray-300 text-lg"
                  >
                    <FaEye className="mr-2 text-2xl md:text-xl" />
                    <span className="hidden sm:inline text-lg">Live</span>
                  </a>
                )
              }
              
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleProjects[selectedTab] < projectsData[selectedTab].length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleLoadMore}
            className="gradient-border text-white px-5 py-4 rounded-md text-xl font-semibold hover:bg-indigo-700 transition-all duration-300 mt-5 cursor-pointer"
          >
            Load More
          </button>
        </div>
      )}

      {/* Modal for Demo */}
      {showModal && modalData && (
        <div
          className="fixed inset-0 bg-opacity-80 flex justify-center items-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-[#191919] p-6 rounded-md md:rounded-xl w-full m-4 md:w-2/4 max-w-3xl relative"
            onClick={(e) => e.stopPropagation()} 
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-5 right-5 md:top-4 md:right-4 text-white text-2xl bg-red-700 hover:bg-red-800 p-1 md:p-2 rounded-full cursor-pointer transition-all duration-300"
            >
              <FaTimes />
            </button>

            <h3 className="text-2xl md:text-3xl font-semibold mb-4">{modalData.name}</h3>
            <div className="mb-4">
              <iframe
                src={modalData.videoLink}
                title={modalData.name}
                width="100%"
                className="rounded-md md:rounded-xl h-[250px] md:h-[400px]"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyWork;
