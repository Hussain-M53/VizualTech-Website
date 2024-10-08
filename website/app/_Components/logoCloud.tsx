import Image from "next/image";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";


export default function LogoCloud() {
  const companies = [
    <Image
      alt="Transistor"
      src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
      width={158}
      height={48}
      className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
    />,
    <Image
      alt="Reform"
      src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
      width={158}
      height={48}
      className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
    />,
    <Image
      alt="Tuple"
      src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
      width={158}
      height={48}
      className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
    />,
    <Image
      alt="SavvyCal"
      src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
      width={158}
      height={48}
      className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
    />,
    <Image
      alt="Statamic"
      src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
      width={158}
      height={48}
      className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
    />
  ];

  
  return (
    <div className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Trusted by the world’s most innovative teams
        </h2>
        <div className="mx-auto mt-10 max-w-7xl items-center gap-x-8 sm:gap-x-10 lg:mx-0 lg:max-w-none">
          <InfiniteMovingCards
            items={companies}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  )
}


