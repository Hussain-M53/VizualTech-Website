'use client'

import {
  UserGroupIcon, ChartPieIcon, RocketLaunchIcon, CurrencyDollarIcon, PresentationChartLineIcon, HandThumbUpIcon
} from '@heroicons/react/20/solid'
import Image from 'next/image'
import { AnimatePresence, motion } from "framer-motion";
import { useState } from 'react';

const features = [
  {
    name: 'Improve Customer Retention.',
    description:
      'Deliver consistent, quantifiable, and documented results that breed trust and strengthen customer relationships and keep competitors exactly where they belong — on the outside looking in.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Discover New Opportunities.',
    description: 'Uncover new revenue opportunities by being the first to know about building issues, needs, and other initiatives to deliver additional value to your customers.',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Gain Competitive Advantage.',
    description: 'Stand out from the crowd by showing customers and prospects how your services leverage real data and powerful analytics to ensure the optimal performance of their buildings.',
    icon: ChartPieIcon,
  },
  {
    name: 'Enhance Team Effectiveness.',
    description: 'Replace assumption-driven guesswork with data-driven answers, saving your team a tremendous amount of effort and time in troubleshooting and resolving issues.',
    icon: UserGroupIcon,
  },
  {
    name: 'Become indispensable with VizualTech Solutions.',
    description: 'Increase labor efficiency ratios, deliver new levels of customer value you probably never thought possible, and take your business to the next level. Contact VizualTech Solutions now!',
    icon: HandThumbUpIcon,
  },
  {
    name: 'Increase Efficiency & Profitability.',
    description: 'Bolster your bottom line by doing more with less while continuing to provide excellent service to your customers as today\'s building techs retire and the workforce shrinks.',
    icon: PresentationChartLineIcon,
  },
]

export default function Values() {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.div
      className="snap-always snap-start relative max-w-7xl mx-auto overflow-hidden bg-white py-16 md:py-28"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: false }}
    >
      <div className="absolute inset-0">
        <Image
          src="/valuesBg.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-25"
          style={{
            filter: 'blur(4px)',
            WebkitMaskImage: 'radial-gradient(circle, white, transparent)',
          }}
        />
      </div>
      <div className="mx-auto px-6 lg:px-8">
        <h2 className="text-base font-semibold leading-7 text-[#06B6D4]">WHY US</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-[#171717] sm:text-4xl">TOP REASONS</p>
        <p className="my-6 text-lg leading-8 text-gray-600">
          Optimize Your Engineering & Grow Your Business
        </p>
        <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-2 md:gap-y-8 lg:gap-y-14 lg:mx-0 lg:max-w-none md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <div
              key={feature?.name}
              className="relative group block p-2 h-full w-full"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.span
                    className="absolute inset-0 h-full w-full bg-slate-400/[0.2] block rounded-md sm:rounded-3xl"
                    layoutId="hoverBackground" // required for the background to follow
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.15 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15, delay: 0.2 },
                    }}
                  />
                )}
              </AnimatePresence>
              <div className="relative pl-12 rounded-md py-4 pr-4">
                <div className="inline font-semibold text-[#171717]">
                  <feature.icon aria-hidden="true" className="absolute left-2 top-4 h-8 w-8 text-[#06B6D4]" />
                  {feature.name}
                </div>
                <div className="inline text-gray-600">{feature.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
