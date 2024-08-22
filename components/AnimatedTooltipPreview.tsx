"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

import Profile from "./image/images";

const people = [
  {
    id: 1,
    name: "Harshith K",
    designation: "Software Engineer",
    image: Profile,
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
