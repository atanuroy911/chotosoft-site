import { Computer, Globe, Phone } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAndroid } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

import React from 'react';

interface HorizontalBannerProps {
    text1: string;
    text2: string;
    text3: string;
}

const ServiceBanner: React.FC<HorizontalBannerProps> = ({ text1, text2, text3 }) => {
    return (
        <div className="py-4 my-4 flex justify-around items-center">
            <div className="text-lg flex flex-col gap-2 items-center">
                <FontAwesomeIcon icon={faGlobe} className='w-8 text-blue-600' />
                {text1}
            </div>
            <div className="text-lg flex flex-col gap-2 items-center">
                <FontAwesomeIcon icon={faAndroid} className='w-9 text-green-600' />
                {text2}
            </div>
            <div className="text-lg flex flex-col gap-2 items-center">
                <FontAwesomeIcon icon={faCode} className='w-10 text-red-500'/>
                {text3}
            </div>
        </div>
    );
};

export default ServiceBanner;
