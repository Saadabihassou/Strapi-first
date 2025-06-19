/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function Hero() {
  const [hero, setHero] = useState(null);

  useEffect(() => {
    async function getHero() {
      const res = await axios.get("http://localhost:1337/api/hero?populate=*");
      setHero(res.data.data);
    }
    getHero();
  }, []);

  if (!hero) return null;

  const imageUrl = hero.image?.url;

  return (
    <header className="relative overflow-hidden py-20 px-6 md:px-20 border-b-2 border-blue-500">
      {/* 🔥 Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-br from-pink-500 via-blue-500 to-purple-500 blur-[100px] animate-gradient-spin rounded-full opacity-30 mx-auto"></div>
      </div>

      {/* Content Container */}
      <div className="flex flex-row justify-between items-center gap-10">
        {/* TEXT BLOCK */}
        <motion.div
          className="flex flex-col gap-4 w-1/2 justify-center items-start"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            {hero.title}
          </h1>
          <p className="text-md text-gray-600 max-w-lg">{hero.description}</p>
          <a
            href={hero.buttonLink || "#"}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {hero.buttonText}
          </a>
        </motion.div>

        {/* IMAGE BLOCK */}
        {imageUrl && (
          <motion.img
            src={`http://localhost:1337${imageUrl}`}
            alt="hero"
            className="w-1/2 h-72 object-contain rounded-xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        )}
      </div>
    </header>
  );
}
