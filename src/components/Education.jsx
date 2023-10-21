import React from 'react'

function Education() {
    return (
        <div>
            
            <h1 class="text-4xl text-bold text-center  ">My Academics 🏫</h1>
            <div class=" flex flex-col justify-around md:flex-row  ">

 <div class=" flex flex-col justify-center h-auto rounded overflow-hidden   py-16 text-center ">
<img  src="data:image/png;base64,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" alt="" />
  <div class="px-6  ">
    <div class="font-bold text-xl mb-2">Master's of Computer Applications- 2020</div>
    <p class="text-gray-700 text-base">
    CGPA- 8.82</p>
  </div>

</div>

</div>   
        
        </div>
    )
}

export default Education