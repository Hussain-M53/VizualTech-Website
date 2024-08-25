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
        name: 'Laravel',
        image: '/heroImage.png',
    });

    const services = [
        { name: 'BMS Control Submittals', subName: 'Cost Effective: Engineering Designs.', desc: 'We can furnish cost-e ective engineering designs based on specifications and plans. Also include shop drawing submittals with detailed plant control schematics, DDC wiring drawings, DDC panel layout drawings, DDC plant sequences, valve and damper sizing, equipment schedules, device takeo s and bill of material.', image: '/heroImage.png' },
        { name: 'BMS Frontend Graphics', subName: 'Intuitive Graphics: Operator Efficiency.', desc: 'We deliver intuitive equipment and building oor plan navigation graphics with Building Performance and Energy Dashboard, customized as per customer & project needs.', image: '/heroImage.png' },
        { name: 'DDC Programming', subName: 'Comprehensive DDC: Ready to deploy.', desc: 'We deliver comprehensive DDC application programming as per sequence of operation and ashrae guidelines.', image: '/heroImage.png' },
        { name: 'Remote Commissioning & Integration', subName: ' 24/7 Anytime: Every time.', desc: 'We provide seamless remote commissioning of control systems for controllers and BMS front-end system, third-party integration, site acceptance testing and customer training.', image: '/heroImage.png' },
        { name: 'Other', subName: '', desc: '-3.11%', image: '/heroImage.png' },
    ];

    return (
        <div className="bg-[#171717] w-full h-screen text-white p-8 flex items-center content-between">
            <div className="text-center w-1/2">
                <h1 className="text-2xl font-bold">{selectedService.name}</h1>
                <Image
                    src={selectedService.image}
                    alt={selectedService.name}
                    className="mx-auto mt-4 h-64 .fade-in"
                />
            </div>
            <div className="overflow-y-auto w-1/2 mt-8 space-y-4">
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    orientation="vertical"
                    className="w-full max-w-xs"
                >
                    <CarouselPrevious />

                    <CarouselContent className="-mt-1 h-[400px]">
                        {services.map((service) => (
                            <CarouselItem key={service.name} className="pt-1 md:basis-1/2">
                                <div
                                    key={service.name}
                                    className="h-screen w-full p-4 bg-gray-800 rounded-lg hover:bg-gray-700 cursor-pointer"
                                    onClick={() => setSelectedService(service)}
                                >

                                    <div className="w-full">{service.name}</div>
                                    <div>{service.subName}</div>
                                    <div>{service.desc}</div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    );
}

