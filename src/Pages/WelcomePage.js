import React, { useEffect, useState } from "react";
import instance from "../Axios";
import { Request } from "../Request";
import { Link } from "react-router-dom";
import "./WelcomePage.css";

export default function WelcomePage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const slider = ["", "", "", "", "", "", ""];
  const [dashboardLength, setDashboardLength] = useState(0);
  const base_url = "https://image.tmdb.org/t/p/original/";
  console.log(slider);
  useEffect(() => {
    setLoading(true);
    instance
      .get(Request.Fetch_Trending)
      .then(function (response) {
        console.log(response.data);
        setData(response.data.results.splice(0, 16));
      })
      .catch(function (error) {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
    var loop = 0;
    const interval = setInterval(() => {
      if (loop < 6) {
        loop += 1;
        setDashboardLength(loop);
        console.log("if");
      } else if (loop >= 6) {
        loop = 0;
        setDashboardLength(loop);
        console.log("else");
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="dashboard_container">
      {loading ? (
        <h3>...Loading</h3>
      ) : (
        <>
          {data?.length > 0 && (
            <div className="dashboard_container_movies">
              <Link
                className="dashboard_container_movies_link"
                to={`${data[dashboardLength]?.title||data[dashboardLength]?.original_title|| data[dashboardLength]?.name||data[dashboardLength]?.original_name}`}
              >
                <div className="dashboard_container_movies_single">
                  <img
                    className="dashboard_container_movies_img"
                    src={`${base_url}${data[dashboardLength]?.backdrop_path}`}
                  />
                  <span className="dashboard_container_movies_title">{`${data[dashboardLength]?.title||data[dashboardLength]?.original_title|| data[dashboardLength]?.name||data[dashboardLength]?.original_name}`}</span>
                </div>
              </Link>
              <div className="dashboard_container_movies_slider_container">
                {slider.map((value, index) => (
                  <div
                   
                    className={`dashboard_container_movies_slider ${
                      index === dashboardLength ? "active" : null
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
