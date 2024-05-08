'use client';

import { useTheme } from 'next-themes';
import React from 'react';

const LogoSpotlight: React.FC = () => {
    const { theme } = useTheme();

    // Function to determine the correct image source based on the theme
    const getImageSource = (imageName: string) => {
        if (theme === 'dark') {
            return `${imageName}-dark.png`;
        }
        return `${imageName}.png`;
    };

    return (
        <div className="max-w-5xl lg:mx-w-4xl mx-auto p-16 md:p-14">
            <h1 className="text-3xl font-bold mb-4 text-center py-4">A Catalogue of Esteemed Collaborations</h1>
            <ul className="flex justify-evenly flex-wrap md:flex-row md:justify-between">
                {[1, 2, 3, 4, 5].map((index) => (
                    <li key={index} className="transition-all duration-300 ease-in-out py-2 transform hover:scale-105">
                        <img
                            src={getImageSource(`Brands-${index}`)}
                            alt={`Image ${index}`}
                            className="w-32 md:w-36 h-auto transition-all duration-300 filter grayscale hover:grayscale-0"
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LogoSpotlight;

