import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const CustomSlider = ( { items }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(items.length, 4),
    slidesToScroll: Math.min(items.length, 4),
    autoplay:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(items.length, 3),
          slidesToScroll: Math.min(items.length, 3),
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: Math.min(items.length, 2),
          slidesToScroll: Math.min(items.length, 2),
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: Math.min(items.length, 1),
          slidesToScroll: Math.min(items.length, 1),
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="max-w-4xl mx-auto">
      {items.map((item) => (
        <div key={item.id} className="px-4">
          <div className="border rounded-lg overflow-hidden max-w-[480px]">
            <img
              src={item.image.url}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">{item.price['formatted_with_symbol']}</h3>
              <p className="text-gray-500">${item.price['formatted_with_symbol']}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default CustomSlider;
