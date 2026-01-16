"use client"
import Link from "next/link"

import FORM from "@/components/form"



export default function Home() {
 
  return (
    <div >
         <div className="h-4 bg-[#FFD900]"></div>
      <div className="relative w-full h-full flex items-center justify-center" 
      style={{backgroundImage:"url(/assets/bg.png)", backgroundSize: "cover",
                  backgroundPosition: "center"}}>
                    
        {/* Inner container maintains 1080/1920 aspect ratio with max dimensions */}
        <div className="mt-2 w-full h-[90vh] max-w-full max-h-[1920px] flex flex-col gap-[10px] rounded-lg"  
                  >
                 
          {/* Header with Logo */}
          <header className="px-4 mt-10 h-[17vh] sm:h-[100px] md:h-[120px] lg:h-[140px] rounded-lg flex items-center justify-between flex-shrink-0 mb-4">
            <div className="flex items-center gap-2">
             <div
  className="relative -translate-y-[40px] w-[103px] h-[87px] sm:w-12 sm:h-12 rounded-lg"
  style={{
    backgroundImage: "url(/assets/1.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
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
        <div className="w-full h-[7.7vh] bg-[#63277E] flex items-center justify-between px-4">
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
<div>
    <FORM/>
</div>


      
        </div>
      </div>
    </div>
  )
}