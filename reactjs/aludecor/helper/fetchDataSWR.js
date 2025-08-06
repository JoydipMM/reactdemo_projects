import useSWR from "swr";
//old version
// export default function fetchDataSWR(url) {
//   //console.log("url", url);
//   const fetcher = (url) => fetch(url).then((r) => r.json());
//   const { data, error } = useSWR(
//     `${process.env.NEXT_PUBLIC_IMAGE_URL}${url}`,
//     fetcher,
//     { refreshInterval: 100000 }
//   );
//   return {
//     fetchdata: data,
//     isError: error
//   };
// }
//new version
export default function fetchDataSWR(url, options = { method: "GET" }) {
  const fetcher = async (apiUrl) => {
    const config = {
      method: options.method,
      headers: { "Content-Type": "application/json" }
    };

    // Add body for POST requests
    if (options.method === "POST" && options.body) {
      config.body = JSON.stringify(options.body);
    }

    const res = await fetch(apiUrl, config);
    return res.json();
  };

  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_IMAGE_URL}${url}`,
    fetcher,
    { refreshInterval: 100000 }
  );

  return {
    fetchdata: data,
    isError: error
  };
}
