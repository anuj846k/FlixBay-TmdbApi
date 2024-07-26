import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZGI2MWQxZmYyZDVmOGQ2NWJmYzc3N2QzM2Q2M2FlYSIsIm5iZiI6MTcyMTk4NDUwNy4zMTM3MjUsInN1YiI6IjY2N2FkMzE2ZmQ3MmNjZmRjZTVhMzU0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H_DOOlXp2PcoZPr8oYRRsSpPvw7fz0HumKhsiYvZnIc",
  },
});

export default instance;
