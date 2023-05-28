import React from 'react';
import PromotionCard from './PromotionCard';
import { Icon } from 'react-icons-kit';
import { shoppingCart } from 'react-icons-kit/fa/shoppingCart';
import { creditCard } from 'react-icons-kit/fa/creditCard';
import { truck } from 'react-icons-kit/fa/truck';
import { checkCircle } from 'react-icons-kit/fa/checkCircle';

const HomeContent3 = () => {
  const objects = [
    {
      icon: <Icon icon={shoppingCart} size={24} />,
      title: 'Shop Now',
      description: 'Explore our wide range of products and shop with confidence.',
      link: '/shop',
    },
    {
      icon: <Icon icon={creditCard} size={24} />,
      title: 'Secure Payment',
      description: 'We ensure your transactions are safe and secure.',
      link: '/payment',
    },
    {
      icon: <Icon icon={truck} size={24} />,
      title: 'Fast Delivery',
      description: 'Get your orders delivered to your doorstep quickly and efficiently.',
      link: '/delivery',
    },
    {
      icon: <Icon icon={checkCircle} size={24} />,
      title: 'Satisfaction Guaranteed',
      description: 'We strive to provide the best products and ensure your satisfaction.',
      link: '/guarantee',
    },
  ];

  return (
    <div className="bg-gray-100 py-4">
      <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6 md:px-12">
        {objects.map((object, index) => (
          <PromotionCard
            key={index}
            icon={object.icon}
            title={object.title}
            description={object.description}
            link={object.link}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeContent3;
