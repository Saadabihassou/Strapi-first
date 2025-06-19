/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { data } from "autoprefixer";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    async function fetchTestimonials() {
      const res = await axios.get(
        "http://localhost:1337/api/testimonials?populate=*"
      );
      const data = res.data.data;
      console.log(data);
      setTestimonials(data);
    }

    fetchTestimonials();
  }, []);

  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <h2 className="text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-br from-pink-500 via-blue-500 to-purple-500 border-b-2 border-blue-500 w-fit mx-auto px-5 text-center text-blue-600 mb-12">
        What Our Clients Say
      </h2>

      <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.id}
            className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center text-center">
              {t.reviewerIcon && (
                <img
                  src={`http://localhost:1337${t.reviewerIcon?.url}`}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-blue-400"
                />
              )}
              <p className="text-gray-700 text-sm italic mb-4">
                "{t.testimonialText}"
              </p>
              <h3 className="text-lg font-semibold text-blue-600">{t.name}</h3>
              <span className="text-sm text-gray-500">{t.reviewerJob}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
