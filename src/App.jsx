import { use, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [currentCat, setCurrentCat] = useState("");
  const [currentImage, setCurrentImage] = useState(null);
  const api_key = import.meta.env.VITE_API_KEY;

  const fetchData = async (api_key) => {
    const requestOptions = {
      method: "GET",
      headers: { "x-api-key": api_key },
    };

    try {
      const response = await fetch(
        `https://api.thecatapi.com/v1/images/search?`,
        requestOptions
      );

      if (response.ok) {
        const result = await response.json();
        console.log("response was successful");

        const catData = result[0];
        setData(catData);

        setCurrentCat(catData.id);
        setCurrentImage(catData.url);
        console.log("data", catData);
      }
    } catch (error) {
      console.error("network errror: ", error);
      return ["", "", `server down: ${error}`];
    }
  };

  useEffect(() => {
    fetchData(api_key);
  }, []);

  return (
    <>
      {/* <button onClick={fetchData}>test</button> */}
      {currentImage && (
        <img src={currentImage} alt="cat-image" height="500px" />
      )}
      <div>
        <p>funny note here</p>
      </div>
      {data.breeds && data.breeds[0] ? (
        <button>learn more about {data.breeds[0]?.name} cats</button>
      ) : (
        <p>unable to identify cat breed</p>
      )}

      <p>{data.image}</p>
    </>
  );
}

export default App;
