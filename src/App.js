import logo from "./logo.svg";
import "./App.css";
import HomePage from "./Pages/HomePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Movies from "./Pages/Movies";
import RootPage from "./Pages/RootPage";
import WelcomePage from "./Pages/WelcomePage";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children:[
      {path:'/',element:<WelcomePage/>},
      {path:'/dashboard',element:<HomePage/>},
      {path:'/signup', element:<SignUp/>},
      {path:'/login',element:<Login/>},
      {path: "dashboard/:movies", element: <Movies />}]
  },
]);
function App() {
  return <RouterProvider router={router}/>
}

export default App;
