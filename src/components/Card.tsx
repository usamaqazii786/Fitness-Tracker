import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Card = ({ title, time, image }) => {
    useEffect(() => {
        AOS.init({
          offset: 200,
          duration: 500,
          easing: 'ease-in-sine',
          delay: 100,
        });
      }, []);
  return (
    <div className="overflow-hidden bg-white rounded-lg shadow-md" data-aos="fade-right">
      <img src={image} alt={title} className="object-cover w-full h-48" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">{time}</p>
      </div>
    </div>
  );
};

export default Card;
