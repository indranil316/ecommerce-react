import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function ProductDetails({ name, badge, ratings, price, colors, sizes }) {
  return (
    <div className="w-2/5 ml-5">
      {/* Product name */}
      <h1 className="text-xl font-medium">{name}</h1>
      {/* Badge */}
      <div className={`inline-block px-2 py-1 rounded-md text-white font-medium ml-2 ${badge.color}`}>
        {badge.text}
      </div>
      {/* Ratings */}
      <div className="flex items-center my-2">
        <div className="text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <FontAwesomeIcon key={i} icon={faStar} className={`${i < ratings ? 'fill-current' : 'stroke-current'} ml-1`} />
          ))}
        </div>
        <span className="text-gray-600 ml-2">(20)</span>
      </div>
      {/* Price */}
      <div className="font-medium text-2xl mb-4">${price}</div>
      {/* Colors */}
      <div className="mb-4">
        <div className="text-gray-600 mb-2">Color:</div>
        <div className="flex">
          {colors.map(color => (
            <div
              key={color}
              style={{ backgroundColor: color }}
              className="w-8 h-8 rounded-full mr-2 cursor-pointer"
            />
          ))}
        </div>
      </div>
      {/* Sizes */}
      <div className="mb-4">
        <div className="text-gray-600 mb-2">Size:</div>
        <div className="flex">
          {sizes.map(size => (
            <button
              key={size}
              className="w-10 h-10 border rounded-lg text-center mr-2 font-medium text-gray-600 hover:bg-gray-100"
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      {/* Add to bag button */}
      <button className="w-full bg-gray-900 text-white rounded-md py-2 hover:bg-gray-800">
        Add to Bag
      </button>
    </div>
  );
}
