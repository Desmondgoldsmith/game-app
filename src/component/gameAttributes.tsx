import DefinitionItem from "./definitionItem";
import CriticScore from "./criticScore";
import { GamesProps } from "../Entities/GamesProps";

interface Props {
  data: GamesProps;
}

const GameAttributes = ({ data }: Props) => {
  return (
    <>
      <dl className="grid grid-cols-2 gap-2">
        <DefinitionItem term="Platform">
          {data?.parent_platforms.map(({ platform }) => (
            <p key={platform.id}>{platform.name}</p>
          ))}
        </DefinitionItem>
        <DefinitionItem term="Metascore">
          <CriticScore score={data?.metacritic} />
        </DefinitionItem>
        <DefinitionItem term="Genres">
          {data?.genres.map((genre) => (
            <p key={genre.id}>{genre.name}</p>
          ))}
        </DefinitionItem>
        <DefinitionItem term="Publisher">
          {data?.publishers.map((publisher) => (
            <p key={publisher.id}>{publisher.name}</p>
          ))}
        </DefinitionItem>
      </dl>
    </>
  );
};

export default GameAttributes;
