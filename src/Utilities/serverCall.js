import axios from "axios";

export const serverCall = axios.create({
    baseUrl: "http://localhost:5555/",
});