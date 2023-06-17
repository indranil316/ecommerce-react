import React, {useState, useEffect} from 'react';
import { cartId } from '../constants';
import { MdDelete } from 'react-icons/md';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [subTotal, setSubTotal] = useState(0);

  useEffect(function(){
    let items =JSON.parse(localStorage.getItem(cartId)) ?? [];
    let itemsMap = {};
    items.forEach(item=>{
      if(Object.keys(itemsMap).includes(item.productId)){
        itemsMap[item.productId].qty+=1;
        itemsMap[item.productId].price+=itemsMap[item.productId].price;
      }
      else{
        itemsMap[item.productId] = {...item,qty:1};
      }
    })
    setCartItems(Object.values(itemsMap));
  },[])

  useEffect(function(){
    if(cartItems.length!==0){
      let subTotal = [...cartItems].reduce((t,c)=>{
        t+=c.price;
        return t;
      },0);
      setSubTotal(subTotal.toFixed(2))
    }
  },[cartItems])

  useEffect(function(){
    localStorage.setItem(cartId,JSON.stringify(cartItems));
  },[cartItems]);

  const handleDeleteItem = (itemId) => {
    // Logic to remove item from cart
    setCartItems([...cartItems].filter(item=>item.productId!==itemId))
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleApplyPromoCode = () => {
    // Logic to apply promo code
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1">
          {cartItems.length > 0 ? (
            <div>
              {cartItems.map((item) => (
                <div key={item.productId} className="flex items-center mb-4">
                  <div className="flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-24 h-32 object-cover" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold">{item.name}</h3>
                    <p className="text-gray-500">${item.price.toFixed(2)}</p>
                    <p className="text-gray-500">Color: {item.color}</p>
                    <p className="text-gray-500">Promotion: {item.promotion}</p>
                    <p className="text-gray-500">Quantity: {item.qty}</p>
                  </div>
                  <button
                    onClick={() => handleDeleteItem(item.productId)}
                    className="ml-auto text-gray-500 hover:text-red-500"
                  >
                   <MdDelete size={20} />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
        <div className="flex-1 lg:ml-8 mt-8 lg:mt-0">
          <div className="border p-4 rounded-lg mb-4">
            <h3 className="text-lg font-bold mb-4">Your Summary</h3>
            <div className="flex justify-between items-center mb-2">
              <p>Promo Code</p>
              <button
                onClick={handleApplyPromoCode}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                APPLY
              </button>
            </div>
            <div className='flex justify-between items-center mb-2 mt-5'>
              <p>Sub Total : </p>
              <p> {subTotal}</p>
            </div>
            <div className='flex justify-between items-center mb-2 mt-5 border-b border-dotted border-black pb-5'>
              <p>Ground Shipping : </p>
              <p>FREE</p>
            </div>
            <div className='flex justify-between items-center mb-2 mt-5'>
              <p>Total : </p>
              <p>{subTotal}</p>
            </div>
          </div>
          <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-900 w-full">
            Checkout
          </button>
          <p className="text-center mt-4">OR CHECKOUT WITH</p>
          <hr className="my-2" />
          <div className="text-center">
            {/* Other checkout options */}
          </div>
          <div className="text-center mt-4">
            <p>OUR STYLISTS ARE HERE TO HELP</p>
            <p>Call Us at [phone number]</p>
            <p>Leave Us a Message</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

