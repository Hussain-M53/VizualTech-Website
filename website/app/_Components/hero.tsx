'use client'

import Image from "next/image"
import Link from "next/link"

export default function Hero() {

  return (
    <div className="snap-always snap-start relative max-w-7xl mx-auto overflow-hidden bg-white">
      <div className="absolute -top-20 -left-20 inset-0">
        <Image
          src="/wave.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-70"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute top-0 -right-40 w-[25rem] h-[25rem] md:w-[35rem] md:h-[35rem] lg:w-[40rem] lg:h-[40rem] rounded-full border-2  border-t-[2px] border-t-gradient-to-r from-[#06B6D4] to-[#ffffff] opacity-50 animate-spin-slow" />
        <div className="absolute -right-30 w-[30rem] h-[30rem] md:w-[40rem] md:h-[40rem] lg:w-[50rem] lg:h-[50rem]  rounded-full border-2 border-transparent border-t-[2px] border-t-gradient-to-r from-[#ff80b5] to-[#ffffff] opacity-50 animate-spin-reverse" />
      </div>
      <div className="relative z-10 px-6 lg:px-8">
        <div className="mx-auto max-w-6xl px-12 sm:px-14 md:px-20 pt-28 sm:py-28 lg:py-28">
          <div className="block sm:flex sm:items-center">
            <div className="text-left mb-6 sm:mb-0">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[#171717] ">
                Empower Your BMS Application Engineering
              </h1>
              <p className="mt-6 text:md sm:text-lg leading-8 text-[#171717]">
                We are specialized in Building Management Systems - Application Engineering Services
              </p>
              <div className="mt-10 flex items-center justify-start gap-x-6">
                <Link
                  href="#"
                  className="rounded-md bg-[#06B6D4] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#06B6D4] hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Check Out Services!
                </Link>
              </div>
            </div>
            <div>
              <Image
                src={"/heroImage.png"}
                alt="hero image"
                width={1500}
                height={2000}
                className="w-[50rem]"
                style={{
                  WebkitMaskImage: 'radial-gradient(circle, grey, transparent)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
