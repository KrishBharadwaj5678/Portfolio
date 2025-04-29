import React, { useState } from 'react';
import './Certifications.css';
import { AiOutlineClose } from 'react-icons/ai';
import theme_pattern from "../../assets/theme_pattern.svg";
import WebDev from "../../assets/Certificates/WebDev.jpeg";
import MongoDB from "../../assets/Certificates/MongoDB.jpg";
import HackVision from "../../assets/Certificates/Hackvision.jpg";
import CQIPInternship from "../../assets/Certificates/CQIPInternship.png";
import CSSHackerRank from "../../assets/Certificates/CSSHackerRank.jpeg";
import SIH from "../../assets/Certificates/SIH.jpeg";
import IBMSQL from "../../assets/Certificates/IBMSQL.jpg";
import HTMLKGCoding from "../../assets/Certificates/HTMLKGCoding.jpeg";
import Excel from "../../assets/Certificates/Excel.jpeg";
import HTMLProProfs from "../../assets/Certificates/HTMLProProfs.jpeg";
import CampusAmbassador from "../../assets/Certificates/CampusAmbassador.jpg";
import PythonHackerRank from "../../assets/Certificates/PythonHackerRank.jpeg";
import DigitalAdda from "../../assets/Certificates/DigitalAdda.jpg";
import JSKGCoding from "../../assets/Certificates/JSKGCoding.jpeg";
import HTMLCPPBuzz from "../../assets/Certificates/HTMLCPPBuzz.jpeg";
import CiscoThingQbator from "../../assets/Certificates/CiscoThingQbator.jpg";
import ImageAiThon from "../../assets/Certificates/ImageAiThon.jpg";
import AllenHouseOfInstitutions from "../../assets/Certificates/AllenHouseOfInstitutions.jpg";
import Spectra3 from "../../assets/Certificates/Spectra3.jpg";
import ACMTECT from "../../assets/Certificates/ACMTECT.jpg";

let certificates = [
  { title: "Web Dev Quiz GLA University", image: WebDev },
  { title: "AllenHouse Of Institutions", image: AllenHouseOfInstitutions},
  { title: "Hackvision Hackathon GLA University", image: HackVision },
  { title: "Atlas MongoDB", image: MongoDB },
  { title: "Smart Indian Hackathon", image: SIH },
  { title: "Cloud Quest Internship", image: CQIPInternship },
  { title: "Spectra 3.0", image: Spectra3},
  { title: "Image Ai Thon", image: ImageAiThon},
  { title: "CSS HackerRank", image: CSSHackerRank },
  { title: "ACMTECT Certificate", image: ACMTECT},
  { title: "IBM SQL", image: IBMSQL },
  { title: "HTML KG Coding", image: HTMLKGCoding },
  { title: "Excel Udemy", image: Excel },
  { title: "HTML ProProfs", image: HTMLProProfs },
  { title: "RINEX Campus Ambassador", image: CampusAmbassador },
  { title: "Python HackerRank", image: PythonHackerRank },
  { title: "HTML, CSS, JS - DigitalAdda", image: DigitalAdda },
  { title: "JS KG Coding", image: JSKGCoding },
  { title: "HTML CPPBuzz", image: HTMLCPPBuzz },
  { title: "HTML, CSS - CiscoThingQbator", image: CiscoThingQbator },
];

const Certifications = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleCount, setVisibleCount] = useState(8); // State to manage how many certificates are visible

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 8); // Show 8 more certificates
  };

  const showLess = () => {
    setVisibleCount((prevCount) => Math.max(prevCount - 12, 8)); // Show 8 less, but never go below 8
  };

  return (
    <>
      <div className='certifications' id="certifications">
        <div className="certification-title">
          <h1>Certifications</h1>
          <img src={theme_pattern} alt="Theme Pattern" />
        </div>

        <div className="certification-section md:mt-0 max-w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {certificates.slice(0, visibleCount).map((data, index) => {
            return (
              <div className="w-full hover:scale-105 transition-all cursor-pointer duration-300 shadow-md flex justify-center items-center" key={index}>
                <div className="w-full h-48 md:h-56 lg:h-52 overflow-hidden rounded-sm flex justify-center items-center">
                  <img
                    src={data.image}
                    alt={data.title}
                    loading="lazy"
                    className="object-cover w-full h-full"
                    onClick={() => openModal(data.image)}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More or Show Less Button */}
        <div className="text-center">
          {visibleCount < certificates.length ? (
          <button
            onClick={loadMore}
            className="bg-gradient-to-l from-rose-400 to-[#B415FF] text-white px-5 py-4 rounded-md hover:bg-gradient-to-r transition duration-300 text-lg cursor-pointer"
          >
            Load More
          </button>
      
          ) : (
            <button
              onClick={showLess}
              className="bg-gradient-to-l from-rose-400 to-[#B415FF] text-white px-5 py-4 rounded-md hover:bg-gradient-to-r transition duration-300 text-lg cursor-pointer"
            >
              Show Less
            </button>
          )}
        </div>
      </div>

      {/* Modal for full-screen image */}
      {isModalOpen && (
        <div className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="modal-content bg-white relative">
            <button
              className="absolute cursor-pointer top-3 right-3 md:top-4 md:right-4 text-white text-3xl bg-red-700 p-2 rounded-full hover:bg-red-800 transition-all duration-300"
              onClick={closeModal}
            >
              <AiOutlineClose className="text-xl md:text-2xl" />
            </button>
            <img
              src={selectedImage}
              alt="Full-size Certification"
              className="w-full h-auto max-h-screen object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Certifications;
