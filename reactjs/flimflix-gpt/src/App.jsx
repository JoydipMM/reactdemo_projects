import { createBrowserRouter, Outlet } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Error from './components/Error';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <>
    <Header/>
    <br/>
    App
    <br/>
    <Outlet/>
    </>
  );
}


export const appRouter = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/about',
        element: <About/>
      }
    ], errorElement: <Error/>
  },
  
]);

export default App;
