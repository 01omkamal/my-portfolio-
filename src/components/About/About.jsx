import React from 'react';
import { motion } from 'framer-motion';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.png';



const About = () => {
  return (
    <section
      id="about"
      className="relative py-12 px-[8vw] md:px-[10vw] font-sans mt-20 overflow-hidden"
    >
      {/* 🌈 Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] animate-gradientMove opacity-95"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.15)_0%,transparent_70%)]"></div>

      {/* ⚡ Floating Animated Glow */}
      <motion.div
        className="absolute w-96 h-96 bg-[#00ffff33] rounded-full blur-[120px]"
        animate={{
          x: [0, 200, -200, 0],
          y: [0, -100, 150, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: 'mirror',
        }}
      />

      {/* ✨ Main Content */}
      <div className="relative flex flex-col-reverse md:flex-row justify-between items-center z-10">
        
        {/* 👇 Left Side Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 text-center md:text-left text-white"
        >
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-gray-300"
          >
            👋 Hi, I’m
          </motion.h1>

          <motion.h2
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#00ffff] to-[#a855f7] drop-shadow-[0_0_15px_#00ffff]"
          >
            Om Kamal
          </motion.h2>

          {/* Typing Animation */}
          <div className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 leading-tight">
            <span className="text-gray-300">I am a </span>
            <ReactTypingEffect
              text={[
                'Fullstack Developer 💻',
                'Java Developer ☕',
                'Creative Coder 🚀',
              ]}
              speed={90}
              eraseSpeed={60}
              typingDelay={400}
              eraseDelay={1500}
              cursorRenderer={(cursor) => (
                <span className="text-[#00ffff] font-extrabold text-3xl">{cursor}</span>
              )}
              displayTextRenderer={(text) => (
                <motion.span
                  className="text-[#00ffff] font-bold drop-shadow-[0_0_10px_#00ffff]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  {text}
                </motion.span>
              )}
            />
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-base sm:text-lg text-gray-300 mb-10 leading-relaxed"
          >
            I’m a passionate Full-Stack Developer who loves turning ideas into
            beautiful, functional, and responsive web applications. Skilled in
            Java, Spring Boot, Hibernate, and the MERN stack — I aim to craft
            software that makes an impact and provides seamless user experiences.
          </motion.p>

          {/* Buttons + Socials */}
          <motion.div
            className="flex gap-6 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            {/* CV Button */}
            <a
              href="https://drive.google.com/file/d/1_pLl2wjYVCU-wnqXIhjhYr0YC0SJXvwv/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white py-3 px-8 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-110"
              style={{
                background: 'linear-gradient(90deg, #8245ec, #00ffff)',
                boxShadow: '0 0 20px #8245ec, 0 0 25px #00ffff',
              }}
            >
              DOWNLOAD CV
            </a>

            {/* LinkedIn */}
            <motion.a
              href="https://linkedin.com/in/om-kamal"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3, rotate: 10 }}
              className="text-[#00ffff] text-3xl hover:text-[#a855f7] transition"
            >
              <i className="fab fa-linkedin"></i>
            </motion.a>

            {/* GitHub */}
            <motion.a
              href="https://github.com/omkamal"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3, rotate: -10 }}
              className="text-[#00ffff] text-3xl hover:text-[#a855f7] transition"
            >
              <i className="fab fa-github"></i>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* 🎇 Right Side Floating Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 flex justify-center md:justify-end z-10 mt-10 md:mt-0"
        >
          <Tilt
            className="w-56 h-56 sm:w-72 sm:h-72 md:w-[28rem] md:h-[28rem] rounded-full"
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.08}
            transitionSpeed={1200}
            gyroscope={true}
          >
            <motion.img
              src={profileImage}
              alt="Om Kamal"
              className="w-full h-full rounded-full object-cover shadow-[0_0_40px_rgba(0,255,255,0.6)]"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: 'mirror',
              }}
            />
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
