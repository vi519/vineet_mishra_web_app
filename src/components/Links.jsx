import React from 'react'

function Links() {
    return (
    
<div class="grid grid-cols-5 mt-4 ">
<div>
<a  title="Gmail" onClick={()=>window.open('mailto:businesswithvineetmishra@gmail.com?subject=Subject&body=Body%20goes%20here')}>
<img  class="rounded-full h-12 w-12 flex  "src="https://cdn-icons-png.flaticon.com/512/281/281769.png" alt="" />
        </a>    
</div>

<div>

<a href="https://github.com/vi519">
<img  title="Github" class="rounded-full h-12 w-12 flex "src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="" />
        </a>  

</div>

<div>

<a href="https://medium.com/@vineetmishrahbk">
<img  title="Medium.com" class="rounded-full h-12 w-12 flex"src="https://seeklogo.com/images/M/medium-logo-93CDCF6451-seeklogo.com.png" alt="" />
        </a>  

</div>

<div>

<a href="https://www.linkedin.com/in/vineet-mishra-8850981a6/">
<img  title="LinkedIn" class="rounded-full h-12 w-12 flex items-center justify-evenly"src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
        </a> 



</div>
<div>
<a href="https://leetcode.com/vineetmishrahbk/">
<img  title="Leetcode" class="rounded-full h-12 w-12 flex items-center justify-evenly"src="https://cdn.iconscout.com/icon/free/png-256/free-leetcode-3628885-3030025.png" alt="" />
        </a> 
</div>
</div>
    )
}

export default Links
