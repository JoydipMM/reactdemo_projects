import { keepPreviousData, useQuery } from '@tanstack/react-query';
import React, {useState, useEffect, use} from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import debounce from 'lodash.debounce';

const ProductsPage = () => {

    // this limit and skip is controlled by local state
    //const [limit] = useState(4);
    //const [skip, setSkip] = useState(0);

    // problem with above limit and skip is that when we redirect from product detail page to product page, it will reset the limit and skip
    // To solve this problem, we can use useSearchParams hook instead of useState hook to keep the limit and skip value in url parameters
    const [searchParams, setSearchParams] = useSearchParams({ limit: 4, skip: 0});
    const limit = parseInt(searchParams.get("limit") || 4);
    const skip = parseInt(searchParams.get("skip") || 0);
    //Note ===> when we get the limit and skip values from url parameters that value is a string, So we need to convert it to number. Also if it is not present, then we will set the default value to 4

    const search = searchParams.get("search") || "";
    const category = searchParams.get("category") || "";

    const fetchData = async () => {

        let url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;

        if(search){
            url = `https://dummyjson.com/products/search?limit=${limit}&skip=${skip}&q=${search}`;
        }
        if(category){
            url = `https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}`;
        }
        const response = await fetch(url);
        const data = await response.json();
        return data;
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
        queryKey: ['products', limit, skip, search, category],
        // we can use like this
        /*queryFn: async () => {
            const response = await fetch("https://dummyjson.com/products");
            const data = await response.json();
            return data.products;
        }*/
       // or like this
        queryFn: fetchData,

        //staleTime: 10000 // The time in milliseconds after data is considered stale. If set to Infinity, the data will never be considered stale. If set to a function, the function will be executed with the query to compute a staleTime. Defaults to 0.
        
        // placeholderData ==> is the data that will be displayed while the query is loading, which helps to reduced the jumping issue of the UI when new data is fetched. So when new data is loading placeholderData will be displayed the current data until the new data is fetched. That helps to reduce the jumping issue of the UI.
        // keepPreviousData ==> need to import from @tanstack/react-query
        placeholderData:keepPreviousData
        // keepPreviousData: true ==> this will work in react query v3
        
    })


    const { data: categories } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const response = await fetch("https://dummyjson.com/products/categories");
            const data = await response.json();
            return data;
        }
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


    const handleMove = (movecount) => {
        /*
        Dry run: ---------
        Next button pressed
        skip = 0; movecount = 4 (limit)
        return prevskip + movecount ===> 0 + 4 = 4
        next move ===>                   4 + 4 = 8

        prev button pressed
        skip = 0; movecount = -4 (limit)
        return prevskip + movecount ===> 0 + -4 = -4

        So we need to check if movecount is in nagative, then our skip value will be invalid
        So we will use Math.max(0, skip + movecount)
        */
        // setSkip((prevskip)=>{
        //     //return prevskip + movecount;
        //     const count = Math.max(prevskip + movecount, 0);
        //     console.log(count);
        //     return count;
        // })

        setSearchParams((prevskip)=>{

            prevskip.set('skip', Math.max(skip + movecount, 0));
            return prevskip;

            //return prevskip + movecount;
            // const count = Math.max(prevskip + movecount, 0);
            // console.log(count);
            // return count;
        });
    }

    if(isLoading){
        //return <h3 className='w-screen h-screen fixed top-0 left-0 bg-amber-100 z-99 text-3xl font-bold flex justify-center items-center'>Loading...</h3>
    }
    if(error){
        return <h3 className='w-screen h-screen fixed top-0 left-0 bg-amber-100 z-99 text-3xl font-bold flex justify-center items-center'>{error.message}</h3>
    }


  return (
    <>
     <h1 className="text-3xl font-bold">Product Page</h1>
    {/* <div className="mt-6 grid grid-cols-1 gap-x-2 gap-y-2 sm:grid-cols-5 lg:grid-cols-5 xl:gap-x-8">
        {categories?.map((category, index) => (
            <p className="inline-flex items-center rounded-md bg-blue-400/10 px-2 py-1 text-xs font-medium text-blue-400 inset-ring inset-ring-blue-400/30" key={index}>{category.slug}</p>
        ))}
    </div> */}

    {/* start */}
    <div className="flex gap-4 mt-2.5">
        <input
        id="search"
        name="search"
        type="text"
        placeholder="Search..."
        autoComplete="given-name"
        className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-gary-900 outline-1 -outline-offset-1 outline-gary/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
        onChange={debounce((e) => setSearchParams((prev) => {
            if(e.target.value.length === 0){
                prev.delete('search');
                return prev;
            }
            prev.set('search', e.target.value);
            prev.set('skip', 0);
            prev.delete('category');
            return prev;
        }), 500)}
        />
        <select 
        className='block _w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-gary-900 outline-1 -outline-offset-1 outline-gary/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500'
        onChange={(e) =>{
            setSearchParams((prev)=>{
                prev.set("category", e.target.value);
                prev.set("skip", 0);
                prev.delete("search");
                return prev;
            })
        }}
        >
        {categories?.map((category, index) => (
            <option key={index}>{category.slug}</option>
        ))} 
        </select>
        {/* <button
            type="submit"
            className="block _w-full rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 cursor-pointer"
          >Search</button> */}
    </div>
    {/* ended */}

    {/* start */}
    {/* <select className='block _w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-gary-900 outline-1 -outline-offset-1 outline-gary/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500'>
       {categories?.map((category, index) => (
            <option key={index}>{category.slug}</option>
        ))} 
    </select> */}
    {/* ended */}

    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
     {products?.products?.map((product) => (
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


    <div className="flex gap-4 mt-6">
        <button
            type="button"
            className="block _w-full rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-400"
            onClick={()=>{handleMove(-limit)}}
            disabled={skip === 0}
          >Prev</button>
          <button
            type="button"
            className="block _w-full rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-400"
            onClick={()=>{handleMove(limit)}}
            disabled={skip + limit >= products?.total}
          >Next</button>
    </div>
    </>
  )
}

export default ProductsPage
