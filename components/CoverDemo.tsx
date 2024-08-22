import React from "react";
import { Cover } from "@/components/ui/Cover";

export function CoverDemo() {
  return (
    <div className="py-6">
      <h1 className="text-3xl md:text-3xl lg:text-3xl mt-6">Hai , I am </h1>
      <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-left mt-3 py-2 relative z-20  bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        Harshith Kumar
        <br />
        <span className="">I am a &nbsp;</span>
        <Cover>FrontEnd Developer</Cover>
      </h1>
    </div>
  );
}
