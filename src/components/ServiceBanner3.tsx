'use client';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Fade from "embla-carousel-fade"
import { ArrowDownCircle } from 'lucide-react';
import { useEffect } from "react";

const ServiceBanner3 = ({ services }: {services: any}) => {

    // const services = [
    //     {
    //         title: "App Development",
    //         description: "Custom mobile app development for iOS and Android platforms."
    //     },
    //     {
    //         title: "Web Development",
    //         description: "Responsive and scalable web development services."
    //     },
    //     {
    //         title: "Native Development",
    //         description: "High-performance native applications for various platforms."
    //     },
    //     {
    //         title: "Blender Assets",
    //         description: "Creation of high-quality 3D assets and scenes using Blender."
    //     },
    //     {
    //         title: "Graphic Design",
    //         description: "Professional graphic design services for all your needs."
    //     }
    // ];

    const scrollToFeaturedWorks = () => {
        const featuredWorksSection = document.getElementById('featured-works');
        if (featuredWorksSection) {
            featuredWorksSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    

    return (
        <div className="py-10 md:py-6 px-2">
            {/* <h1 className="text-3xl text-center font-bold mb-12 px-6">Services We Provide</h1> */}
            <div className={`transition-opacity duration-1000 ease-in-out`}>
                <Carousel className=""
                    plugins={[
                        Autoplay({
                            delay: 3000,
                        }),
                        Fade(),
                    ]}
                >
                    <CarouselContent>
                        {Object.keys(services).map(key => ( (
                            <CarouselItem key={key} className="text-center">
                                <h2 className="text-xl font-semibold mb-2">{services[key].title}</h2>
                                <p className="text-gray-600 dark:text-gray-400">{services[key].description}</p>
                            </CarouselItem>
                        )))}
                    </CarouselContent>
                </Carousel>
                <div className='w-full flex items-center justify-center py-4'>
                    <ArrowDownCircle onClick={scrollToFeaturedWorks} className="cursor-pointer" />
                </div>
            </div>
        </div>
    );
};

export default ServiceBanner3;
