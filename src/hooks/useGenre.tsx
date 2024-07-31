import UseData from "./useData";

export interface GenreProps {
  id: number;
  name: string;
  image_background: string;
}

export const UseGenre = () => UseData<GenreProps>("/genres");
