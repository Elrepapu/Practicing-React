import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cards from "./Cards";
import CardSkele from "./CardSkele";
import "./skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";

const Skele = () => {
  const [res, setRes] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const url = "https://rickandmortyapi.com/api/character";
  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setRes(responseJSON);
    setIsLoading(false);
    console.log(responseJSON);
  };
  useEffect(() => {
    setTimeout(() => {
      fetchApi();
    }, 1000);
  }, []);
  return (
    <div className="container">
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <Link to="/" className="link">
          Login
        </Link>{" "}
        <h1>The Rick and Morty API </h1>
        <section>
          {isLoading ? (
            <CardSkele />
          ) : (
            res.results.map((character, index) => (
              <Cards character={character} key={index} />
            ))
          )}
        </section>
      </SkeletonTheme>
    </div>
  );
};

export default Skele;
