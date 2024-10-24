import axios from "axios";

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNGUzMWQ3Yjk0YWRjYzZmZWZiN2M1YjNkYzAwM2RmNCIsIm5iZiI6MTcyOTAwODE0MC4xNjc2NDEsInN1YiI6IjY3MGU4YTFiZDVmOTNhM2RhMGJjNThhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qVbOkVeJ5iYrRjRAtwkXW37zGF48_ZjLSJ1PtbyW5uo'
      }
});
export default instance;