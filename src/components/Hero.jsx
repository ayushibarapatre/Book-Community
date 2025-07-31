import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";
import gsap from "gsap";

const videoFiles = [
  "/assets/book1.mp4",
  "/assets/book2.mp4",
  "/assets/book3.mp4",
  "/assets/book4.mp4",
  "/assets/book5.mp4",
];

function Hero() {
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const buttonRef = useRef(null);
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -60 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" }
    );

    gsap.fromTo(
      paraRef.current,
      { opacity: 0, y: -60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.4,
      }
    );

    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.8,
        ease: "power2.out",
      }
    );
  }, []);

  const scrollToBooks = () => {
    const section = document.getElementById("books");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="hero">
      <div className="hero-text">
        <h1 ref={headingRef}>
          Read<span className="dot"> .</span> Learn<span className="dot"> .</span> Connect<span className="dot"> .</span>
        </h1>
        <p ref={paraRef}>
          Welcome to the Book Community. Let’s make reading magical!
        </p>

       <div className="button-group" ref={buttonRef}>
  <button className="shared-button">Start Exploring</button>
  <button className="shared-button" onClick={toggleAudio}>
    {isPlaying ? "Pause Music" : "Play Music"}
  </button>
</div>


      </div>

      {/* <div className="video-grid">
        {videoFiles.map((src, index) => (
          <div className="video-wrapper" key={index}>
            <video
              src={src}
              muted
              autoPlay
              loop
              playsInline
              className="small-video"
            />
            <div className="video-overlay"></div>
          </div>
        ))}
      </div>  */}


<audio
  ref={audioRef}
  src="/assets/ambient.mp3"
  type="audio/mpeg"
  loop
  preload="auto"
/>




    </div>
  );
}

export default Hero;
