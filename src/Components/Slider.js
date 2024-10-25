import React, { useEffect, useState } from "react";
import axios from "axios";
import instance from "../Axios";
import { Request } from "../Request";
import "./Slider.css";
import { Link } from "react-router-dom";

export default function Slider({ source, title }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const base_url = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    setLoading(true);
    instance
      .get(source)
      .then(function (response) {
        console.log(title,response.data);
        setData(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="Slider_container">
      <h2>{title}</h2>
      <div className="slider_container_movies">
        {data.map((movie) => (
          <Link className="slider_container_movies_link" to={`${movie.title|| movie.original_title|| movie.name||movie.original_name}`}><div className="slider_container_movies_single">
          <img
            className="slider_container_movies_img"
            src={`${base_url}${movie.backdrop_path}`}
          />
          <span>{movie.title || movie.original_title|| movie.name||movie.original_name }</span>
        </div></Link>
          
        ))}
      </div>
    </div>
  );
}
