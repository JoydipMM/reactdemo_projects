import { useState } from "react";
import axios from "axios";

// import useDispatch hook
import { useDispatch } from "react-redux";

// import action creator
import {
  updateLoader,
  updateError,
  updateData,
} from "../store/actions/movieList";

function useNetwork() {
  // const [isLoading, setIsLoading] = useState(true);
  // const [data, setData] = useState([]);
  // const [error, setError] = useState(null);

  // we call dispatch here
  const dispatch = useDispatch();

  function fetch() {
    /*
    comment this out    
    setIsLoading(true);
    setError(null);
    */
    // updated code
    dispatch(updateLoader(true));
    dispatch(updateError(null));
    dispatch(updateData([]));

    // this setTimeout is a fake network request, we directly get the data here
    setTimeout(() => {
      axios
        .get("/src/network/moviesData.json")
        .then((res) => {
          //setData(res.data); // comment this out
          dispatch(updateData(res.data));
        })
        .catch((error) => {
          dispatch(updateError(error));
        })
        .finally(() =>
          /*
        comment this out
        setIsLoading(false)
        */
          // updated code
          dispatch(updateLoader(false))
        );
    }, 4000);
  }

  return { fetch };
}

export default useNetwork;
