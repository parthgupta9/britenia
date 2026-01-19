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
    
<div className="p-4">
    <img src="/assets/Name.jpg" alt="Submit" className="mx-auto w-full mt-[5vh] md:w-1/2 lg:w-1/2" />


</div>
      
        </div>
      </div>
    </div>
  )
}