import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  // ✅ Initialize EmailJS once
  useEffect(() => {
    emailjs.init("acA6l0j6sqt-fN4QA");
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1️⃣ Send message to your email
      await emailjs.send(
        "service_axjrv5l",
        "template_y8tefxp",
        {
          name: form.name,      // matches {{name}} in your template
          email: form.email,    // matches {{email}}
          subject: form.subject,
          message: form.message,
        }
      );

      // 2️⃣ Auto-reply to user
      await emailjs.send(
        "service_axjrv5l",
        "template_l6q8rhv",
        {
          user_name: form.name, // matches {{user_name}}
          email: form.email,    // matches {{email}} in "To Email"
        }
      );

      alert("Message sent successfully!");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Oops! Something went wrong. Check console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 px-4 py-20">      
    <div className="bg-white rounded-2xl shadow-xl w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">

        {/* LEFT SIDE */}
            <div className="flex flex-col justify-center items-center bg-indigo-400 text-white p-8 md:p-10 text-center">

            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Let’s Connect
            </h2>

            <p className="text-indigo-100 max-w-sm">
                Feel free to reach out for collaborations or just a friendly hello 👋
            </p>

            </div>

        {/* RIGHT SIDE FORM */}
        <div className="p-8 sm:p-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center md:text-left">
            Contact Me
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
    </div>
    </section>
  );
};

export default Contact;