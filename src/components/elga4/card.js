import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const MultiCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: 'https://example.com/image1.jpg',
      title: 'Dedicated Internet 1',
      description:
        "Technology, network infrastructure and application systems are things that can't be separated again to conduct business in today's modern era",
    },
    {
      src: 'https://example.com/image2.jpg',
      title: 'Dedicated Internet 2',
      description:
        "Technology, network infrastructure and application systems are things that can't be separated again to conduct business in today's modern era",
    },
    {
      src: 'https://example.com/image3.jpg',
      title: 'Dedicated Internet 3',
      description:
        "Technology, network infrastructure and application systems are things that can't be separated again to conduct business in today's modern era",
    },
    {
      src: 'https://example.com/image4.jpg',
      title: 'Dedicated Internet 4',
      description:
        "Technology, network infrastructure and application systems are things that can't be separated again to conduct business in today's modern era",
    },
  ];

  const handleCarouselChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <Carousel
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        selectedItem={currentIndex}
        onChange={handleCarouselChange}
        className="max-w-[1300px]"
        centerMode={false}
        centerSlidePercentage={50}
        renderDotsOutside={false}
    
      >
        {images.map((image, index) => (
          <div key={index} className="mx-[50px]">
            <button className="relative w-full bg-main3 bg-cover rounded-md">
              <div className="bg-[#0E467B]/35 rounded-md">
                <div className="w-[610px] h-[521px] flex justify-center items-start relative">
                  <div className="w-[500px] h-full flex flex-col justify-center items-start space-y-[40px] ml-[100px]">
                    <h2 className="font-medium text-[45px] text-white">
                      {image.title}
                    </h2>
                    <p className="font-medium text-[25px] text-white text-justify">
                      {image.description}
                    </p>
                  </div>
                </div>
              </div>
            </button>
          </div>
        ))}
      </Carousel>

      <div className="w-auto flex justify-center bg-white rounded-full my-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`flex justify-end items-center rounded-full w-[100px] h-[20px] ${
              currentIndex === index ? 'bg-[#F7941D]' : 'bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MultiCarousel;
