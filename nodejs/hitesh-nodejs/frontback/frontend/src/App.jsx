import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {

  const [ jokes, setJokes] = useState([]);

  useEffect(()=>{
    //axios.get('http://localhost:4000/api/jokes')
    axios.get('/api/jokes')
    .then((response)=>{
      console.log(response.data);
      setJokes(response.data)
    })
    .catch((error)=>{
      console.log(error);
    })
  }, [])

  return (
    <>
      <h1>React Frontend</h1>
      <h2>Fetch Jokes Api data</h2>
      <p>Total jokes: {jokes.length}</p>
      <hr/>

      {jokes.map((joke, index)=>{
        return(
        <div key={joke.id}><h4>{joke.title}</h4><p>{joke.content}</p><hr/></div> )
      })}
    </>
  )
}

export default App


/*
CROS error:
1. different url
2. different port url
cross origin request

solution:
-----------------------------------------
backend solution:  
-----------------------------------------
1. make the backend api url whitelist >>>> https://www.npmjs.com/package/cors
or
2. change the api url: from "/jokes"   to "/api/jokes"


frontend solution: 
------------------------------------------
proxy setup 
[if we create using create-react-app]: https://create-react-app.dev/docs/proxying-api-requests-in-development/
[if we create using vite]: https://vite.dev/config/server-options
vite.config.js >>
export default defineConfig({
  // add bolow code
  server:{
    proxy:{
      "/api": "http://localhost:4000/" // this need to be change as per api url
    },
  },

  plugins: [react()],
})


axios.get('http://localhost:4000/api/jokes') change to
axios.get('/api/jokes')
*/