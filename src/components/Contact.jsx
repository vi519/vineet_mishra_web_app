import React from 'react';

function Contact() {
  const email = 'vineetmishrahbk@gmail.com';

  return (
    <div className="flex flex-col items-center text-center text-2xl my-6">
      <div className="text-4xl font-bold">Contact Me ☎️</div>
      <p className="text-gray-500 mt-4 text-lg">
        If you'd like to discuss a project, hire me, or just say hi, my inbox is open for all!
      </p>
      
      <button
        className="text-gray-500 hover:text-black mt-6 text-xl font-bold border-2 border-gray-500 px-4 py-2 rounded-full transition-transform transform hover:scale-105"
        onClick={() => window.open(`mailto:${email}?subject=Subject&body=Body%20goes%20here`)}
      >
        {email}
      </button>
    </div>
  );
}

export default Contact;
