"use client";
import Image from "next/image";
// import styles from "./page.module.css";
import AnimatedFrame from './animated-frame';
import StickyAnimationSection from './stick-animation';

export default function Home() {

  

  return (
    <>
      <div className="section_01"></div>

      <StickyAnimationSection/>
      
      <AnimatedFrame/>

      <div className="section_01"></div>
      

    </>
  );
}
