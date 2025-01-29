"use client"; // Required in Next.js 13+ for client-side rendering
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);


export default function StickyAnimationSection(){

    const [scrollPosition, setScrollPosition] = useState(0);

    let mm = gsap.matchMedia();

    mm.add("(min-width: 800px)", () => {
        useGSAP(()=>{

          gsap.to(".section_03", {
            scrollTrigger: {
              trigger: ".section_03",
              scroller: "body",
              //start: 'top 14%',
              start: 'top 0%',
              //end: '+=100', // Adjust as needed
              end: "top -250%",
              pin: true,
              scrub: true,
              markers: true,
            },
          });

          

        }, [])
    });


    useEffect(() => {
        // Register the ScrollTrigger plugin
        //gsap.registerPlugin(ScrollTrigger);
    
        // GSAP ScrollTrigger to toggle the class on scroll
        ScrollTrigger.create({
            trigger: ".scroll_stiky_section", // Element to track
            start: "top -80%", // Start when the top of the element reaches 80% of the viewport
            end: "top -350%", // End when the bottom of the element reaches 30% of the viewport
            toggleClass: {
              targets: ".accro_row_01", // Element where class will be toggled
              className: "collaps", // Class to be toggled
            },
            scrub: true, // Link animation to scroll position (for smooth transitions)
            markers: true, // Enable markers to visualize the scroll trigger points
          });

        ScrollTrigger.create({
          trigger: ".scroll_stiky_section", // Element to track
          start: "top -90%", // Start when the top of the element reaches 80% of the viewport
          end: "top -180%", // End when the bottom of the element reaches 30% of the viewport
          toggleClass: {
            targets: ".accro_row_02", // Element where class will be toggled
            className: "active", // Class to be toggled
          },
          scrub: true, // Link animation to scroll position (for smooth transitions)
          markers: true, // Enable markers to visualize the scroll trigger points
        });

        ScrollTrigger.create({
            trigger: ".scroll_stiky_section", // Element to track
            start: "top -180%", // Start when the top of the element reaches 80% of the viewport
            end: "top -350%", // End when the bottom of the element reaches 30% of the viewport
            toggleClass: {
              targets: ".accro_row_03", // Element where class will be toggled
              className: "active", // Class to be toggled
            },
            scrub: true, // Link animation to scroll position (for smooth transitions)
            markers: true, // Enable markers to visualize the scroll trigger points
          });

        return () => {
            // Clean up when the component is unmounted
            ScrollTrigger.kill();
          };
        }, []);
      

    
    return(
    
        <>
        <div className="section_03">
            <div className="left_section"></div>
            <div className="scroll_stiky_section">

                <div className="accro_group">

                    <div className="accro_row accro_row_01">
                        <div className="accro_hd accro_hd_01">Accro Hd 01</div>
                        <div className="accro_body accro_body_01">
                            <div className="accro_body_inner">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, </div>
                        </div>
                    </div>

                    <div className="accro_row accro_row_02">
                        <div className="accro_hd accro_hd_02">Accro Hd 02</div>
                        <div className="accro_body accro_body_02">
                            <div className="accro_body_inner">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, </div>
                        </div>
                    </div>

                    <div className="accro_row accro_row_03">
                        <div className="accro_hd accro_hd_03">Accro Hd 03</div>
                        <div className="accro_body accro_body_03">
                            <div className="accro_body_inner">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, </div>
                        </div>
                    </div>

                </div>
                

            </div>

        </div>
        
        
        
        </>
    
    )
}