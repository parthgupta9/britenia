"use client"
import { useState } from "react"




export default function Home() {
  const videos = ["/assets/1.mp4", "/assets/2.mp4"]
const [activeIndex, setActiveIndex] = useState(0)

const prevVideo = () => {
  setActiveIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1))
}

const nextVideo = () => {
  setActiveIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1))
}
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
    VERBAL BULLYING
  </p>
</div>


          {/* Video Carousel Section */}
          <div className="flex-1  rounded-lg p-[10px] flex flex-col gap-[10px] overflow-visible min-h-0 ">
            {/* Carousel Container */}
            <div className="flex-1 flex items-center justify-center gap-[10px] min-h-0 overflow-visible">
              {/* Left Arrow */}
              <button   onClick={prevVideo} className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px] text-[#FFD900] font-bold rounded-full flex items-center justify-center transition-transform hover:scale-110 flex-shrink-0 shadow-lg">
                ◀
              </button>

              {/* Video Player Container */}
              <div className="flex-1 flex flex-col gap-[10px] min-w-0 min-h-0 p-2 border-2 border-[#FFD900]">
                {/* Video 1 */}
                <div className="bg-black overflow-hidden shadow-lg 
     aspect-[3/5] sm:aspect-[9/16] md:aspect-[557.44/891] max-h-[40vh] ">

           <video
  key={videos[activeIndex]}
  src={videos[activeIndex]}
  className="w-full h-full object-cover"
  controls
  playsInline
  muted
/>

                 
               
                </div>

                {/* Dot Indicators */}
             
              </div>

              {/* Right Arrow */}
              <button onClick={nextVideo} className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px]  text-[#FFD900] font-bold rounded-full flex items-center justify-center transition-transform hover:scale-110 flex-shrink-0 shadow-lg">
                ▶
              </button>
            </div>
          </div>




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
