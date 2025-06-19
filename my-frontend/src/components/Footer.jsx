import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaFacebook, FaTwitter, FaGithub } from "react-icons/fa"

export default function Footer() {
  const [footer, setFooter] = useState(null);

  useEffect(() => {
    async function fetchFooter() {
      const res = await axios.get("http://localhost:1337/api/footer?populate=*");
      console.log(res.data.data);
      setFooter(res.data.data);
    }
    fetchFooter();
  }, []);

  if (!footer) return null;

  return (
    <footer className="bg-gray-900 text-white px-6 md:px-20 py-9 mt-10">
      <div className="grid grid-cols-3 md:grid-cols-3 gap-10">

        {/* Logo + Description */}
        <div className="flex flex-col items-strat gap-4 md:items-start">
          <img
            src={`http://localhost:1337${footer.logo?.url}`}
            alt="logo"
            className="w-16 h-12 object-contain rounded-full border-red-500 border-2"
          />
          <p className="text-sm text-gray-400 max-w-sm">
            {footer.description}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-medium bg-clip-text text-transparent bg-gradient-to-br from-pink-500 via-blue-500 to-purple-500 border-b-2 border-blue-500 mb-4">Quick Links</h3>
          <ul className="space-x-4 flex flex-row text-gray-300 text-sm">
            {footer.quickLinks?.map((link, idx) => (
              <li key={idx}>
                <a href={link.url} className="hover:text-white hover:underline underline-offset-8 transition">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="flex flex-col ml-10">
          <h3 className="text-xl font-medium mb-4 bg-clip-text text-transparent bg-gradient-to-br from-pink-500 via-blue-500 to-purple-500 border-b-2 border-blue-500">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="text-gray-300 hover:text-white transition">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" className="text-gray-300 hover:text-white transition">
              <FaTwitter size={24} />
            </a>
            <a href="https://github.com" className="text-gray-300 hover:text-white transition">
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
