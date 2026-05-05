import React, { useEffect } from 'react'
import HomeMoviesBanner from '../features/movies/components/HomeMoviesBanner'
import { useSelector } from 'react-redux';
import Login from './Login';

const Home = () => {

  const isInLoginPage = useSelector((store) => store.setting?.gotologin);

  return (
    <>
    {!isInLoginPage && <>
      <HomeMoviesBanner />
      <section className='home_body_section'>
        <div className='common_container'>
          
        </div>
      </section>

    </>}
    {isInLoginPage && <Login className={`popover_login ${isInLoginPage ? 'isVisible' : ''}`}/>}
    </>
  )
}

export default Home

