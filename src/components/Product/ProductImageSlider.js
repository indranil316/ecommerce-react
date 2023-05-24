import React, { useState } from 'react';
import { FaChevronUp, FaChevronDown, FaHeart } from 'react-icons/fa';

const ProductImageSlider = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleUpArrowClick = () => {
    if (selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const handleDownArrowClick = () => {
    if (selectedImageIndex < images.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const handleHeartClick = () => {
    // TODO: Add wishlist functionality
  };

  return (
    <div className="flex flex-row items-center w-3/5 h-full">
      <div className="relative flex flex-col items-center justify-center w-1/5 mx-5 h-full">
        <FaChevronUp
          className={`absolute top-[-5%] left-1/2 transform -translate-x-1/2 cursor-pointer ${
            selectedImageIndex > 0 ? 'text-gray-900' : 'text-gray-400 pointer-events-none'
          }`}
          onClick={handleUpArrowClick}
        />
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product Image ${index}`}
            className={`w-full h-1/5 object-cover transition duration-300 my-2 ${
              selectedImageIndex === index ? 'opacity-100' : 'opacity-50 hover:opacity-100'
            }`}
            onClick={() => handleImageClick(index)}
          />
        ))}
        <FaChevronDown
          className={`absolute bottom-[-5%] left-1/2 transform -translate-x-1/2 cursor-pointer ${
            selectedImageIndex < images.length - 1 ? 'text-gray-900' : 'text-gray-400 pointer-events-none'
          }`}
          onClick={handleDownArrowClick}
        />
      </div>
      <div className="relative flex items-center justify-center w-4/5 h-full">
        <FaHeart
          className="absolute top-[8%] right-[8%] -mt-3 -mr-3 text-gray-400 cursor-pointer hover:text-red-500"
          onClick={handleHeartClick}
        />
        <img
          src={images[selectedImageIndex]}
          alt={`Selected Product Image`}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default ProductImageSlider;
