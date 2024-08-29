'use client'

import { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { Radio, RadioGroup } from '@headlessui/react'
import { StickyScroll } from "../../components/ui/sticky-scroll-reveal";

const product = {
    name: 'Basic Tee 6-Pack',
    price: '$192',
    href: '#',
    breadcrumbs: [
        { id: 1, name: 'Men', href: '#' },
        { id: 2, name: 'Clothing', href: '#' },
    ],
    images: [
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
            alt: 'Two each of gray, white, and black shirts laying flat.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
            alt: 'Model wearing plain black basic tee.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
            alt: 'Model wearing plain gray basic tee.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
            alt: 'Model wearing plain white basic tee.',
        },
    ],

    description:
        'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
        'Hand cut and sewn locally',
        'Dyed with our proprietary colors',
        'Pre-washed & pre-shrunk',
        'Ultra-soft 100% cotton',
    ],
    details:
        'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Projects() {

    return (
        <div className="bg-white p-10 my-6 max-w-7xl mx-auto">
            <div className='text-center text-6xl'>Projects</div>
            <div className="pt-6">
                <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                    <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                        <img
                            alt={product.images[0].alt}
                            src={product.images[0].src}
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            <img
                                alt={product.images[1].alt}
                                src={product.images[1].src}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            <img
                                alt={product.images[2].alt}
                                src={product.images[2].src}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                    </div>
                    <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                        <img
                            alt={product.images[3].alt}
                            src={product.images[3].src}
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                </div>

                {/* Product info */}
                <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
                    </div>
                </div>

                <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                    {/* Description and details */}
                    <div>
                        <h3 className="sr-only">Description</h3>

                        <div className="space-y-6">
                            <p className="text-base text-gray-900">{product.description}</p>
                        </div>
                    </div>

                    <div className="mt-10">
                        <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                        <div className="mt-4">
                            <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                {product.highlights.map((highlight) => (
                                    <li key={highlight} className="text-gray-400">
                                        <span className="text-gray-600">{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mt-10">
                        <h2 className="text-sm font-medium text-gray-900">Details</h2>

                        <div className="mt-4 space-y-6">
                            <p className="text-sm text-gray-600">{product.details}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


// "use client";
// import React from "react";
// import Image from "next/image";

// const content = [
//   {
//     title: "Collaborative Editing",
//     description:
//       "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
//     content: (
//       <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
//         Collaborative Editing
//       </div>
//     ),
//   },
//   {
//     title: "Real time changes",
//     description:
//       "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
//     content: (
//       <div className="h-full w-full  flex items-center justify-center text-white">
//         <Image
//           src="/linear.webp"
//           width={300}
//           height={300}
//           className="h-full w-full object-cover"
//           alt="linear board demo"
//         />
//       </div>
//     ),
//   },
//   {
//     title: "Version control",
//     description:
//       "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
//     content: (
//       <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
//         Version control
//       </div>
//     ),
//   },
//   {
//     title: "Running out of content",
//     description:
//       "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
//     content: (
//       <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
//         Running out of content
//       </div>
//     ),
//   },
// ];
// export function StickyScrollRevealDemo() {
//   return (
//     <div className="p-10">
//       <StickyScroll content={content} />
//     </div>
//   );
// }
