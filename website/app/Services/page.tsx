'use client'
import { BackgroundBeams } from "@/components/ui/background-beams";
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
    const [imageVisible, setImageVisible] = useState(true);
    const [selectedService, setSelectedService] = useState({
        name: 'BMS Control Submittals', subName: 'Cost Effective: Engineering Designs.', desc: 'We can furnish cost-e ective engineering designs based on specifications and plans. Also include shop drawing submittals with detailed plant control schematics, DDC wiring drawings, DDC panel layout drawings, DDC plant sequences, valve and damper sizing, equipment schedules, device takeo s and bill of material.', image: '/service1.png'
    },);

    const services = [
        { name: 'BMS Control Submittals', subName: 'Cost Effective: Engineering Designs.', desc: 'We can furnish cost-e ective engineering designs based on specifications and plans. Also include shop drawing submittals with detailed plant control schematics, DDC wiring drawings, DDC panel layout drawings, DDC plant sequences, valve and damper sizing, equipment schedules, device takeo s and bill of material.', image: '/service1.png' },
        { name: 'BMS Frontend Graphics', subName: 'Intuitive Graphics: Operator Efficiency.', desc: 'We deliver intuitive equipment and building floor plan navigation graphics with Building Performance and Energy Dashboard, customized as per customer & project needs.', image: '/service2.png' },
        { name: 'DDC Programming', subName: 'Comprehensive DDC: Ready to deploy.', desc: 'We deliver comprehensive DDC application programming as per sequence of operation and ASHRAE guidelines.', image: '/service1.png' },
        { name: 'Remote Commissioning & Integration', subName: '24/7 Anytime: Every time.', desc: 'We provide seamless remote commissioning of control systems for controllers and BMS front-end system, third-party integration, site acceptance testing and customer training.', image: '/service2.png' },
    ];
    const handleNext = () => {
        const currentIndex = services.findIndex(service => service.name === selectedService.name);
        const nextIndex = (currentIndex + 1) % services.length;
        handleCarouselChange(nextIndex);
    };

    const handlePrevious = () => {
        const currentIndex = services.findIndex(service => service.name === selectedService.name);
        const prevIndex = (currentIndex - 1 + services.length) % services.length;
        handleCarouselChange(prevIndex);
    };

    const handleCarouselChange = (index: number) => {
        setImageVisible(false);
        setTimeout(() => {
            setSelectedService(services[index]);
            setImageVisible(true);
        }, 500); // Duration of the fade-out effect
    };

    return (
        <div className="mt-20 snap-always snap-start relative overflow-hidden max-w-7xl mx-auto h-full bg-[#0F172A] text-white py-20">
            <div className="relative z-30 text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Our Services!</div>
            <div className="relative z-30 mt-6 w-full p-8 flex flex-col items-center sm:flex-row sm:items-center sm:content-between">
                <div className="sm:w-1/2">
                    <div className="text-center text-white text-2xl md:text-4xl">{selectedService.name}</div>
                    <div className="text-center w-full">
                        <Image
                            width={600}
                            height={200}
                            src={selectedService.image}
                            alt={selectedService.name}
                            className={`z-30 mx-auto cover w-[50rem] ${imageVisible ? 'fadeInSlideIn' : 'fadeOut'}`}
                        />
                    </div>
                </div>
                <div className="sm:w-1/2 mt-8 space-y-4 z-30">
                    <Carousel className="w-full " orientation="vertical" opts={{
                        align: "start",
                        loop: true,
                    }}>
                        <CarouselContent className="w-full -mt-1 h-[300px]">
                            {services.map((service) => (
                                <CarouselItem key={service.name} className="pt-1 md:basis-1/2">
                                    <Card className="bg-[#06B6D4]/90 flex items-center justify-center p-2">
                                        <CardContent className="">
                                            <div
                                                key={service.name}
                                                className="text-white h-[250px] w-full p-2 md:p-3 lg:p-4 rounded-lg cursor-pointer"
                                                onClick={() => setSelectedService(service)}
                                            >
                                                <div className="text-xl lg:text-2xl text-white">{service.subName}</div>
                                                <div className="text-xs md:text-sm lg:text-md mt-2 md:mt-6 lg:mt-10 text-white">{service.desc}</div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div onClick={handlePrevious} >  <CarouselPrevious /></div>
                        <div onClick={handleNext}><CarouselNext /></div>
                    </Carousel>
                </div>
            </div>
            <div className="opacity-50 absolute z-20 top-1/2 left-8 transform -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem]  md:w-[50rem] md:h-[50rem] bg-[#06B6D4] rounded-full" />
            <BackgroundBeams />
        </div>
    );
}