import { useEffect, useState } from 'react'
import { CounterShow, CounterAction } from '@/features/counter'
import { UserList } from '@/features/user'
import ThemeSwitch from '@/shared/ui/components/ThemeSwitch'
import { ProductsPage } from '@/features/products'
import { CartPage, useCart } from '@/features/cart'
import { client } from '@/shared/api/client'
// import { API_KEY } from '@/shared/api/endpoints'

function App() {

  const { cart, addToCart, removeFromCart, updateQuantity, total } = useCart();

  const [data, setData] = useState([]);

  const fetchPopularTV = async () => {
    const res = await client.axiosClient.get("/tv/popular", {
      params: {
        api_key: `${import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN}`,
      },
    });

    //console.log(res.data.results);

    return setData(res.data.results);
  };

  useEffect(() => {
    fetchPopularTV();
    console.log(data);
  }, []);

  return (
    <>
      <h1>App component</h1>

      {data.length >0 && data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}



      {/* <ProductsPage addToCart={addToCart}/>
      <CartPage cart={cart} onUpdateQuantity={updateQuantity} onRemove={removeFromCart} total={total}/>

      <ThemeSwitch/>
      <CounterShow/>
      <CounterAction/>
      <UserList /> */}
    </>
  )
}

export default App
