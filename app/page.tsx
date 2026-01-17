"use client"
import Link from "next/link"
import { useState } from "react"




export default function Home() {
  const slides = [
  {
    src: "/assets/1.mp4",
    title: "VERBAL BULLYING",
  },
  {
    src: "/assets/2.mp4",
    title: "PHYSICAL BULLYING",
  },
]

const [activeIndex, setActiveIndex] = useState(0)

const prevVideo = () => {
  setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
}

const nextVideo = () => {
  setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
}

  return (
    <div >
         <div className="h-4 bg-[#FFD900]"></div>
      <div className="relative w-full min-h-dvh flex items-center justify-center" 
      style={{backgroundImage:"url(/assets/bg.png)", backgroundSize: "cover",
                  backgroundPosition: "center"}}>
                    
        {/* Inner container maintains 1080/1920 aspect ratio with max dimensions */}
        <div className="mt-2 w-full h-full max-w-full flex flex-col gap-[10px] rounded-lg" >
                 
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
    className="w-[15vh] h-[22vh] sm:w-[20vh] sm:h-[20vh] md:w-[25vh] md:h-[25vh] lg:w-[29.3vh] lg:h-[29.3vh] object-contain "
  style={{marginTop:"-30px"}}/>
</div>

         
          </div>
          </header>
      <div className="w-full min-h-[80px] bg-[#63277E] flex items-center justify-between px-4 py-2 shrink-0">


  {/* RIGHT */}
  <div className="ml-3 flex-1 text-center leading-tight">
    <p className="text-[#FFD900] font-[Bangers] text-[22px] sm:text-lg">
      Learn to fight bullying. Get a chance to feature as a Tiger Hero in comics.
    </p>
    <p className="text-[#FFFFFF] text-[12px] mt-1">
      Watch the videos to know how regular fun often turns into bullying. Full website Coming Soon!
    </p>
  </div>
</div>



          {/* Video Carousel Section */}
          <div className="flex-1  rounded-lg p-[10px] flex flex-col gap-[10px] overflow-visible min-h-0 ">
            {/* Carousel Container */}
            <div className="flex-1 flex items-center justify-center gap-[10px] min-h-0 overflow-visible">
              {/* Left Arrow */}
              <button   onClick={prevVideo} className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px] text-[#FFD900] font-bold rounded-full flex items-center justify-center transition-transform hover:scale-110 flex-shrink-0 shadow-lg">
                <img src="/assets/4.png"></img>
              </button>

              {/* Video Player Container */}
              <div className="flex-1 flex flex-col gap-[10px] min-w-0 min-h-0 p-2 border-2 border-[#FFD900]">
                {/* Video 1 */}
                <div className="overflow-hidden aspect-[3/5] h-[30vh] md:h-[32vh] lg:h-[34vh] ">

         <video
  key={slides[activeIndex].src}
  src={slides[activeIndex].src}
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
                <img src="/assets/7.png"></img>
              </button>
            </div>
          </div>




                  <div className="w-full h-[6.7vh] gap-10 bg-[#63277E] flex items-center justify-center px-4 ">
  {/* LEFT */}
  <button className="text-[#FFFFFF] text-2xl font-[fredoka] font-bold">
    Get Notified
  </button>
  <Link href="/action">
  <img
    src="/assets/5.png"
    className="w-8 h-8 cursor-pointer"
    alt="Back"
  />
  </Link>

  {/* RIGHT */}
  
</div>
        </div>
      </div>
    </div>
  )
}
