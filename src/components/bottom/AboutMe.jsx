import React from 'react';

const AboutMe = () => {
  return (
    <div className="max-w-6xl mx-auto">

      {/* Title */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          About This Project
        </h1>
        <div className="w-20 h-1 bg-gray-800 mt-3 rounded-full"></div>
      </div>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 gap-10 items-start">

        {/* Left big intro */}
        <div className="space-y-5">
          <p className="text-lg text-gray-700 leading-relaxed">
            Hi, I'm <span className="font-semibold text-gray-900">Lingkon Dash</span>.
            This is a fun React project where I explore design, data, and user experience
            by building something meaningful from scratch.
          </p>

          <p className="text-gray-600 leading-relaxed">
            The idea is simple — a place to explore flags from all over the world.
            But the focus is on making that experience clean, fast, and visually engaging.
          </p>
        </div>

        {/* Right side feature blocks */}
        <div className="grid sm:grid-cols-2 gap-5">

          <div className="p-5 rounded-xl border border-gray-200 hover:border-gray-400 transition">
            <h3 className="font-semibold text-gray-800 mb-2">🌍 Global Exploration</h3>
            <p className="text-sm text-gray-600">
              Browse countries and discover flags from every region in a structured way.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-gray-200 hover:border-gray-400 transition">
            <h3 className="font-semibold text-gray-800 mb-2">⚡ Fast & Simple</h3>
            <p className="text-sm text-gray-600">
              Built for speed and clarity, so users can find information quickly.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-gray-200 hover:border-gray-400 transition">
            <h3 className="font-semibold text-gray-800 mb-2">🧭 Organized by Region</h3>
            <p className="text-sm text-gray-600">
              Easily navigate continents and explore countries without confusion.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-gray-200 hover:border-gray-400 transition">
            <h3 className="font-semibold text-gray-800 mb-2">📚 Learning Project</h3>
            <p className="text-sm text-gray-600">
              A hands-on project reflecting my growth in React and UI design.
            </p>
          </div>

        </div>
      </div>

      {/* Bottom full-width text */}
      <div className="mt-12 border-t pt-8">
        <p className="text-gray-600 leading-relaxed max-w-3xl">
          This project is part of my journey as a developer. It’s not just about flags —
          it’s about building clean interfaces, working with real-world data, and
          continuously improving my skills through practical experience.
        </p>
      </div>

    </div>
  );
};

export default AboutMe;