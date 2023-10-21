import React from 'react';

const Card = ({ category, items, categoryBgColor, attributeBgColor }) => {
  return (
    <div className={`max-w-sm rounded overflow-hidden shadow-lg bg-white ${categoryBgColor} mb-4`}>
      <div className={`w-full h-32 flex items-center justify-center ${attributeBgColor}`}>
        <h2 className="text-2xl text-white">{category}</h2>
      </div>
      <div className="px-6 py-4">
        <ul className="text-gray-700">
          {items.map((item, index) => (
            <button
              key={index}
              className={`bg-${attributeBgColor} hover:bg-${categoryBgColor} text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-${categoryBgColor} mt-2 mx-1`}
            >
              {item}
            </button>
          ))}
        </ul>
      </div>
    </div>
  );
};

function Skills() {
  const frontendItems = [
    'React Js',
    'Javascript',
    'Vue Js',
    'HTML',
    'CSS',
    'Bootstrap',
    'Tailwind CSS',
  ];

  const backendItems = ['Python', 'Node Js', 'Express', 'Dotnet'];

  const databaseItems = ['MySql', 'MongoDB', 'Postgres SQL'];

  const techToolsItems = ['Docker', 'Airflow', 'Github', 'Git', 'SVN', 'Linux'];

  return (
    <div className="min-h-screen mt-12">
      <div className="text-4xl text-center mt-6 md:mt-12">My Skills 🤹</div>
      <div className="flex justify-center items-center mt-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          <Card category="Frontend" items={frontendItems} categoryBgColor="bg-green-500" attributeBgColor="bg-blue-500" />
          <Card category="Backend" items={backendItems} categoryBgColor="bg-blue-500" attributeBgColor="bg-green-500" />
          <Card category="Database" items={databaseItems} categoryBgColor="bg-yellow-500" attributeBgColor="bg-red-500" />
          <Card category="Tech Tools" items={techToolsItems} categoryBgColor="bg-indigo-500" attributeBgColor="bg-purple-500" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
