"use client";

import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setSuccess(null);

    try {
      await emailjs.send(
        "service_24a3tqq",
        "template_3aojydl",
        {
          name,
          subject,
          message,
        },
        "l3C4v5TBemsItXPhS"
      );
      setSuccess("Your message has been sent!");
      setName("");
      setSubject("");
      setMessage("");
    } catch (error) {
      setSuccess("Failed to send. Please try again.");
    }
    setSending(false);
  };

  return (
    <section className="bg-white max-w-6xl mx-auto px-4">
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
                name="subject"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border rounded"
                required
                name="name"
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
                name="message"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              disabled={sending}
            >
              {sending ? "Sending..." : "Send Email"}
            </button>
            {success && (
              <div className={`text-sm mt-2 ${success.includes("sent") ? "text-green-600" : "text-red-600"}`}>
                {success}
              </div>
            )}
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
