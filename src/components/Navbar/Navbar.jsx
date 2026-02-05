import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled
          ? "bg-[#050414] bg-opacity-60 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold cursor-pointer tracking-wide"
        >
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white drop-shadow-lg">Om</span>
          <span className="text-[#8245ec]">Kamal</span>
          <span className="text-white">&gt;</span>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-gray-300 font-semibold text-lg">
          {menuItems.map((item, index) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.4, duration: 0.4 }}
              className={`cursor-pointer relative group uppercase tracking-wide ${
                activeSection === item.id ? "text-[#8245ec]" : ""
              }`}
            >
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className="hover:text-[#8245ec] transition duration-300 text-[18px] md:text-[20px]"
              >
                {item.label}
              </button>

              {/* Glow underline animation */}
              <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-[#8245ec] transition-all duration-300 group-hover:w-full shadow-[0_0_10px_#8245ec]"></span>
            </motion.li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          <motion.a
            whileHover={{ scale: 1.2, rotate: 5 }}
            href="https://github.com/01omkamal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec] transition"
          >
            <FaGithub size={28} />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2, rotate: -5 }}
            href="https://www.linkedin.com/in/om-kamal07"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec] transition"
          >
            <FaLinkedin size={28} />
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-4xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-4xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-70 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden"
        >
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300 text-lg font-semibold uppercase">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-[#8245ec] ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
