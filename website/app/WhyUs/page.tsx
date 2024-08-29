import {
    UserGroupIcon, ChartPieIcon, RocketLaunchIcon, CurrencyDollarIcon, PresentationChartLineIcon, HandThumbUpIcon
  
  } from '@heroicons/react/20/solid'
  import Image from 'next/image'
  
  const features = [
    {
      name: 'Improve Customer Retention.',
      description:
        'Deliver consistent, quanti able, and documented results that breed trust and strengthen customer relationships and keep competitors exactly where they belong — on the outside looking in.',
      icon: RocketLaunchIcon,
    },
    {
      name: 'Discover New Opportunities.',
      description: 'Uncover new revenue opportunities by being the first to know about building issues, needs, and other initiatives to deliver additional value to your customers.',
      icon: CurrencyDollarIcon,
    },
    {
      name: 'Gain Competitive Advantage.',
      description: 'Stand out from the crowd by showing customers and prospects how your services leverage real data and powerful analytics to ensure the optimal performance of their buildings..',
      icon: ChartPieIcon,
    },
    {
      name: 'Enhance Team Effectiveness.',
      description: 'Replace assumption-driven guesswork with data-driven answers, saving your team a tremendous amount of e ort and time in troubleshooting and resolving issues.',
      icon: UserGroupIcon,
    },
    {
      name: 'Become indispensable with VizualTech Solutions.',
      description: 'Increase labor e ciency ratios, deliver new levels of customer value you probably never thought possible, and take your business to the next level. Contact VizualTech Solutions now!',
      icon: HandThumbUpIcon,
    },
    {
      name: ' Increase Efficiency & Pro tability.',
      description: ' Bolster your bottom line by doing more with less while continuing to provide excellent service to your customers as today&apos;s building techs retire and the workforce shrinks.',
      icon: PresentationChartLineIcon,
    },
  ]
  
  export default function Values() {
    return (
      <div className="relative overflow-hidden bg-white py-24 sm:py-32 max-w-7xl mx-auto">
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
          <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <div className="inline font-semibold text-[#171717]">
                  <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5  text-[#06B6D4]" />
                  {feature.name}
                </div>{' '}
                <div className="inline text-gray-600">{feature.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  