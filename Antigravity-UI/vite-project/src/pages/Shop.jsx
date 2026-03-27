import React from 'react';
import ShopBanner from '../components/ShopBanner';
import ShopProducts from '../components/ShopProducts';

const Shop = () => {
  return (
    <main className="flex-grow w-full">
      <ShopBanner />
      <ShopProducts />
    </main>
  );
};

export default Shop;
