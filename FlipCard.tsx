"use client";

import Image from "next/image";
import { useState } from "react";

interface FlipCardProps {
  frontImage: string;
  backImage: string;
  frontAlt?: string;
  backAlt?: string;
  aspectRatio?: string;
  hint?: string;
}

export function FlipCard({
  frontImage,
  backImage,
  frontAlt = "Card front",
  backAlt = "Card back",
  aspectRatio = "2042/1316",
  hint = "Click to flip",
}: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [hovered, setHovered] = useState(false);

  const toggleFlip = () => setIsFlipped((prev) => !prev);

  const baseRotation = isFlipped ? "rotateY(180deg)" : "rotateY(0deg)";
  const hoverTilt = hovered && !isFlipped ? " rotateY(8deg) translateY(-6px)" : "";

  return (
    <div className="flex flex-col items-center">
      <div style={{ perspective: "1600px" }}>
        <div
          role="button"
          tabIndex={0}
          aria-pressed={isFlipped}
          aria-label={isFlipped ? "Show card front" : "Show card back"}
          onClick={toggleFlip}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              toggleFlip();
            }
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="relative w-[280px] sm:w-[360px] md:w-[420px] lg:w-[480px] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-3xl"
          style={{
            aspectRatio,
            transformStyle: "preserve-3d",
            transform: `${baseRotation}${hoverTilt}`,
            transition: "transform 0.7s cubic-bezier(0.22, 0.61, 0.36, 1)",
          }}
        >
          <div
            className="absolute inset-0 rounded-3xl shadow-2xl overflow-hidden"
            style={{ backfaceVisibility: "hidden" }}
          >
            <Image
              src={frontImage}
              alt={frontAlt}
              fill
              sizes="(min-width: 1024px) 480px, 92vw"
              className="object-cover"
            />
          </div>

          <div
            className="absolute inset-0 rounded-3xl shadow-2xl overflow-hidden"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <Image
              src={backImage}
              alt={backAlt}
              fill
              sizes="(min-width: 1024px) 480px, 92vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {hint && (
        <p className="mt-3 text-center text-sm font-semibold text-gray-500">
          {hint}
        </p>
      )}
    </div>
  );
}
