import axios from "axios";

export const useTours = async () => {
  try {
    const fetchData = await axios.get("http://localhost:3000/api/tour");
    const data = fetchData.data.tours;
    //console.log(data);

    return {
      data,
      isLoading: false,
      error: null,
    };
  } catch (error: any) {
    console.error("Error fetching tours:", error);

    return {
      data: null,
      isLoading: false,
      error: error?.message || "Something went wrong",
    };
  }
};

export const singleTour = async (id:string) => {
  try {
    const fetchData = await axios.get(`http://localhost:3000/api/tour?id=${id}`);
    const data = fetchData.data.tour;
    console.log(data);

    return {
      data,
      isLoading: false,
      error: null,
    };
  } catch (error: any) {
    console.error("Error fetching tours:", error);

    return {
      data: null,
      isLoading: false,
      error: error?.message || "Something went wrong",
    };
  }
};