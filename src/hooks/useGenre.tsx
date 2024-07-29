import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface GenreProps {
  id: number;
  name: string;
}

interface FetchGenreResonse {
  count: number;
  results: GenreProps[];
}
const UseGenre = () => {
  const [genre, setGenre] = useState<GenreProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get<FetchGenreResonse>("/genres")
      .then((res) => {
        setGenre(res.data.results), setIsLoading(false);
      })
      .catch((error) => console.log(error.message));
  }, []);
  return { genre, isLoading };
};

export default UseGenre;
