import React from 'react';
import { Modal } from '../Common';
import { Link } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';

function MiniCartModal({ onClose }) {
  // Dummy data for the cart items
  const cartItems = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 15 },
  ];

  // Calculate the total price of all items in the cart
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  const handleDeleteItem = () => {

  }
  return (
    <Modal onClose={onClose}>
      <div className="bg-white rounded-lg p-6 w-96">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">My Bag ({cartItems.length} items)</h2>
          <p className="text-lg font-bold">${totalPrice.toFixed(2)}</p>
        </div>
        <div className="divide-y divide-gray-200">
          {cartItems.map((item) => (
            <div key={item.id} className="py-2 flex items-center">
              <img src="https://picsum.photos/200/300" alt={item.name} className="w-12 h-12 rounded-full mr-4" />
              <div>
                <p className="text-lg font-bold">{item.name}</p>
                <p className="text-gray-500">${item.price.toFixed(2)}</p>
              </div>
              <button
                className="ml-auto text-red-500 hover:text-red-700"
                onClick={() => handleDeleteItem(item.id)}
              >
                <MdDelete size={20} />
              </button>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-between">
          <button className="bg-black hover:bg-black-700 text-white font-bold py-2 px-4 rounded">
            Checkout
          </button>
          <Link
            to="/cart"
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded"
          >
            View Shopping Bag
          </Link>
        </div>
      </div>
    </Modal>
  );
  
}

export default MiniCartModal;
