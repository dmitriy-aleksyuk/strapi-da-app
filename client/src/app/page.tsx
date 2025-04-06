async function loader() {
  const path = "/api/home-page";
  const BASE_URL = "http://localhost:1337";
  const url = new URL(path, BASE_URL);

  try {
    const response = await fetch(url.href);

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    return data.data || {};
  } catch (error) {
    console.error("Error fetching data:", error);
    return {};
  }
}


export default async function HomeRoute() {
  const data = await loader(); 
  console.log(data); 

  if (!data.top_text) {
    return <div>Error: Missing data.top_text</div>;
  }

  return (
    <div>
      <h1>{data.top_title}</h1>
      <p>{data.top_text}</p>
    </div>
  );
}


