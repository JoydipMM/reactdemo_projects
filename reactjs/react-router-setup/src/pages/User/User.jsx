import React from 'react'

const User = () => {

  const [data, setData] = React.useState([]);

  // data will fetch when user click on user menu
  React.useEffect(()=>{
    fetch("https://api.github.com/users/joydipsarkar")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setData(data);
    })
  }, [])

  return (
    <>
      <h2>User Page</h2>
      <h4>Data: {data.id}</h4>
    </>
  )
}

export default User
