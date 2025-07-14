"use client";

import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ContactMe() {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="https://www.linkedin.com/in/wonseok-lee-2b1301249/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-700 text-3xl"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://twitter.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-500 text-3xl"
        >
          <FaTwitter />
        </a>

        <a
          href="mailto:wonseok.lee@yale.edu"
          className="text-gray-600 hover:text-red-500 text-3xl"
        >
          <MdEmail />
        </a>
      </div>

      <p className="text-gray-700">Feel free to reach out via LinkedIn, Twitter, or Email!</p>
    </section>
  );
}
