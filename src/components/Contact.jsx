import React from 'react'
import { Linking } from 'react'

function Contact() {
    return (
        <div class="flex flex-col text-center text-2xl mb-4">
            <div class="text-4xl"> Contact Me ☎️ </div>
            <div class="text-gray-500 py-3">DISCUSS A PROJECT OR WANT TO HIRE ME OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.

            </div  >
            <svg class="animate-bounce w-6 h-6 "></svg>
       

      
      <button class=" text-gray-500 hover:text-black" onClick={()=>window.open('mailto:businesswithvineetmishra@gmail.com?subject=Subject&body=Body%20goes%20here')}>
      businesswithvineetmishra@gmail.com
          
      </button>
      
     
          
         
            
        </div>
    )
}

export default Contact
