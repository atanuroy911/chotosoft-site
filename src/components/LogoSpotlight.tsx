'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const LogoSpotlight: React.FC = () => {
    const { theme } = useTheme();
    const [imageSources, setImageSources] = useState<string[]>([]);

    useEffect(() => {
        const newImageSources = [1, 2, 3, 4, 5].map((index) =>
            theme === 'dark' ? `/Brands-${index}-dark.png` : `/Brands-${index}.png`
        );
        setImageSources(newImageSources);
    }, [theme]);

    return (
        <div className="max-w-5xl lg:mx-w-4xl mx-auto p-16 md:p-14">
            <h1 className="text-3xl font-bold mb-4 text-center py-4">A Catalogue of Esteemed Collaborations</h1>
            <ul className="flex justify-evenly flex-wrap md:flex-row md:justify-between">
                {imageSources.map((src, index) => (
                    <li key={index} className="transition-all duration-300 ease-in-out py-2 transform hover:scale-105">
                        <Image
                            src={src}
                            alt={`Image ${index + 1}`}
                            className="w-32 md:w-36 h-auto transition-all duration-300 filter grayscale hover:grayscale-0"
                            width={144} height={144}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LogoSpotlight;
