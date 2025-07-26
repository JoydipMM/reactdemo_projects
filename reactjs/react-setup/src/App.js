import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Routes/AppRoutes';
function App() {
  return (
    <>  
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
    {/* src/<br/>
    ├── assets/<br/>
    │   ├── images/<br/>
    │   │   ├── logo.png<br/>
    │   │   └── banner/<br/>
    │   │       └── home-banner.jpg<br/>
    │   │<br/>
    │   ├── icons/<br/>
    │   │   ├── facebook.svg<br/>
    │   │   └── twitter.svg<br/>
    │   │<br/>
    │   ├── fonts/<br/>
    │   │   ├── Roboto-Regular.ttf<br/>
    │   │   └── Roboto-Bold.ttf<br/>
    │   │<br/>
    │   ├── styles/<br/>
    │   │   ├── variables.css     // CSS variables<br/>
    │   │   └── global.css        // global styles<br/>
    │   │<br/>
    │   └── svgs/<br/>
    │       ├── WaveTop.svg<br/>
    │       └── ArrowRight.svg<br/>
    │<br/>
    ├── routes/<br/>
    │   └── AppRoutes.jsx        -- Central route config<br/>
    │<br/>
    ├── pages/<br/>
    │   ├── Home.jsx<br/>
    │   ├── About.jsx<br/>
    │   ├── Contact.jsx<br/>
    │   └── NotFound.jsx<br/>
    │<br/>
    ├── layout/<br/>
    │   └── MainLayout.jsx       -- Reusable layout<br/>
    │<br/>
    ├── App.js<br/>
    └── index.js<br/> */}
    </>
  );
}

export default App;
