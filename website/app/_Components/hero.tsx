'use client'

import Image from "next/image"
import Link from "next/link"

export default function Hero() {

  return (
    <div className="relative overflow-hidden bg-white">
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
        <div className="absolute shadow-xl top-0 -right-40 w-[40rem] h-[40rem] rounded-full border-2  border-t-[2px] border-t-gradient-to-r from-[#06B6D4] to-[#ffffff] opacity-50 animate-spin-slow" />
        <div className="absolute  -right-30 w-[50rem] h-[50rem] rounded-full border-2 border-transparent border-t-[2px] border-t-gradient-to-r from-[#ff80b5] to-[#ffffff] opacity-50 animate-spin-reverse" />
      </div>
      <div className="relative z-10 px-6 lg:px-8">
        {/* <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div> */}
        <div className="mx-auto max-w-6xl px-20 py-10 sm:py-48 lg:py-16">
          <div className="flex items-center">
            <div className="text-left">
              <h1 className="text-4xl font-bold tracking-tight text-[#171717] sm:text-5xl">
                Empower Your BMS Application Engineering
              </h1>
              <p className="mt-6 text-lg leading-8 text-[#171717]">
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
                className="w-[50rem] z-10"
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
