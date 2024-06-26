import React, { useEffect, useState } from 'react'

function eyes() {

    const [rotate,setRotate]=useState(0);

    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
            let mouseX=e.clientX;
            let mouseY=e.clientY;
    
            let deltaX=mouseX-window.innerWidth/2;
            let deltaY=mouseY-window.innerHeight/2;
    
            var angle=Math.atan2(deltaY,deltaX)* (180/Math.PI);
            setRotate(angle-180);
        })
    })

  return (
    <div className='eyes w-full h-screen overflow-hidden'>
       <div data-scroll data-scroll-speed="-.7" className='w-full relative h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
        <div className='absolute top-1/2 left-1/2 gap-10 -translate-x-[50%] -translate-y-[50%] flex'>
            <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
                <div className='relative w-2/3 h-2/3 bg-black rounded-full'>
                <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-8 rotate-12'>
                   <div className='w-8 h-8 bg-zinc-100 rounded-full'></div>
                </div>
                
                </div>
            </div>
            <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
                <div className='relative w-2/3 h-2/3 bg-black rounded-full'>
                <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-8 rotate-12'>
                   <div className='w-8 h-8 bg-zinc-100 rounded-full'></div>
                </div>
                </div>
            </div>
        </div>
       </div>  
    </div>
  )
}
// style={{transform:[`translate(-50%,-50%) rotate(${rotate}deg)`]}}
export default eyes
