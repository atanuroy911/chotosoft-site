'use client'
import Image from 'next/image';
import { useEffect } from 'react';

const LogoCarousel: React.FC = () => {
    useEffect(() => {
        const originalList = document.querySelector('.animate-infinite-scroll') as HTMLElement;
        if (!originalList) return;

        const clonedList = originalList.cloneNode(true) as HTMLElement;
        clonedList.setAttribute('aria-hidden', 'true');
        originalList?.parentNode!.appendChild(clonedList);

        // Infinite scrolling animation
        const scrollDistance = originalList?.offsetWidth + 16; // Adjust this value according to your design
        let currentScroll = 0;

        const scroll = () => {
            currentScroll += 1; // You may need to adjust the scroll speed
            if (currentScroll >= scrollDistance) {
                currentScroll = 0;
            }
            if (originalList && clonedList) {
                originalList.style.transform = `translateX(-${currentScroll}px)`;
                clonedList.style.transform = `translateX(-${currentScroll}px)`;
            }

            requestAnimationFrame(scroll);
        };

        scroll();

        return () => {
            // Clean up if needed
        };
    }, []);

    return (
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_Image]:max-w-none animate-infinite-scroll">
                <li>
                    <Image src="Brands-1.png" alt="Image 1" className="w-28 h-auto" />
                </li>
                <li>
                    <Image src="Brands-2.png" alt="Image 2" className="w-28 h-auto" />
                </li>
                <li>
                    <Image src="Brands-3.png" alt="Image 3" className="w-28 h-auto" />
                </li>
                <li>
                    <Image src="Brands-4.png" alt="Image 4" className="w-28 h-auto" />
                </li>
                <li>
                    <Image src="Brands-5.png" alt="Image 5" className="w-28 h-auto" />
                </li>
            </ul>
            {/* <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_Image]:max-w-none animate-infinite-scroll" aria-hidden="true">
                <li>
                    <Image src="Brands-1.png" alt="Image 1" className="w-28 h-auto" />
                </li>
                <li>
                    <Image src="Brands-2.png" alt="Image 2" className="w-28 h-auto" />
                </li>
                <li>
                    <Image src="Brands-3.png" alt="Image 3" className="w-28 h-auto" />
                </li>
                <li>
                    <Image src="Brands-4.png" alt="Image 4" className="w-28 h-auto" />
                </li>
                <li>
                    <Image src="Brands-5.png" alt="Image 5" className="w-28 h-auto" />
                </li>
            </ul> */}
        </div>
    );
};

export default LogoCarousel;
