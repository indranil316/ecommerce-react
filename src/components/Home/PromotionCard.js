import React from 'react';

const PromotionCard = ({ icon, title, description, link }) => {
  return (
    <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-around">
      <div className="flex items-center justify-center bg-black text-white rounded-full w-12 h-12 mb-4">
        {icon}
      </div>
      <h3 className="text-gray-800 text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-800 mb-4 text-center">{description}</p>
      <a
        href={link}
        className="bg-black text-white hover:bg-blue-400 mt-2 px-4 py-2 rounded-lg inline-block"
      >
        Learn More
      </a>
    </div>
  );
};

export default PromotionCard;
