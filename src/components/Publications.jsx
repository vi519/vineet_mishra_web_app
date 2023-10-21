import React from 'react';

function PublicationCard({ title, description, link, imageUrl }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block max-w-md mx-auto my-8 p-4 bg-white border border-gray-200 shadow-lg transition-transform transform hover:-translate-y-2 hover:scale-105"
    >
      <img src={imageUrl} alt="" className="w-20 h-20 mx-auto mb-4 transition-transform transform group-hover:-translate-y-1" />
      <div className="text-center">
        <h2 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600">{title}</h2>
        <p className="text-gray-600 group-hover:text-gray-800">{description}</p>
      </div>
    </a>
  );
}

function Publications() {
  const publicationData = [
    {
      title: 'Epic on FHIR Package',
      description: 'Epic on FHIR npm package used for Auth 2.0 via Epic on.',
      link: 'https://www.npmjs.com/package/epic-on-fhir-login',
      imageUrl: 'https://cdn.worldvectorlogo.com/logos/npm.svg',
    },
    {
      title: 'Security Challenges and Attacks in Wireless Sensor Networks (1st Author)',
      description: 'Exploring WSN topologies and security challenges.',
      link: 'https://www.ijert.org/security-challenges-and-attacks-in-wireless-sensor-networks',
      imageUrl: 'https://www.ijert.org/wp-content/uploads/2018/07/journal-of-engineering-research-logo.png',
    },
  ];

  return (
    <div className=" mt-4">
      <h1 className="text-4xl text-center  py-4">Open Source Contributions 📢</h1>
      <div className="flex flex-wrap justify-center">
        {publicationData.map((publication, index) => (
          <PublicationCard
            key={index}
            title={publication.title}
            description={publication.description}
            link={publication.link}
            imageUrl={publication.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Publications;
