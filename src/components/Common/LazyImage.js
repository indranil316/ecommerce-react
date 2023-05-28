import React from 'react';

const LazyImage = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="object-contain w-full h-full"
      loading="lazy"
    />
  );
};

export default LazyImage;
