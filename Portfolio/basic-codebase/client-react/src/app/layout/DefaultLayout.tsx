
import { Outlet } from 'react-router-dom';
import { Header, Footer } from "../../shared";

const DefaultLayout = () => {
  return (
    <>
    <Header/>
    <h3>Default Layout</h3>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default DefaultLayout;
