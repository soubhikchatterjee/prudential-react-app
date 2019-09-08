import axios from "axios";

const KEY = "KEYjPuDUJuMhZ5BpxPvSmg";

const instance = uri =>
  axios.create({
    // api is being routed through a proxy since CORS is not suported by the vendor.
    baseURL: `https://cors-anywhere.herokuapp.com/https://www.goodreads.com/${uri}&key=${KEY}`,
    headers: { "x-requested-with": "http://localhost:3000" }
  });

export default instance;
