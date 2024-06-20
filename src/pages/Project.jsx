import { useState, useEffect } from "react";
import Modal from "react-modal";
import User from "../assets/project/Data-Fortress.png";
import Blog from "../assets/project/blog.png";

const projects = [
  {
    id: 1,
    title: "Data Fortress",
    description:
      "Data Fortress is a robust web application focused on secure user authentication and data management. Featuring comprehensive CRUD functionalities, it allows registered users to seamlessly add, update, and delete their data entries. Utilizing Express.js for backend logic and MongoDB for database storage, our platform ensures data integrity and security, offering a streamlined user experience through efficient RESTful APIs and responsive web interfaces.",
    imageUrl: `${User}`,
    isNew: true,
    link: "https://data-fortress.onrender.com",
    skills: [
      "ejs",
      "Node.js",
      "Express.js",
      "MongoDB",
      "RESTful APIs",
      "JWT Authentication",
    ],
  },
  {
    id: 2,
    title: " Blog Management System",
    description:
      "Built with Node.js and Express, this system manages blog articles across multiple categories with user authentication (JWT and OAuth), CRUD operations, commenting, reactions, and image upload. It aims to provide a seamless experience for publishing and interacting with diverse blog content.",
    imageUrl: `${Blog}`,
    isNew: false,
    link: "https://inkverse.onrender.com",
    skills: [
      "ejs",
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "JWT and OAuth Authentication",
    ],
  },
  {
    id: 3,
    title: "Project 3",
    description: "Non aliquam quam massa id lacus.",
    imageUrl: "https://via.placeholder.com/600x360",
    isNew: false,
    link: "#",
    skills: ["Placeholder skill"],
  },
  // Add more projects as needed
];

const Project = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-10 md:px-20">
        {projects.map(
          ({ id, title, description, imageUrl, isNew, link, skills }) => (
            <div
              key={id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div
                className="relative cursor-pointer"
                onClick={() => openModal(imageUrl)}
              >
                <img
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  src={imageUrl}
                  alt={title}
                />
                {isNew && (
                  <div className="absolute top-0 right-0 bg-indigo-500 text-white font-bold px-2 py-1 m-2 rounded-md">
                    New
                  </div>
                )}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-lg font-bold">Click me</span>
                </div>
                <div className="absolute bottom-0 right-0 bg-gray-800 text-white px-2 py-1 m-2 rounded-md text-xs">
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    View
                  </a>
                </div>
              </div>
              <div className="p-4">
                <div className="text-lg font-medium text-gray-800 dark:text-gray-100 mb-2">
                  {title}
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {description}
                </p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-300 px-2 py-1 text-xs rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )
        )}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            zIndex: 1000,
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            padding: "0",
            border: "none",
            background: "none",
          },
        }}
      >
        <div className="relative">
          <button
            onClick={closeModal}
            className="absolute top-0 right-0 m-2 text-white bg-black rounded-full p-2 z-10"
          >
            &times;
          </button>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Project"
              className="max-w-full max-h-full object-contain"
            />
          )}
        </div>
      </Modal>
    </>
  );
};

export default Project;
