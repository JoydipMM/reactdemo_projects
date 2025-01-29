"use client";
import Image from "next/image";
// import styles from "./page.module.css";
import { useEffect, useRef, useState } from "react";

export default function AnimatedFrame() {

  const frameAnimateRef = useRef(null);
  const [frameHeight, setFrameHeight] = useState("normal");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setFrameHeight("frame_height");
          } else {
            setFrameHeight("normal");
          }
        });
      },
      { threshold: 0.3 } // 30% of the section must be visible
    );

    if (frameAnimateRef.current) {
      observer.observe(frameAnimateRef.current);
    }

    return () => {
      if (frameAnimateRef.current) {
        observer.unobserve(frameAnimateRef.current);
      }
    };
  }, []);



/*
  const frameAnimateRef = useRef(null);
  const images = ["/866-1024x600.jpg", "/13-2500x1667.jpg", "/13-2500x1667.jpg", "/866-1024x600.jpg"];
  const [visibleFrames, setVisibleFrames] = useState(new Array(images.length).fill(false)); // Track visibility of each frame

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Array.from(frameAnimateRef.current.children).indexOf(entry.target);
          if (entry.isIntersecting) {
            setVisibleFrames((prev) => {
              const updatedFrames = [...prev];
              updatedFrames[index] = true; // Scale up each image separately
              return updatedFrames;
            });
          }
        });
      },
      { threshold: 0.8 }
    );

    const elements = frameAnimateRef.current?.children;
    if (elements) {
      Array.from(elements).forEach((el) => observer.observe(el));
    }

    return () => {
      if (elements) {
        Array.from(elements).forEach((el) => observer.unobserve(el));
        observer.unobserve(frameAnimateRef.current);
      }
    };
  }, []);
*/


  return (
    <>
      

      <div ref={frameAnimateRef} className="section_02">
        <div className={`animate_frame ${frameHeight}`} >
          <Image src="/866-1024x600.jpg" alt="image" fill={true} />
        </div>
        <div className={`animate_frame ${frameHeight}`} >
          <Image src="/13-2500x1667.jpg" alt="image" fill={true} />
        </div>
        <div className={`animate_frame ${frameHeight}`} >
          <Image src="/13-2500x1667.jpg" alt="image" fill={true} />
        </div>
        <div className={`animate_frame ${frameHeight}`} >
          <Image src="/866-1024x600.jpg" alt="image" fill={true} />
        </div>
      </div>


      {/* <div ref={frameAnimateRef} className="section_02">
        {images.map((src, index) => (
          <div
            key={index}
            className={`animate_frame ${visibleFrames[index] ? "frame_height" : ""}`}>
            <Image src={src} alt="image" fill />
          </div>
        ))}
      </div> */}

    </>
  );
}
