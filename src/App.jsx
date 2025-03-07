import { use, useEffect, useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import AboutPage from "./aboutPage";

function App() {
  const storedData = JSON.parse(localStorage.getItem("currentCatData")) || null;
  const [data, setData] = useState([]);
  // const [currentCat, setCurrentCat] = useState("");
  const [currentImage, setCurrentImage] = useState(storedData?.url || null);
  const [prevData, setPrevData] = useState([]);
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

        setData(catData);
        setCurrentImage(catData.url);

        localStorage.setItem("currentCatData", JSON.stringify(catData));

        // if (catData.breeds && catData.breeds[0]) {
        //   setData(catData);
        //   setCurrentCat(catData.id);
        //   // setCurrentImage(catData.url);
        //   console.log("data", catData);
        //   localStorage.setItem("currentCatData", catData);
        //   // localStorage.setItem("currentCatId", catData.id);
        //   // localStorage.setItem("currentCatImage", catData.url);
        // } else {
        //   fetchData(api_key);
        // }
      }
    } catch (error) {
      console.error("network errror: ", error);
      return ["", "", `server down: ${error}`];
    }
  };

  useEffect(() => {
    if (!storedData) {
      fetchData(api_key);
    }
  }, [currentImage]);

  const findNextCat = async () => {
    setPrevData(storedData);
    fetchData(api_key);
  };

  return (
    <div className="mainArea">
      {/* <button onClick={fetchData}>test</button> */}
      {currentImage && (
        <img src={currentImage} alt="cat-image" height="500px" />
      )}
      <div className="navBar">
        {storedData ? (
          <button
            onClick={() => navigate(`/breeds/${storedData.breeds[0].id}`)}
          >
            learn more about {storedData.breeds[0]?.name} cats
          </button>
        ) : (
          <p>loading</p>
        )}
        {/* <button onClick={findNextCat}>--></button> */}
        <div onClick={findNextCat} className="navArrow">
          <img
            src="/public/right-arrow.png"
            alt="right-arrow"
            style={{ width: "20px" }}
          />
        </div>
      </div>

      <p>{data.image}</p>
    </div>
  );
}

export default App;
