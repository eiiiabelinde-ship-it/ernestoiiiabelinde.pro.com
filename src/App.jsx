import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";

const sections = [
  "Home",
  "About",
  "Services",
  "Projects",
  "Project Plan",
  "Rate",
  "Terms & Conditions",
];

const services = [
  { title: "Web Development", desc: "Modern, responsive websites." },
  { title: "UI/UX Design", desc: "Apple-like smooth design." },
  { title: "Consulting", desc: "Professional strategy & planning." },
];

const projects = [
  { title: "Project One", desc: "Description of project one." },
  { title: "Project Two", desc: "Description of project two." },
  { title: "Project Three", desc: "Description of project three." },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 text-gray-900">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-md shadow-md z-50">
        <ul className="flex justify-center space-x-6 p-4 font-semibold">
          {sections.map((sec) => (
            <li key={sec}>
              <a
                href={`#${sec.toLowerCase().replace(/ & | /g, "-")}`}
                className="hover:text-blue-600"
              >
                {sec}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero / Home */}
      <section id="home" className="h-screen flex flex-col justify-center items-center text-center p-4">
        <motion.h1 initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="text-5xl font-bold mb-4">
          YOUR NAME
        </motion.h1>
        <motion.p initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="text-xl mb-6">
          Professional Title / Role
        </motion.p>
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.6, delay: 0.6 }}>
          <a href="#contact" className="px-6 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition">
            Contact Me
          </a>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="py-24 text-center">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="max-w-2xl mx-auto">
          Add a short professional biography. Describe your expertise, achievements, and what makes you unique.
        </p>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-white/50 backdrop-blur-md">
        <h2 className="text-3xl font-bold text-center mb-12">Services</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((s) => (
            <motion.div key={s.title} className="glass p-6 rounded-xl w-64 text-center shadow-lg hover:scale-105 transition" whileHover={{ scale: 1.05 }}>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 text-center">
        <h2 className="text-3xl font-bold mb-12">Projects</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((p) => (
            <motion.div key={p.title} className="glass p-6 rounded-xl w-72 shadow-lg hover:scale-105 transition" whileHover={{ scale: 1.05 }}>
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p>{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Project Plan */}
      <section id="project-plan" className="py-24 bg-white/50 backdrop-blur-md text-center">
        <h2 className="text-3xl font-bold mb-6">Project Plan</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Outline your project workflow, timeline, or methodology here.
        </p>
        <ul className="list-disc list-inside max-w-xl mx-auto text-left">
          <li>Step 1: Initial Consultation</li>
          <li>Step 2: Planning & Research</li>
          <li>Step 3: Design & Development</li>
          <li>Step 4: Testing & Delivery</li>
          <li>Step 5: Support & Maintenance</li>
        </ul>
      </section>

      {/* Rate */}
      <section id="rate" className="py-24 text-center">
        <h2 className="text-3xl font-bold mb-6">Rate</h2>
        <p className="mb-6">Provide your service rates or pricing packages.</p>
        <div className="flex justify-center gap-6 flex-wrap">
          <div className="glass p-6 rounded-xl w-64 shadow-lg">Basic: $100/hr</div>
          <div className="glass p-6 rounded-xl w-64 shadow-lg">Pro: $200/hr</div>
          <div className="glass p-6 rounded-xl w-64 shadow-lg">Enterprise: $500/hr</div>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section id="terms-and-conditions" className="py-24 bg-white/50 backdrop-blur-md text-center">
        <h2 className="text-3xl font-bold mb-6">Terms & Conditions</h2>
        <p className="max-w-2xl mx-auto">
          Include your website terms, privacy policy, or legal disclaimers here.
        </p>
      </section>

      {/* Floating Chat Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
        <a href="https://m.me/YOUR_MESSENGER_USERNAME" target="_blank" rel="noreferrer" className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition flex items-center justify-center">
          <MessageCircle size={24} />
        </a>
        <a href="https://wa.me/YOUR_WHATSAPP_NUMBER" target="_blank" rel="noreferrer" className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition flex items-center justify-center">
          <Phone size={24} />
        </a>
      </div>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-600">
        © {new Date().getFullYear()} YOUR NAME. All rights reserved.
      </footer>
    </div>
  );
}
