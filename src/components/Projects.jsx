import React from "react";

function ProjectCard({ title, description, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full max-w-sm bg-white rounded-lg shadow-md transform transition-transform hover:-translate-y-1 hover:scale-105"
    >
      <div className="p-4">
        <div className="font-bold text-xl mb-2 text-gray-800">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </a>
  );
}

function Projects() {
  const projectData = [
    {
      title: "💲 Bitcoin Chart Model",
      description:
        "App offers real-time Bitcoin data presented through visually appealing and diverse charts.",
      link: "https://vi519.github.io/buyucoin_assignment/",
    },
    {
      title: "📈 Stock Tracking App",
      description:
        "React Native app developed for tracking stocks around the world.",
      link: "https://github.com/vi519/Stock-Tracker-React-Native-App",
    },
    {
      title: "📅 Calendar: Fix your meetings",
      description:
        "Your go-to React calendar app for seamless scheduling and organization.",
      link: "https://vi519.github.io/react-scheduler/",
    },
    {
      title: "💡 Interview Rounds",
      description: "Interview Round: Share and Prepare.",
      link: "https://vi519.github.io/InterviewRounds/",
    },
    {
      title: "💰 Expense Tracker",
      description:
        "The app gives you a brief idea about expenses in day/month/year. It has credit/debit features that come in handy.",
      link: "https://vi519.github.io/Expense-Tracker/",
    },
    {
      title: "📰 News24*7",
      description:
        "App provides real-time news from a REST API to enhance your knowledge and keep you informed about what's happening around the world. This application has features like Google News.",
      link: "https://github.com/vi519/News24-7",
    },
  ];

  return (
    <div className="container mx-auto ">
      <h1 className="text-4xl mb-2 text-center mt-12 mb-5">My Projects 🎯</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
