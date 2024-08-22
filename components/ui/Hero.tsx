// rafce
import React from "react";
import { Spotlight } from "@/components/ui/sportlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { AnimatedTooltipPreview } from "../AnimatedTooltipPreview";
import { CoverDemo } from "../CoverDemo";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex flex-col-reverse md:flex-row  justify-between  md:gap-4 relative my-20 z-10">
        <div className="p-4 md:p-0 md:order-1 max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col  justify-center ">
          <CoverDemo />
          <h1 className="text-[30px] md:text-3xl lg:text-3xl mt-11"> About </h1>
          <TextGenerateEffect
            words="I am a Front-End Developer with 2 years 
            of experience at Novigo Solutions, specializing in OutSystems. 
            Throughout my career, I have worked on multiple client and internal 
            projects, bringing a passion for web development to each one. I aim to
             leverage my skills to contribute effectively to dynamic and innovative 
             projects, ensuring exceptional user 
            experiences through responsive and visually appealing designs."
            className=" md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl px-3 md:px-5"
          />
        </div>
        <div className="md:order-2 p-4 md:p-0">
          <AnimatedTooltipPreview />
          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
