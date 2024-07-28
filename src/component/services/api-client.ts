import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "35aa67b93d0f42bcb86f842b5ffac53f",
  },
});
