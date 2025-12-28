import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import useNetwork from './network/useMovieNetwork'
import { updateCart } from './store/actions/movieList'
import Cart from './Cart'

function App() {
  const { fetch } = useNetwork();

  const dispatch = useDispatch(); 

  //const movieListSelector = useSelector((state) => state); // never do this

  // we can destructure the state like this
  /*const { movies, isLoading, error } = useSelector(
    (state) => state
  );*/

  // or destructure the state like this
  const movies = useSelector((state) => state.movies);
  const error = useSelector((state) => state.error);
  const isLoading = useSelector((state) => state.isLoading);
  const cart = useSelector((state) => state.cart);
  //const cartCount = Object.keys(cart || {}).length; // old one
  let cartCount = 0;
  Object.keys(cart || {}).forEach((key) => {
    cartCount += cart[key].count;
  });
  function addToCartHandler(movie) {
    //dispatch({ type: "ADD_TO_CART", payload: movie });
    return () => {
      dispatch(updateCart(movie));
    }
  };

  //console.log(movies);
  
  useEffect(() => {
    fetch();
  }, []);

  console.log("Cart: ", cart);
  console.log("total cart count: ", cartCount);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;
  // console.log(cart);

  return (
    <>
    <div className='container'>
      <div className='col'>
        <h2>Movies </h2><b>In Cart: {cartCount}</b>
        {movies.map((movie) => (
          <p key={movie.id}>
            {movie.title}<br/>
            Price: {movie.price}
            <br/>
            <button onClick={addToCartHandler(movie)}>Add to Cart</button>
            </p>
        ))}
      </div>
      <div className='col'>
        <h2>Cart</h2>
        <Cart />
      </div>
    </div>
    </>
  );
}

export default App
