/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function Features() {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    async function fetchFeatures() {
      const res = await axios.get("http://localhost:1337/api/features?populate=*");
      const featuresData = res.data.data.map((item) => ({
        id: item.id,
        title: item.title,
        description: item.description,
        icon: item.icon?.url || null,
      }));
      console.log(featuresData);
      setFeatures(featuresData);
    }

    fetchFeatures();
  }, []);

  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50 border-b-2 border-blue-500">
      <h2 className="text-4xl font-semibold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-br from-pink-500 via-blue-500 to-purple-500 border-b-2 border-blue-500 w-fit mx-auto px-5">
        Our Features
      </h2>

      <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-center hover:shadow-xl hover:scale-105 hover:-translate-y-2 duration-300 items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            {feature.icon && (
              <img
                src={`http://localhost:1337${feature.icon}`}
                alt={feature.title}
                className="w-16 h-16 object-contain mb-4"
              />
            )}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
