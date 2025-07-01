import React from 'react'

function Navbar() {
  return (
    <>
    <div class="nav bg-red-400 flex justify-between h-[50px] items-center">
        <h1>Tourandtravel</h1>
        <ul class="flex gap-8">
            <li>home</li>
            <li>aboutus</li>
            <li>contactus</li>
        </ul>
    </div>
    </>
    
  )
}

export default Navbar