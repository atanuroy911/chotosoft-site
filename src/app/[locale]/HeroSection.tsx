'use client'

import TypingComponent from '@/components/TypingComponent';
import { useState, useEffect } from 'react';
import '@/styles/herosection.css';
import { Button } from '@/components/ui/button';

const HeroSection = ({ UIText, heroText, typingText }: { UIText: any, heroText: any, typingText: any }) => {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRotation((prevRotation) => (prevRotation + 120) % 360); // Rotate 120 degrees each time
        }, 2000); // Change this value to adjust the interval
        return () => clearInterval(interval);
    }, []);

    return (
        <div className=" container flex flex-col lg:flex-row lg:items-center lg:my-10 lg:mx-10">
            {/* Left Column */}
            <div className="flex flex-col justify-center lg:w-1/2 lg:mr-4">
                <div className="flex flex-col text-center md:text-pretty">
                    <h1 className='text-2xl md:text-4xl font-bold py-3'>{heroText[0]}</h1>
                    <h2 className='text-xl md:text-3xl pb-2'>{heroText[1]}</h2>
                    <div className="h-12 md:h-auto"> {/* Set max height to two lines */}
                        <TypingComponent text={typingText} />
                    </div>
                </div>
                <div className='text-center font-bold py-4'>
                    <Button className='text-md hover:bg-green-600 dark:hover:text-white '>{UIText}</Button>
                </div>
            </div>
            <br />
            {/* Right Column */}
            <div className="mx-auto image-section lg:h-md lg:w-1/2">
                <img className="h-auto  lg:w-9/12 lg:w-sm lg:mx-20 object-cover transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" alt="image description" />

            </div>
        </div>
    );
};

export default HeroSection;

