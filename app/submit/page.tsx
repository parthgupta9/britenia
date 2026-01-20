"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import FORM from "@/components/form"



export default function Home() {
  const router = useRouter()
 
  return (
    <div >
         <div className="h-4 bg-[#FFD900]"></div>
      <div className="relative w-full h-full flex items-center justify-center" 
      style={{backgroundImage:"url(/assets/bg.png)", backgroundSize: "cover",
                  backgroundPosition: "center"}}>
                    
        {/* Inner container maintains 1080/1920 aspect ratio with max dimensions */}
        <div className="mt-2 w-full h-[100vh] max-w-full max-h-[1920px] flex flex-col gap-[10px] rounded-lg"  
                  >
                 
          {/* Header with Logo */}
          <header className="px-4 mt-10 h-[22vh] sm:h-[100px] md:h-[120px] lg:h-[140px] rounded-lg flex items-center justify-between flex-shrink-0 mb-4">
            <div className="flex items-center gap-2 min-w-0">
     
             <div
  className="relative -translate-y-[50px] w-[103px] h-[87px] sm:w-12 sm:h-12 rounded-lg flex-shrink-0"
  style={{
    backgroundImage: "url(/assets/1.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
></div>

             
    <div className="mt-10 h-full flex-shrink-0 relative z-10">
  <img
    src="/assets/9.png"
    alt="Logo"
    className="w-[44vh] h-[28vh] sm:w-[20vh] sm:h-[29vh] md:w-[25vh] md:h-[25vh] lg:w-[29.3vh] lg:h-[29.3vh] object-contain "
    style={{marginLeft:"-18vw"

    }}
   
  />
</div>

         
          </div>
          </header>
    
<div className="min-h-[50svh] sm:min-h-screen flex items-center justify-center 
             sm:px-4 p-4 ">
  
  <div className="w-full max-w-2xl text-center p-2
             bg-[#63277E] border-2 border-[#FFD900] 
                  px-5 sm:p-12">
    
    {/* Checkmark Circle */}
    <div className="flex justify-center mb-2 sm:mb-10">
      <div className="relative w-16 h-16 sm:w-36 sm:h-36">
        <div className="w-full h-full rounded-full 
                        bg-[#E57825] shadow-md 
                        flex items-center justify-center">
          <svg
            className="w-10 h-10 sm:w-18 sm:h-18 text-primary-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      </div>
    </div>

    {/* Heading */}
    <h1 className="text-2xl sm:text-5xl font-extrabold 
                   text-[#FFD900] mb-2 sm:mb-4 tracking-tight">
      Thank You!
    </h1>

    {/* Description */}
    <div className="space-y-1.5 sm:space-y-3">
      <p className="text-sm sm:text-xl text-foreground/90">
        for showing interest to fight bullying!We will notify you as soon as the full website goes live.
      </p>
     
    </div>

  </div>
</div>


        </div>
      </div>
    </div>
  )
}