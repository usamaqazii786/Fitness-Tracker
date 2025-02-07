import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection = () => {
    useEffect(() => {
        AOS.init({
          offset: 200,
          duration: 600,
          easing: 'ease-in-sine',
          delay: 100,
        });
      }, []);
  return (
    <section className="px-4 py-12 bg-gray-50">
      <h2 className="text-sm font-semibold text-center text-gray-600 uppercase">
        News & Trends
      </h2>
      <h1 className="mt-2 text-3xl font-bold text-center text-gray-800">
        Explore the latest in food and nutrition
      </h1>
      <div className="flex flex-col items-center justify-center gap-6 mt-8 lg:flex-row">
        <div className="lg:w-1/2">
          <img
            src="https://blog.myfitnesspal.com/wp-content/uploads/2025/01/sober-curious-dietitian-guide.png"
            alt="Hero"
            className="rounded-lg" data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          />
        </div>
        <div className="text-left lg:w-1/2" data-aos="fade-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
          <h3 className="text-xl font-semibold text-gray-800">
            Sober Curious? Here's a Dietitian's Guide to Doing Dry January Right
          </h3>
          <p className="mt-4 text-gray-600">
            Are you sober curious? It's a trend that has people rethinking
            their relationship with alcohol. Get a dietitian's guide to Dry
            January.
          </p>
          <a
            href="#"
            className="inline-block mt-4 font-semibold text-indigo-600 hover:underline"
          >
            Read more &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
