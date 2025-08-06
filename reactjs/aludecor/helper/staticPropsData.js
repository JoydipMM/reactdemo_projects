export async function getStaticPropsData(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    return {
      props: { data },
      revalidate: 60 // Revalidate every 60 seconds (ISR)
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: { data: null }
    };
  }
}
