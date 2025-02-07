import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Community() {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);
    const videos = [
        { thumbnail: "https://blog.myfitnesspal.com/wp-content/uploads/sb-instagram-feed-images/449869752_1190033192188698_9219607026006752834_nfull.jpg" },
        { thumbnail: "https://blog.myfitnesspal.com/wp-content/uploads/sb-instagram-feed-images/449798394_7686257058095191_6393819362286198216_nfull.jpg" },
        { thumbnail: "https://blog.myfitnesspal.com/wp-content/uploads/sb-instagram-feed-images/449767478_1164111331501625_5379550121418456729_nfull.jpg" },
        { thumbnail: "https://blog.myfitnesspal.com/wp-content/uploads/sb-instagram-feed-images/449650656_1203890447452702_6020527130641490401_nfull.jpg" },
        { thumbnail: "https://blog.myfitnesspal.com/wp-content/uploads/sb-instagram-feed-images/449208276_1843551756155477_3021934300159537859_nfull.jpg" },
        { thumbnail: "https://blog.myfitnesspal.com/wp-content/uploads/sb-instagram-feed-images/449207884_331963179955199_6725560085871298996_nfull.jpg" },
        { thumbnail: "https://blog.myfitnesspal.com/wp-content/uploads/sb-instagram-feed-images/448939342_1014600903517182_5596416624045929841_nfull.jpg" },
        { thumbnail: "https://blog.myfitnesspal.com/wp-content/uploads/sb-instagram-feed-images/448735863_873638121473016_7165300213166649974_nfull.jpg" },
        // Add more videos here...
      ];
    
      return (
        <section className="container px-4 mx-auto my-8">
          <h2 className="mb-6 text-2xl font-semibold text-center">
            Social media content that's good for you
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {videos.map((video, index) => (
              <div key={index} className="relative" data-aos="fade-right">
                <img
                  src={video.thumbnail}
                  alt={`Video ${index + 1}`}
                  className="object-cover w-full h-56 rounded"
                />
                <button className="absolute inset-0 flex items-center justify-center text-xl font-bold text-white bg-black bg-opacity-30">
                  ▶
                </button>
              </div>
            ))}
          </div>
        </section>
      );
}
