import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { PulseBeams, SVGs } from "@/components/ui/PulseBeam";
import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-6 sm:px-6 sm:py-6 lg:px-4">
        <div className="relative isolate overflow-hidden bg-[#06B6D4] px-6 pt-8 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-6 lg:flex lg:gap-x-14 lg:px-12 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#ffffff" />
                <stop offset={1} stopColor="#ffffff" />
              </radialGradient>
            </defs>
          </svg>
          <div className="w-1/2 mx-auto max-w-fulll text-center lg:mx-0 lg:flex-auto lg:py-16 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Empower Your Building Management Systems
              <br />
              Start using our service today.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Enhance efficiency and reduce costs with VizualTech Solutions. Partner with us to optimize your BMS engineering, boost customer retention, and uncover new opportunities. Let&apos;s elevate your business to the next level with data-driven solutions designed for success.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="dark:bg-black bg-gray-600 text-black dark:text-white flex items-center space-x-2"
              >
                <Link
                  href="#"
                  className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm"
                >
                  Contact Us
                </Link>

              </HoverBorderGradient>
              <Link href="/AboutUs" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="w-1/2 flex items-center mt-16 lg:mt-8">
            <Image
              alt="App screenshot"
              src="/ctaImage.png"
              width={1824}
              height={1080}
              className="w-[30rem] max-w-none rounded-md "
            />
          </div>
        </div>
      </div>
    </div>
  )
}
