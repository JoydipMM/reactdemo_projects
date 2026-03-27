import React from 'react';
import { mockCartItems } from '../data/mockCart';

const Checkout = () => {
  const subtotal = mockCartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = 15;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-[#FAFAFA] pt-28 pb-20 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Checkout Forms */}
          <div className="w-full lg:w-[55%] xl:w-[60%] order-2 lg:order-1">
            <h1 className="text-3xl font-bold text-[#1E1E1E] tracking-tight mb-8">Checkout</h1>
            
            <form className="space-y-10">
              
              {/* Contact Information */}
              <section className="bg-white p-6 md:p-8 rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100">
                <h2 className="text-xl font-bold text-[#1E1E1E] mb-6">Contact Information</h2>
                <div className="form-control w-full">
                  <label className="label text-[#898989] font-medium text-[14px]">Email address</label>
                  <input type="email" placeholder="john.doe@example.com" className="input input-bordered w-full rounded-xl focus:border-[#E58411] focus:ring-1 focus:ring-[#E58411] transition-shadow text-[#1E1E1E]" />
                </div>
              </section>

              {/* Shipping Address */}
              <section className="bg-white p-6 md:p-8 rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100">
                <h2 className="text-xl font-bold text-[#1E1E1E] mb-6">Shipping Address</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="form-control w-full">
                    <label className="label text-[#898989] font-medium text-[14px]">First name</label>
                    <input type="text" placeholder="John" className="input input-bordered w-full rounded-xl focus:border-[#E58411] focus:ring-1 focus:ring-[#E58411] text-[#1E1E1E]" />
                  </div>
                  <div className="form-control w-full">
                    <label className="label text-[#898989] font-medium text-[14px]">Last name</label>
                    <input type="text" placeholder="Doe" className="input input-bordered w-full rounded-xl focus:border-[#E58411] focus:ring-1 focus:ring-[#E58411] text-[#1E1E1E]" />
                  </div>
                  <div className="form-control w-full md:col-span-2">
                    <label className="label text-[#898989] font-medium text-[14px]">Address</label>
                    <input type="text" placeholder="123 Furniture St" className="input input-bordered w-full rounded-xl focus:border-[#E58411] focus:ring-1 focus:ring-[#E58411] text-[#1E1E1E]" />
                  </div>
                  <div className="form-control w-full">
                    <label className="label text-[#898989] font-medium text-[14px]">City</label>
                    <input type="text" placeholder="New York" className="input input-bordered w-full rounded-xl focus:border-[#E58411] focus:ring-1 focus:ring-[#E58411] text-[#1E1E1E]" />
                  </div>
                  <div className="grid grid-cols-2 gap-5">
                    <div className="form-control w-full">
                      <label className="label text-[#898989] font-medium text-[14px]">State</label>
                      <input type="text" placeholder="NY" className="input input-bordered w-full rounded-xl focus:border-[#E58411] focus:ring-1 focus:ring-[#E58411] text-[#1E1E1E]" />
                    </div>
                    <div className="form-control w-full">
                      <label className="label text-[#898989] font-medium text-[14px]">ZIP code</label>
                      <input type="text" placeholder="10001" className="input input-bordered w-full rounded-xl focus:border-[#E58411] focus:ring-1 focus:ring-[#E58411] text-[#1E1E1E]" />
                    </div>
                  </div>
                </div>
              </section>

              {/* Payment Details */}
              <section className="bg-white p-6 md:p-8 rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100">
                <h2 className="text-xl font-bold text-[#1E1E1E] mb-6">Payment Details</h2>
                <div className="space-y-5">
                  <div className="form-control w-full">
                    <label className="label text-[#898989] font-medium text-[14px]">Card number</label>
                    <input type="text" placeholder="0000 0000 0000 0000" className="input input-bordered w-full rounded-xl focus:border-[#E58411] focus:ring-1 focus:ring-[#E58411] font-mono tracking-wider text-[#1E1E1E]" />
                  </div>
                  <div className="grid grid-cols-2 gap-5">
                    <div className="form-control w-full">
                      <label className="label text-[#898989] font-medium text-[14px]">Expiration date</label>
                      <input type="text" placeholder="MM/YY" className="input input-bordered w-full rounded-xl focus:border-[#E58411] focus:ring-1 focus:ring-[#E58411] text-[#1E1E1E]" />
                    </div>
                    <div className="form-control w-full">
                      <label className="label text-[#898989] font-medium text-[14px]">CVC</label>
                      <input type="text" placeholder="123" className="input input-bordered w-full rounded-xl focus:border-[#E58411] focus:ring-1 focus:ring-[#E58411] text-[#1E1E1E]" />
                    </div>
                  </div>
                </div>
              </section>

            </form>
          </div>

          {/* Right Column: Order Summary */}
          <div className="w-full lg:w-[45%] xl:w-[40%] order-1 lg:order-2">
            <div className="bg-white p-6 md:p-8 rounded-[24px] shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-gray-100 lg:sticky lg:top-28">
              <h2 className="text-2xl font-bold text-[#1E1E1E] mb-8">Order Summary</h2>
              
              {/* Product List */}
              <div className="space-y-6 mb-8 max-h-[400px] overflow-y-auto pr-2">
                {mockCartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] bg-[#FAFAFA] rounded-2xl overflow-hidden shrink-0 flex items-center justify-center p-2 border border-gray-50">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover mix-blend-multiply drop-shadow-sm" />
                      <div className="absolute top-[-8px] right-[-8px] bg-gray-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-[12px] font-bold shadow-md z-10 border-2 border-white">
                        {item.quantity}
                      </div>
                    </div>
                    <div className="flex-grow flex flex-col justify-center">
                      <h3 className="font-bold text-[#1E1E1E] text-[15px] md:text-[16px] leading-tight mb-1">{item.title}</h3>
                      <p className="text-gray-500 text-[14px]">Qty: {item.quantity}</p>
                      <span className="font-bold text-[#E58411] text-[16px] lg:text-[18px] mt-1"><span className="text-[#898989] text-[13px] mr-1">$</span>{item.price * item.quantity}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cost Calculations */}
              <div className="border-t border-gray-100 pt-6 space-y-4">
                <div className="flex justify-between items-center text-[#555555] text-[15px]">
                  <span>Subtotal</span>
                  <span className="font-medium text-[#1E1E1E]">${subtotal}</span>
                </div>
                <div className="flex justify-between items-center text-[#555555] text-[15px]">
                  <span>Shipping estimate</span>
                  <span className="font-medium text-[#1E1E1E]">${shipping}</span>
                </div>
                <div className="flex justify-between items-center text-[#555555] text-[15px]">
                  <span>Tax estimate</span>
                  <span className="font-medium text-[#1E1E1E]">$0</span>
                </div>
                
                <div className="border-t border-gray-100 pt-4 mt-4 flex justify-between items-center">
                  <span className="text-[18px] font-bold text-[#1E1E1E]">Total</span>
                  <span className="text-[28px] font-bold text-[#1E1E1E]"><span className="text-[16px] text-gray-500 font-medium mr-1 uppercase">USD</span>${total}</span>
                </div>
              </div>

              {/* Primary CTA */}
              <button 
                className="w-full py-4 mt-10 text-[16px] bg-[#1E1E1E] hover:bg-[#E58411] text-white font-bold rounded-2xl transition-all shadow-[0_8px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_25px_rgba(229,132,17,0.3)] hover:-translate-y-0.5"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Payment integration pending! Order accepted.');
                }}
              >
                Pay Now
              </button>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Checkout;
