import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import React from "react";

const AboutPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const api_key = import.meta.env.VITE_API_KEY;
  const [catBreed, setCatBreed] = useState("");
  const [pageData, setPageData] = useState(null);

  const fetchData = async (api_key, id) => {
    const requestOptions = {
      method: "GET",
      headers: { "x-api-key": api_key },
    };

    try {
      const response = await fetch(
        `https://api.thecatapi.com/v1/images/search?breed_ids=${id}`,
        requestOptions
      );

      if (response.ok) {
        const result = await response.json();
        console.log("response was successful");

        // const catInfo = result[0];
        const breed = result[0].breeds[0];
        console.log(breed);

        setPageData({
          description: breed.description || "no description available",
          name: breed.name || "unknown",
          temperament: breed.temperament || null,
          url: breed.vetstreet_url || null,
        });
      }
    } catch (error) {
      console.error("network errror: ", error);
      return ["", "", `server down: ${error}`];
    }
  };

  useEffect(() => {
    fetchData(api_key, id);
  }, [id]);

  if (!pageData) {
    return <p>loading</p>;
  }

  return (
    <div className="aboutPage">
      <div className="aboutHeader">
        <img
          src="/public/left-arrow.png"
          alt="left-arrow"
          style={{ width: "20px" }}
          className="aboutBackArrow"
          onClick={() => navigate(-1)}
        />

        <h2>{pageData.name}</h2>
      </div>

      <p>{pageData.description}</p>
      <p>{pageData.temperament}</p>
      <a href={pageData.url} target="blank">
        learn more here
      </a>
    </div>
  );
};

export default AboutPage;
