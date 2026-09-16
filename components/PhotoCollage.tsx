"use client";
import { useState } from "react";
import Image from "next/image"
export type Photo = {
    id: string;
    src: string;
    alt: string;
};

export const photos: Photo[] = [
    { id: "Solvang", src: "/Solvang1.jpg", alt: "Me in Solvang" },
    { id: "Beach", src: "/KelvinBeach.jpg", alt: "Sunset at Campus Point" },
    { id: "Lake Tahoe", src: "/LakeTahoe.jpeg", alt: "Lake Tahoe" },
    { id: "White Tee", src: "/KelvinWhiteTee.jpg", alt: "Senior Picnic Day" },
    { id: "Solvang 2", src: "/Solvang3.jpg", alt: "Looking Afar" },
    { id: "Solvang 3", src: "/Solvang2.jpg", alt: "Me in Solvang Again" },
];   


// Back-slot poses: offset from center (px), rotation (deg)
const SLOTS = [
  { x: -150, y: -110, rotate: -7 },
  { x: 160, y: -120, rotate: 6 },
  { x: -200, y: 60, rotate: -10 },
  { x: 190, y: 70, rotate: 8 },
  { x: 0, y: 170, rotate: -3 },
];

const BACK_SCALE = 0.7;

export default function PhotoCollage() {
  const [active, setActive] = useState(0);

  return (
    <div className="relative w-[640px] max-w-full h-[600px]">
      {photos.map((photo, i) => {
        const isActive = i === active;
        const slotIndex = i < active ? i : i - 1;
        const slot = SLOTS[slotIndex];

        const transform = isActive
          ? "translate(-50%, -50%) translate(0px, 0px) rotate(0deg) scale(1)"
          : `translate(-50%, -50%) translate(${slot.x}px, ${slot.y}px) rotate(${slot.rotate}deg) scale(${BACK_SCALE})`;

        return (
          <button
            key={photo.id}
            type="button"
            onClick={() => setActive(i)}
            aria-label={photo.alt}
            aria-pressed={isActive}
            style={{
              transform,
              zIndex: isActive ? 50 : 10 + slotIndex,
            }}
            className={`absolute left-1/2 top-1/2 w-[280px] h-[360px] overflow-hidden rounded-xl border
              transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
              motion-reduce:transition-none
              ${isActive
                ? "border-[#7DA99E]/60 shadow-2xl shadow-black/60 cursor-default"
                : "border-white/10 shadow-lg shadow-black/40 cursor-pointer hover:brightness-110"}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="280px"
              priority={i === 0}
              className="object-cover"
            />
          </button>
        );
      })}
    </div>
  );
}