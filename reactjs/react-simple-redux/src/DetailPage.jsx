import React from 'react';
import { useParams } from 'react-router-dom'; // we will use useParams hook from react-router-dom to get the route parameters from the url

const DetailPage = () => {
    const { pageid } = useParams(); // useParams returns an object of key/value pairs of the dynamic params from the current URL. Here we destructure id from the returned object
  return (
    <div>
      Detail page id is {pageid}
      {/* get the id from the url */}
    </div>
  )
}

export default DetailPage
