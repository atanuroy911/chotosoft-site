'use client'

import '@/styles/herosection.css';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Fade from "embla-carousel-fade"
import Image from 'next/image';

const HeroSection = ({ UIText, heroText, typingText }: { UIText: any, heroText: any, typingText: any }) => {
    const scrollToProduct = (product: string) => {
        const featuredWorksSection = document.getElementById(`${product}`);
        if (featuredWorksSection) {
            featuredWorksSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero-section" className="container flex flex-col lg:flex-row lg:items-center sm:pt-4 md:py-0 lg:my-10 lg:mx-10">
            {/* Left Column */}
            <div className="flex flex-col justify-center lg:w-1/2 lg:mr-4">
                <div className="flex flex-col text-center md:text-pretty">
                    <h1 className='text-2xl md:text-4xl font-bold py-3'>{heroText[0]}</h1>
                    <h2 className='text-xl md:text-3xl pb-2'>{heroText[1]}</h2>
                </div>
                <div className='text-center font-bold py-4'>
                    <Button className='text-md hover:bg-green-600 dark:hover:text-white '>{UIText}</Button>
                </div>
            </div>
            <br />
            {/* Right Column */}
            <div className="mx-auto h-auto w-auto lg:h-md lg:w-1/2">
                <Carousel className="w-full mx-auto"
                    plugins={[
                        Autoplay({ delay: 2200 }),
                        Fade(),
                    ]}
                >
                    <CarouselContent>
                        <CarouselItem>
                            <Image className="h-auto mx-auto lg:w-9/12 lg:w-sm lg:mx-20 object-cover transition-all duration-300 rounded-lg cursor-pointer" src="/product-1.png" alt="image description" width={300} height={200} onClick={() => { scrollToProduct("product-1") }} />
                        </CarouselItem>
                        <CarouselItem>
                            <Image className="h-auto mx-auto lg:w-9/12 lg:w-sm lg:mx-20 object-cover transition-all duration-300 rounded-lg cursor-pointer" src="/product-2x.png" alt="image description" width={300} height={200} onClick={() => { scrollToProduct("product-2") }} />
                        </CarouselItem>
                        <CarouselItem>
                            <Image className="h-auto mx-auto lg:w-9/12 lg:w-sm lg:mx-20 object-fit transition-all duration-300 rounded-lg cursor-pointer" src="/product-3.png" alt="image description" width={300} height={200} onClick={() => { scrollToProduct("product-3") }}/>
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    );
};

export default HeroSection;
