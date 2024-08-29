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
        { name: 'BMS Frontend Graphics', subName: 'Intuitive Graphics: Operator Efficiency.', desc: 'We deliver intuitive equipment and building floor plan navigation graphics with Building Performance and Energy Dashboard, customized as per customer & project needs.', image: '/service2.png' },
        { name: 'DDC Programming', subName: 'Comprehensive DDC: Ready to deploy.', desc: 'We deliver comprehensive DDC application programming as per sequence of operation and ASHRAE guidelines.', image: '/service1.png' },
        { name: 'Remote Commissioning & Integration', subName: '24/7 Anytime: Every time.', desc: 'We provide seamless remote commissioning of control systems for controllers and BMS front-end system, third-party integration, site acceptance testing and customer training.', image: '/service2.png' },
    ];

    return (
        <div className="relative overflow-hidden bg-[#0F172A] text-white p-10 max-w-7xl mx-auto">
            <div className="relative z-30 text-center text-6xl">Our Services!</div>
            <div className="relative z-30 mt-6 w-full h-screen p-8 flex items-center content-between">
                <div className="w-1/2 gap-y-6">
                    <div className="text-center text-white text-4xl">{selectedService.name}</div>
                    <div className="text-center w-full">
                        <Image
                            width={600}
                            height={64}
                            src={selectedService.image}
                            alt={selectedService.name}
                            className="z-30 mx-auto mt-4 cover fadeIn"
                        />
                    </div>
                </div>
                <div className="w-1/2 mt-8 space-y-4 z-30">
                    <Carousel className="w-full " orientation="vertical">
                        <CarouselContent className="w-full -mt-1 h-[376px]">
                            {services.map((service) => (
                                <CarouselItem key={service.name} className="pt-1 md:basis-1/2">
                                    <Card className="bg-[#06B6D4]/90 flex items-center justify-center p-2">
                                        <CardContent className="">
                                            <div
                                                key={service.name}
                                                className="text-white h-[300px] w-full p-4 rounded-lg cursor-pointer"
                                                onClick={() => setSelectedService(service)}
                                            >
                                                <div className="text-2xl text-white">{service.subName}</div>
                                                <div className="mt-20 text-white">{service.desc}</div>
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
            <div className="opacity-50 absolute z-20 top-1/2 left-8 transform -translate-x-1/2 -translate-y-1/2 w-[50em] h-[50em] bg-[#06B6D4] rounded-full" />
        </div>
    );
}
