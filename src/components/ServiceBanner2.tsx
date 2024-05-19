'use client';

import React from 'react';

const ServiceBanner2: React.FC = () => {
    const services = [
        {
            title: "App Development",
            description: "Custom mobile app development for iOS and Android platforms.",
            icon: "📱"
        },
        {
            title: "Web Development",
            description: "Responsive and scalable web development services.",
            icon: "💻"
        },
        {
            title: "Native Development",
            description: "High-performance native applications for various platforms.",
            icon: "🌐"
        },
        {
            title: "Blender Assets",
            description: "Creation of high-quality 3D assets and scenes using Blender.",
            icon: "🎨"
        },
        {
            title: "Graphic Design",
            description: "Professional graphic design services for all your needs.",
            icon: "🖌️"
        }
    ];

    return (
        <div className="max-w-7xl mx-auto p-8 md:p-12">
            <h1 className="text-4xl font-bold text-center mb-12">Services We Provide</h1>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((service, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105">
                        <div className="text-5xl mb-4">{service.icon}</div>
                        <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
                        <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceBanner2;
