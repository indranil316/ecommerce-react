import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function ProductDetails({ productId, name, badge, ratings, price, variant_groups, addToCart, image }) {
  const renderVariantOptions = (name, options)=>{
    if(name === "Size"){
      return options.map(option=>(
        <button
          key={option.id}
          className="w-10 h-10 border rounded-lg text-center mr-2 font-medium text-gray-600 hover:bg-gray-100"
          aria-label={`Select size: ${option.name}`}
        >
          {option.name}
        </button>
      ))
    }
    else if( name === "Color"){
      return options.map(option=>{
        return (
          <div
            key={option.id}
            style={{ backgroundColor: option.name }}
            className="w-8 h-8 rounded-full mr-2 cursor-pointer"
            aria-label={`Color: ${option.name}`}
          />
        )
      })      
    }
    return null;
  }
  return (
    <div className="w-full md:w-2/5 mx-auto md:mx-0 md:ml-5">
      <h1 className="text-xl font-medium">{name}</h1>
      <div className={`inline-block px-2 py-1 rounded-md text-white font-medium ml-2 ${badge.color}`}>
        {badge.text}
      </div>
      <div className="flex items-center my-2">
        <div className="text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <FontAwesomeIcon key={i} icon={faStar} className={`${i < ratings ? 'fill-current' : 'stroke-current'} ml-1`} />
          ))}
        </div>
        <span className="text-gray-600 ml-2">(20)</span>
      </div>
      <div className="font-medium text-2xl mb-4">${price}</div>
      {
        variant_groups.map(variantGroup=>(
          <div className="mb-4" key={variantGroup.id}>
            <div className="text-gray-600 mb-2">{variantGroup.name}</div>
            <div className="flex">
              {renderVariantOptions(variantGroup.name, variantGroup.options)}
            </div>
          </div>
        ))
      }
      <button onClick={() => {addToCart({ productId, name, badge, ratings, price, variant_groups, addToCart, image})}} className="w-full bg-gray-900 text-white rounded-md py-2 hover:bg-gray-800">
        Add to Bag
      </button>
    </div>
  );
}
