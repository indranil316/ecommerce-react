import React from 'react';
import 'tailwindcss/tailwind.css';

const CartPage = () => {
  const cartItems = [
    // Cart items array
  ];

  const handleDeleteItem = (itemId) => {
    // Logic to remove item from cart
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
                <div key={item.id} className="flex items-center mb-4">
                  <div className="flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-24 h-32 object-cover" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold">{item.name}</h3>
                    <p className="text-gray-500">${item.price.toFixed(2)}</p>
                    <p className="text-gray-500">Color: {item.color}</p>
                    <p className="text-gray-500">Promotion: {item.promotion}</p>
                  </div>
                  <button
                    onClick={() => handleDeleteItem(item.id)}
                    className="ml-auto text-gray-500 hover:text-red-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 2a8 8 0 100 16 8 8 0 000-16zM4 10a6 6 0 1112 0 6 6 0 01-12 0z"
                        clipRule="evenodd"
                      />
                    </svg>
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
            {/* Rest of the summary details */}
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

