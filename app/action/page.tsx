"use client"
import { useState } from "react"




export default function Home() {
  
  return (
    <div >
         <div className="h-4 bg-[#FFD900]"></div>
      <div className="relative w-full h-full flex items-center justify-center" 
      style={{backgroundImage:"url(/assets/bg.png)", backgroundSize: "cover",
                  backgroundPosition: "center"}}>
                    
        {/* Inner container maintains 1080/1920 aspect ratio with max dimensions */}
        <div className="mt-2 w-[100vw] h-[90vh] max-w-full max-h-[1920px] flex flex-col gap-[10px] rounded-lg overflow-hidden"  
                  >
                 
          {/* Header with Logo */}
          <header className="px-4 mt-10 h-[168px] sm:h-[100px] md:h-[120px] lg:h-[140px] rounded-lg flex items-center justify-between flex-shrink-0 mb-4">
            <div className="flex items-center gap-2">
              <div
                className="w-[123px] h-[107px] sm:w-12 sm:h-12 rounded-lg flex items-center justify-center font-black text-purple-900 text-xl "
                style={{
                  backgroundImage: "url(/assets/1.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  marginTop: "-140px",

                }}
              ></div>
             
    <div className="mt-10 mr-16 flex-shrink-0">
  <img
    src="/assets/2.png"
    alt="Logo"
    className="w-[150px] h-[220px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[293px] lg:h-[293px] object-contain "
  style={{marginTop:"-50px"}}/>
</div>


         
          </div>
          </header>
        <div className="w-full h-[77px] bg-[#63277E] flex items-center justify-between px-4">
  {/* LEFT */}
  <img
    src="/assets/Back.png"
    className="w-8 h-8 cursor-pointer"
    alt="Back"
  />

  {/* RIGHT */}
  <p className="text-[#FFD900] text-3xl font-[Bangers] tracking-[2px]">
    SHARE YOUR STORY 
     </p>
</div>


          {/* Video Carousel Section */}
         



                  <div className="w-full h-[67px] gap-10 bg-[#63277E] flex items-center justify-center px-4">
  {/* LEFT */}
  <p className="text-[#FFFFFF] text-2xl font-[fredoka] font-bold">
    Choose Your Action
  </p>
  <img
    src="/assets/5.png"
    className="w-8 h-8 cursor-pointer"
    alt="Back"
  />

  {/* RIGHT */}
  
</div>
        </div>
      </div>
    </div>
  )
}
