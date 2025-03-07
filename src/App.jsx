import { use, useEffect, useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import AboutPage from "./aboutPage";

function App() {
  const [data, setData] = useState([]);
  const [currentCat, setCurrentCat] = useState("");
  const [currentImage, setCurrentImage] = useState(null);
  const api_key = import.meta.env.VITE_API_KEY;
  const navigate = useNavigate();

  const fetchData = async (api_key) => {
    const requestOptions = {
      method: "GET",
      headers: { "x-api-key": api_key },
    };

    try {
      const response = await fetch(
        `https://api.thecatapi.com/v1/images/search?has_breeds=1`,
        requestOptions
      );

      if (response.ok) {
        const result = await response.json();
        console.log("response was successful");
        console.log(result);
        const catData = result[0];

        if (catData.breeds && catData.breeds[0]) {
          setData(catData);
          setCurrentCat(catData.id);
          setCurrentImage(catData.url);
          console.log("data", catData);
        } else {
          fetchData(api_key);
        }
      }
    } catch (error) {
      console.error("network errror: ", error);
      return ["", "", `server down: ${error}`];
    }
  };

  useEffect(() => {
    fetchData(api_key);
  }, []);

  const findNextCat = async () => {
    fetchData(api_key);
  };

  return (
    <>
      {/* <button onClick={fetchData}>test</button> */}
      {currentImage && (
        <img src={currentImage} alt="cat-image" height="500px" />
      )}
      <div className="navBar">
        <button className="navArrow">
          <img
            src="/public/left-arrow.png"
            alt="left-arrow"
            style={{ width: "20px" }}
          />
        </button>
        {data.breeds && data.breeds[0] ? (
          <button onClick={() => navigate(`/breeds/${data.breeds[0].id}`)}>
            learn more about {data.breeds[0]?.name} cats
          </button>
        ) : (
          <p>loading</p>
        )}
        {/* <button onClick={findNextCat}>--></button> */}
        <button onClick={findNextCat} className="navArrow">
          <img
            src="/public/right-arrow.png"
            alt="right-arrow"
            style={{ width: "20px" }}
          />
        </button>
      </div>

      <p>{data.image}</p>
    </>
  );
}

export default App;
