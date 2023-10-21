import React from 'react';
import Stats from '../stats.jpg';

function BlogCard() {
  return (
    <div className="flex justify-center py-6">
      <div className="max-w-xl w-full mx-4 p-6 bg-gradient-to-b from-purple-400 to-purple-600 rounded-lg shadow-xl">
        <h5 className="text-white text-3xl leading-tight font-semibold mb-4">Explore My Blogs on Medium</h5>
        <div className="relative aspect-w-16 aspect-h-9 mb-6">
          <img
            className="object-cover object-center rounded-lg"
            src={Stats}
            alt="Blog Stats"
          />
        </div>
        <p className="text-gray-100 text-lg mb-4">
          Discover a world of web and mobile development in my blogs, enriched with fascinating code snippets. Join my 800+ followers and explore 100k+ views!
        </p>
        <a href="https://vineetmishrahbk.medium.com/">
          <button
            type="button"
            className="inline-block px-6 py-3 bg-purple-800 text-white font-semibold text-sm uppercase rounded-full shadow-md hover:bg-purple-900 focus:ring-2 focus:ring-purple-300 active:bg-purple-700 transition duration-150 ease-in-out"
          >
            Start Exploring →
          </button>
        </a>
      </div>
    </div>
  );
}

export default BlogCard;
