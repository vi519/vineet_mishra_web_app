import React from "react";

function Projects() {
  return (
    <div class="flex flex-col md:flex-row px-10 py-10 justify-around">
      <div class="mt-10 rounded-full">
        <img
          src="https://media.wired.com/photos/593320cb68cb3b3dc4097ed6/master/pass/1_partyanimsm2.gif"
          alt=""
        />
      </div>

      <div>
        <h1 class="text-4xl mb-2 text-center mt-6">My Projects 🎯</h1>

        <a href="https://vi519.github.io/InterviewRounds/">
        <div class=" max-w-sm rounded overflow-hidden  hover:shadow-lg ">
          <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">    💡 Interview Rounds</div>
            <p class="text-gray-700 text-base">
              Interview Round React App which is a Web Application having
              frontend and backend to get the interview data from and the user
              and help others in there upcoming interviews
            </p>
          </div>
        </div>
        </a>

<a href="https://vi519.github.io/Expense-Tracker/">
        <div class=" max-w-sm rounded overflow-hidden  hover:shadow-lg ">
          <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">  💰 Expense Tracker</div>
            <p class="text-gray-700 text-base">
            The App gives you the brief idea about expense in day/month/year. having credit/debit features comes handy
            </p>
          </div>
        </div>
        </a>

        <a href="https://github.com/vi519/Stock-Tracker-React-Native-App">
        <div class=" max-w-sm rounded overflow-hidden  hover:shadow-lg ">
          <div class="px-6 py-4">
         <div class="font-bold text-xl mb-2">   📈 Stock Tracking App</div>
            <p class="text-gray-700 text-base">
            React Native developed for tracking the stocks around the world 
            </p>
          </div>
        </div>
        </a>


        <a href="https://github.com/vi519/News24-7">
        <div class=" max-w-sm rounded overflow-hidden  hover:shadow-lg ">
          <div class="px-6 py-4">
         <div class="font-bold text-xl mb-2">   📰 News24*7</div>
            <p class="text-gray-700 text-base">
            App provide real time news from restApi  to you, to enchance your knowlegde and know the stuff around the world
This application have feature like google news
            </p>
          </div>
        </div>
        </a>
      </div>
    </div>
  );
}

export default Projects;
