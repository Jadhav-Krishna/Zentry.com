import { useState,useRef } from "react"

const Hero = () => {
  const [currentIndex, setcurrentIndex] = useState(1)
  const [hasClicked, sethasClicked] = useState(false)
  const [isLoading, setisLoading] = useState(true)
  const [loadedVideos, setloadedVideos] = useState(0)

  const totalVideo = 3;
  const nextVideoRef = useRef(null);

  const upcomingVideoIndex = (currentIndex % totalVideo) + 1;

  const handleMiniVideoClick = () => {
    sethasClicked(true);
    setcurrentIndex(upcomingVideoIndex);
  }

  const handleVideoLoad = () => {
    setloadedVideos((prevLoadedVideos) => prevLoadedVideos + 1);
  }

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

  return (
    <div className="relative h-dvh w-screen overflow-hidden">
        <div id="videoframe" className="relative h-dvh w-screen rounded-lg z-10 overflow-hidden bg-blue-75">
            <div>
                <div className="mask-clip-path absolute-center z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
                    <div onClick={handleMiniVideoClick} className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:opacity-100 hover:scale-100">
                      <video
                        ref={nextVideoRef}
                        src={getVideoSrc(upcomingVideoIndex)}
                        loop
                        muted
                        id="current-video"
                        className="size-64 origin-center scale-150 object-cover object-center"
                        onLoadedData={handleVideoLoad}
                      />
                    </div>
                </div>
                <video
                  ref={nextVideoRef}
                  src={getVideoSrc(currentIndex)}
                  loop
                  muted
                  id="next-video"
                  className="absolute-center invisible absolute size-64 z-20 object-cover object-center"
                  onLoadedData={handleVideoLoad}
                />
                <video
                  src={getVideoSrc(currentIndex === totalVideo -1 ? 1 : currentIndex)}
                  autoPlay
                  loop
                  muted
                  className="absolute left-0 top-0 size-full object-cover object-center"
                  onLoadedData={handleVideoLoad}
                />
            </div>
            <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
              G<b>a</b>ming
            </h1>
        </div>
    </div>
  )
}

export default Hero