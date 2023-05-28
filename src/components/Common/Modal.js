import React from 'react';

function Modal({ onClose, children }) {
  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-[rgba(0,0,0,0.6)]"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-lg p-6">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
