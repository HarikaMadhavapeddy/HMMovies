import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../Firebase/Firebase";

export default function RootPage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);
  return (
    <div>
      {loading ? (
        <h1>...Loading</h1>
      ) : (
        <>
          <ToastContainer />
          <NavBar user={user}/>
          <Outlet />
        </>
      )}
    </div>
  );
}
