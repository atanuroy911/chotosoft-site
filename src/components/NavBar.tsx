'use client'
import React, { useState } from 'react';
import { ModeToggle } from './ToggleMode';
import { ToggleLang } from './ToggleLang';

export default function NavBar({ options } : {options: any}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button
                onClick={toggleMenu}
                data-collapse-toggle="navbar-default"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default"
                aria-expanded={isOpen}
            >
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
            <div className={`w-full md:block md:w-auto ${isOpen ? 'block' : 'hidden'}`} id="navbar-default">
                <ul className="flex justify-around items-center gap-4 pt-5">
                    {options.map((item: string, index: number) => (
                        <li key={index}>
                            <a href="#">{item}</a>
                        </li>
                    ))}
                    <li>
                        <ModeToggle />
                    </li>
                    <li>
                        <ToggleLang />
                    </li>
                </ul>
            </div>
        </>
    );
}
