import React from 'react';

interface HorizontalBannerProps {
  text1: string;
  text2: string;
  text3: string;
}

const ServiceBanner: React.FC<HorizontalBannerProps> = ({ text1, text2, text3 }) => {
  return (
    <div className="py-4 flex justify-between items-center">
      <div className="text-lg">{text1}</div>
      <div className="text-lg">{text2}</div>
      <div className="text-lg">{text3}</div>
    </div>
  );
};

export default ServiceBanner;
