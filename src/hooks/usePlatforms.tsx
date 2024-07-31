import UseData from "./useData";

interface Platforms {
  id: number;
  name: string;
  slug: string;
}

export const usePlatforms = () =>
  UseData<Platforms>("/platforms/lists/parents");
