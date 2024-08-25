'use client'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";

import { useState } from 'react';

export default function Services() {
    const [selectedService, setSelectedService] = useState({
        name: 'BMS Control Submittals', subName: 'Cost Effective: Engineering Designs.', desc: 'We can furnish cost-e ective engineering designs based on specifications and plans. Also include shop drawing submittals with detailed plant control schematics, DDC wiring drawings, DDC panel layout drawings, DDC plant sequences, valve and damper sizing, equipment schedules, device takeo s and bill of material.', image: '/service1.png'
    },);

    const services = [
        { name: 'BMS Control Submittals', subName: 'Cost Effective: Engineering Designs.', desc: 'We can furnish cost-e ective engineering designs based on specifications and plans. Also include shop drawing submittals with detailed plant control schematics, DDC wiring drawings, DDC panel layout drawings, DDC plant sequences, valve and damper sizing, equipment schedules, device takeo s and bill of material.', image: '/service1.png' },
        { name: 'BMS Frontend Graphics', subName: 'Intuitive Graphics: Operator Efficiency.', desc: 'We deliver intuitive equipment and building oor plan navigation graphics with Building Performance and Energy Dashboard, customized as per customer & project needs.', image: '/service2.png' },
        { name: 'DDC Programming', subName: 'Comprehensive DDC: Ready to deploy.', desc: 'We deliver comprehensive DDC application programming as per sequence of operation and ashrae guidelines.', image: '/service1.png' },
        { name: 'Remote Commissioning & Integration', subName: '24/7 Anytime: Every time.', desc: 'We provide seamless remote commissioning of control systems for controllers and BMS front-end system, third-party integration, site acceptance testing and customer training.', image: '/service2.png' },
        // { name: 'Other', subName: '', desc: '-3.11%', image: '/heroImage.png' },
    ];

    return (
        <div className="bg-[#0F172A]  text-white p-10">
            <div className="text-center text-6xl">Our Services!</div>
            <div className="mt-6 w-full h-screen p-8 flex items-center content-between">
                <div className="w-1/2 gap-y-6">
                    <div className="text-center text-white text-4xl">{selectedService.name}</div>
                    <div className="text-center w-full">
                        <Image
                            width={600}
                            height={64}
                            src={selectedService.image}
                            alt={selectedService.name}
                            className="mx-auto mt-4 cover fade-in"
                        />
                    </div>
                </div>
                <div className="overflow-y-hidden w-1/2 mt-8 space-y-4">
                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        orientation="vertical"
                        className="w-full"
                    >
                        <CarouselContent className="w-full -mt-1 h-[500px]">
                            {services.map((service) => (
                                <CarouselItem key={service.name} className="pt-1 md:basis-1/2">
                                    <Card>
                                        <CardContent className="flex items-center justify-center p-6">
                                            <div
                                                key={service.name}
                                                className="text-white h-[300px] w-full p-4 bg-gray-800 rounded-lg hover:bg-gray-700 cursor-pointer"
                                                onClick={() => setSelectedService(service)}
                                            >
                                                <div className="text-2xl">{service.subName}</div>
                                                <div className="mt-20 text-white/50">{service.desc}</div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>

            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-10 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-10"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(10%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-100 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                />
            </div>
        </div>

    );
}

