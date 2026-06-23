import { useEffect, useState } from 'react'
import { client } from '@/shared/api/client'

function App() {

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
  }, []);

  return (
    <>
      <h1>App component</h1>

      {data.length >0 && data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </>
  )
}

export default App
