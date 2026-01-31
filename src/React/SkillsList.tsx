import React, { useState } from "react";

const CategoryIcons = {
  "Frontend Ecosystem": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      {/* Icon: Layout/Web Window */}
      <path d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM20 11H4V19H20V11ZM20 5H4V9H20V5Z"></path>
    </svg>
  ),
  "Backend & Database": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      {/* Icon: Database / Server Stack */}
      <path d="M11 19V15.15C7.96 14.67 6 13.06 6 11.5C6 11.23 6.06 10.97 6.17 10.72C5.46 11.08 5 11.64 5 12.25C5 13.91 8.13 15.25 12 15.25C13.29 15.25 14.5 15.09 15.58 14.81C16.89 15.53 18.25 16 19 16.5V19C19 20.66 15.87 22 12 22C8.13 22 5 20.66 5 19H11ZM12 3C15.87 3 19 4.34 19 6C19 7.66 15.87 9 12 9C8.13 9 5 7.66 5 6C5 4.34 8.13 3 12 3ZM19 11.25V7.75C19 9.41 15.87 10.75 12 10.75C8.13 10.75 5 9.41 5 7.75V11.25C5 12.91 8.13 14.25 12 14.25C15.87 14.25 19 12.91 19 11.25Z"></path>
    </svg>
  ),
  "DevOps & Tools": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      {/* Icon: Cloud (Representing AWS/Vercel/Git) */}
      <path d="M17 16H6C3.23858 16 1 13.7614 1 11C1 8.23858 3.23858 6 6 6C6.42517 6 6.83794 6.05615 7.22851 6.16278C7.94297 3.22883 10.7208 1 14 1C17.7552 1 20.9429 3.73356 21.7377 7.36219C22.4699 7.68969 23 8.42852 23 9.5C23 11.433 21.433 13 19.5 13H17V16ZM15 13V10H13V13H10L14 17L18 13H15Z"></path>
    </svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills = {
    "Frontend Ecosystem": [
      "Astro & React Framework",
      "Tailwind CSS & Responsive UI",
      "Interactive Single Page Apps (SPA)",
    ],
    "Backend & Database": [
      "RESTful API Integration",
      "Firebase (Auth & Firestore)",
      "Database Schema Design (SQL/NoSQL)", // Penting untuk Fullstack
    ],
    "DevOps & Tools": [
      "Cloud Deployment (Vercel)",
      "Git & Version Control",
      "System Analysis & Design",
    ],
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
        Apa yang bisa saya lakukan?
      </h3>
      <ul className="space-y-4 mt-4 text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div
              onClick={() => toggleItem(category)}
              className="md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
            >
              <div className="flex items-center gap-3 p-4">
                {CategoryIcons[category]}
                <div className="flex items-center gap-2 flex-grow justify-between">
                  <div className="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
                    <span className="block truncate text-[var(--white)] text-lg">
                      {category}
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                      openItem === category ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                  </svg>
                </div>
              </div>

              <div
                className={`transition-all duration-300 px-4 ${
                  openItem === category
                    ? "max-h-[500px] pb-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                  {items.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <span className="pl-1">•</span>
                      <li className="pl-3">{item}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
