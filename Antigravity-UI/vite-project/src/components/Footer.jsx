import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#F8F9FA] pt-28 pb-10 w-full border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-[1300px]">
        
        {/* Top Grid */}
        <div className="flex flex-col lg:flex-row justify-between mb-24 gap-16 lg:gap-8">
          
          {/* Logo & Description */}
          <div className="w-full lg:w-[35%]">
            <h2 className="text-[32px] font-bold text-[#1E1E1E] mb-6 tracking-tight">Panto</h2>
            <p className="text-[#333333] opacity-80 text-[15px] font-medium leading-[1.8] max-w-[320px]">
              The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities.
            </p>
          </div>

          {/* Links Columns */}
          <div className="w-full lg:w-[60%] grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-4">
            
            {/* Services */}
            <div>
              <h3 className="text-[#E58411] text-[16px] font-medium mb-6">Services</h3>
              <ul className="flex flex-col gap-4">
                <li><a href="#" className="text-[#333333] text-[15px] font-medium hover:text-[#E58411] transition-colors">Email Marketing</a></li>
                <li><a href="#" className="text-[#333333] text-[15px] font-medium hover:text-[#E58411] transition-colors">Campaigns</a></li>
                <li><a href="#" className="text-[#333333] text-[15px] font-medium hover:text-[#E58411] transition-colors">Branding</a></li>
              </ul>
            </div>

            {/* Furniture */}
            <div>
              <h3 className="text-[#E58411] text-[16px] font-medium mb-6">Furniture</h3>
              <ul className="flex flex-col gap-4">
                <li><a href="#" className="text-[#333333] text-[15px] font-medium hover:text-[#E58411] transition-colors">Beds</a></li>
                <li><a href="#" className="text-[#333333] text-[15px] font-medium hover:text-[#E58411] transition-colors">Chair</a></li>
                <li><a href="#" className="text-[#333333] text-[15px] font-medium hover:text-[#E58411] transition-colors">All</a></li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="text-[#E58411] text-[16px] font-medium mb-6">Follow Us</h3>
              <ul className="flex flex-col gap-4">
                <li>
                  <a href="#" className="flex items-center text-[#333333] text-[15px] font-medium hover:text-[#E58411] transition-colors group">
                    <svg className="w-[18px] h-[18px] mr-4 text-[#1E1E1E] group-hover:text-[#E58411] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-[#333333] text-[15px] font-medium hover:text-[#E58411] transition-colors group">
                    <svg className="w-[18px] h-[18px] mr-4 text-[#1E1E1E] group-hover:text-[#E58411] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-[#333333] text-[15px] font-medium hover:text-[#E58411] transition-colors group">
                    <svg className="w-[18px] h-[18px] mr-4 text-[#1E1E1E] group-hover:text-[#E58411] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    Instagram
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[14px] text-[#333333] opacity-70">
          <p>Copyright © 2021</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-[#E58411] transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-[#E58411] transition-colors">Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
