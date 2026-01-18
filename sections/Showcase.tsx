'use client';

import gsap from "gsap";
import { useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(ScrollTrigger);
export default function Showcase(){

    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);



    useGSAP(() => {

        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];
        projects.forEach((project,index) => {
        gsap.fromTo(project, {
            y:50,
            opacity:0
        },{
            y: 0,
            opacity:1,
            duration:1,
            delay:0.3 *(index +1),
            scrollTrigger: {
                trigger: project,
                start: "top bottom",
                end: "bottom 60%",
                toggleActions: "play none none reverse",
            }
        })
    })

        gsap.fromTo(sectionRef.current,{
            opacity:0
        },{
            opacity:1,
            duration:1.5
        })
        
    },[]);



    return(

        <section id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">

                    {/* Left side */}

                    <div className="first-project-wrapper" ref={project1Ref}>
                        <div className="image-wrapper">
                            <img src={'/images/project1.png'} alt="Project 1"/>
                        </div>

                        <div className="text-content">
                            <h2>On-Demand Rides Made Simple with a App called Ryde</h2>
                            <p className="text-white-50 md:text-xl">
                                An app built with React Native , Expo and TailwindCSS for user friendly experience.
                            </p>
                        </div>
                    </div>

                    {/* Right side */}

                    <div className="project-list-wrapper overflow-hidden">

                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper bg-[#ffefdb]">
                                <img src={'/images/project2.png'} alt="Project 2"/>
                            </div>
                            <h2>Library Management Platform</h2>
                        </div>

                        <div className="project" ref={project3Ref}>
                            <div className="image-wrapper bg-[#ffe7eb]">
                                <img src={'/images/project3.png'} alt="Project 3"/>
                            </div>
                            <h2>YC Directory</h2>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}