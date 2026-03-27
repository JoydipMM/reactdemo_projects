import React from 'react';
import { useNavigate } from 'react-router-dom';
import { mockCartItems } from '../data/mockCart';

const CartDrawer = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const subtotal = mockCartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <>
      {/* Dimmed Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-[90] transition-opacity backdrop-blur-[2px]"
          onClick={onClose}
        ></div>
      )}

      {/* Sliding Drawer Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-full max-w-[420px] bg-white z-[100] shadow-2xl transform transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header section */}
        <div className="px-6 py-5 md:py-8 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-2xl md:text-[28px] font-bold text-[#1E1E1E] tracking-tight">Your Cart</h2>
          <button 
            onClick={onClose}
            className="p-2.5 bg-gray-50 rounded-full hover:bg-gray-100 hover:text-red-500 transition-colors text-gray-500 shadow-sm"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        {/* Scrollable Cart Items */}
        <div className="flex-grow overflow-y-auto p-6 space-y-8">
          {mockCartItems.map((item) => (
            <div key={item.id} className="flex gap-5 group">
              
              {/* Image Frame */}
              <div className="w-[90px] h-[90px] md:w-[110px] md:h-[110px] bg-[#FAFAFA] rounded-2xl overflow-hidden shrink-0 flex items-center justify-center p-3 border border-gray-50 group-hover:border-gray-100 transition-colors relative">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover mix-blend-multiply drop-shadow-sm" />
              </div>
              
              {/* Item Details */}
              <div className="flex-grow flex flex-col justify-between py-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-[#1E1E1E] text-[15px] md:text-[17px] leading-tight pr-4">{item.title}</h3>
                  <button className="text-gray-300 hover:text-red-500 transition-colors p-1" aria-label="Remove item">
                    <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                  </button>
                </div>
                
                {/* Controls & Price */}
                <div className="flex justify-between items-end mt-2">
                  <div className="flex items-center border border-gray-200 rounded-lg bg-white shadow-sm overflow-hidden text-sm w-[90px] h-[36px]">
                    <button className="flex-1 h-full text-gray-500 hover:bg-gray-50 hover:text-[#1E1E1E] transition-colors">-</button>
                    <span className="flex-1 h-full flex items-center justify-center font-bold text-[#1E1E1E] border-x border-gray-100">{item.quantity}</span>
                    <button className="flex-1 h-full text-gray-500 hover:bg-gray-50 hover:text-[#1E1E1E] transition-colors">+</button>
                  </div>
                  <span className="font-bold text-[#1E1E1E] text-[18px]"><span className="text-[#898989] text-[14px] font-medium mr-1">$</span>{item.price * item.quantity}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sticky Footer */}
        <div className="border-t border-gray-100 p-6 md:p-8 bg-gray-50/30">
          <div className="flex justify-between items-center mb-2 text-[#1E1E1E]">
            <span className="font-medium text-[16px]">Subtotal</span>
            <span className="text-[24px] font-bold"><span className="text-[#898989] text-[16px] font-medium mr-1">$</span>{subtotal}</span>
          </div>
          <p className="text-[13px] text-gray-500 mb-6 font-light">Taxes and shipping calculated at checkout.</p>
          <button 
             onClick={() => {
                onClose();
                navigate('/checkout');
             }}
             className="w-full py-4 text-[16px] bg-[#1E1E1E] hover:bg-[#E58411] text-white font-bold rounded-2xl transition-all shadow-[0_8px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_25px_rgba(229,132,17,0.3)] hover:-translate-y-0.5"
          >
            Checkout Now
          </button>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
