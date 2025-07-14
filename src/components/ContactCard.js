"use client";

import { useState } from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ContactPage() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:wonseok.lee@yale.edu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="py-16 bg-white max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>

      <div className="flex flex-col md:flex-row items-start gap-[30px]">
        <div className="flex-1 space-y-8">
          {/* Email Form */}
          <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-2 border rounded"
                rows="5"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Send Email
            </button>
          </form>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 gap-6">
            <a
              href="https://www.linkedin.com/in/wonseok-lee-2b1301249/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 rounded-xl shadow-md p-6 flex items-center hover:shadow-lg hover:bg-gray-200 transition"
            >
              <FaLinkedin className="text-blue-700 text-3xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold">LinkedIn</h3>
                <p className="text-gray-600 text-sm">Connect with me on LinkedIn</p>
              </div>
            </a>

            <a
              href="https://x.com/leews_16"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 rounded-xl shadow-md p-6 flex items-center hover:shadow-lg hover:bg-gray-200 transition"
            >
              <FaTwitter className="text-blue-500 text-3xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold">Twitter</h3>
                <p className="text-gray-600 text-sm">Follow and reach out on Twitter</p>
              </div>
            </a>

            <a
              href="mailto:wonseok.lee@yale.edu"
              className="bg-gray-100 rounded-xl shadow-md p-6 flex items-center hover:shadow-lg hover:bg-gray-200 transition"
            >
              <MdEmail className="text-red-500 text-3xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-gray-600 text-sm">Send me an email directly</p>
              </div>
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/images/about-me.jpg"
            alt="Profile"
            className="w-100 h-120 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
