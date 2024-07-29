import UseData from "./useData";

export interface GenreProps {
  id: number;
  name: string;
}

export const UseGenre = () => UseData<GenreProps>("/genres");
