"use client"
import { useState } from "react"
import Image from "next/image"


type CarouselItem = {
    title: string
    image: string
    description: string
}
export default function Carousel({ Items } : { Items: CarouselItem[] }) {
  const [selected, setSelected] = useState(0)

  return (
    <div className="flex flex-col justify-center items-center gap-20">
        <div className="flex gap-4 overflow-x-auto py-4">
        {Items.map((item, i) => (
            <div
            key={item.title}
            onClick={() => setSelected(i)}
            className={`flex-shrink-0 w-64 transition ${
                i === selected ? "opacity-100 scale-105" : "opacity-40"
            }`}
            >
            <Image src={item.image} height={100} width={200} alt={item.title} />
            </  div>
        ))}
        </div>
        <p>{Items[selected].description}</p>
    </div>

  )
}