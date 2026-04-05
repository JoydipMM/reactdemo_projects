import { useQuery } from '@tanstack/react-query';
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

const ProductsPage = () => {

    const fetchData = async () => {
       const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        return data.products;
    }

    const { isLoading, error, data: products } = useQuery({
        /*
        syntax:
        queryKey: [name of the data], // this name is a random name, we camn use any name relevant to the data, this is a array
        queryFn: async () => {
            fetch data
        },
        staleTime: milliseconds
        */
        queryKey: ['products'],
        // we can use like this
        /*queryFn: async () => {
            const response = await fetch("https://dummyjson.com/products");
            const data = await response.json();
            return data.products;
        }*/
       // or like this
        queryFn: fetchData,
        //staleTime: 10000 // The time in milliseconds after data is considered stale. If set to Infinity, the data will never be considered stale. If set to a function, the function will be executed with the query to compute a staleTime. Defaults to 0.
    })


    // const [products, setProducts] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState(null);

    // const fetchData = async () => {
        
    //     try {
    //         setIsLoading(true);
    //         setError(null);
    //         const response = await fetch("https://dummyjson.com/products");
    //         const data = await response.json();
    //         setProducts(data.products);
    //         //console.log(data.products);
    //         setIsLoading(false);
    //     } catch (error) {
    //         setError(error.message);
    //         setIsLoading(false);
    //     }
    // }

    // useEffect(()=>{
    //     fetchData();
    // },[])

    if(isLoading){
        return <h3 className='w-screen h-screen fixed top-0 left-0 bg-amber-100 z-99 text-3xl font-bold flex justify-center items-center'>Loading...</h3>
    }
    if(error){
        return <h3 className='w-screen h-screen fixed top-0 left-0 bg-amber-100 z-99 text-3xl font-bold flex justify-center items-center'>{error.message}</h3>
    }


  return (
    <>
     <h1 className="text-3xl font-bold">Product Page</h1>

     <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
     {products?.map((product) => (
        <div key={product.id} className="group relative">
            <img
            alt={product.title}
            src={product.thumbnail}
            className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
            />
            <div className="mt-4 flex justify-between">
            <div>
                <h3 className="text-sm text-gray-700 relative z-40">
                <Link to={`/products/${product.id}`}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.title}
                </Link>
                </h3>
                {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
            </div>
            <p className="text-sm font-medium text-gray-900">{product.price}</p>
            </div>
        </div>
        ))}
    </div>
    </>
  )
}

export default ProductsPage
