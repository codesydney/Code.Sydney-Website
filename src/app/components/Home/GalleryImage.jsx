"use client";
import { useState } from "react";
import Image from "next/image";

export default function GalleryImage({ image, handleToggleModal }) {
  const {
    asset: { url },
    alt,
    caption,
  } = image;

  return (
    <div
      className={`group w-[100%] h-[100%] rounded-lg overflow-hidden relative cursor-pointer`}
      onClick={() => handleToggleModal(image)}
    >
      <Image
        src={url}
        alt={alt}
        height={300}
        width={300}
        className="h-[100%] w-[100%] object-cover object-center relative z-10"
      />
      <p className="hidden group-hover:flex transition-all duration-200 absolute bottom-0 p-2 bg-custom-dark/80 w-full z-50 text-custom-light ">
        {caption}
      </p>
    </div>
  );
}
