import { useEffect } from "react";
import GameDetail from "../components/GameDetail";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
//Components
import Game from "../components/Game";
//Styling and Animation
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useLocation } from "react-router-dom";

const Home = () => {
  //Get the current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  //FETCH GAMES
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  //Get Data Back
  const { popular, newGames, upcoming } = useSelector((state) => state.games);
  return (
    <GameList>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId}/>}
          <h2>Upcoming Games</h2>
          <Games>
            {upcoming.map((game) => (
              <Game
                name={game.name}
                released={game.released}
                id={game.id}
                img={game.background_image}
                key={game.id}
              />
            ))}
          </Games>
          <h2>Popular Games</h2>
          <Games>
            {popular.map((game) => (
              <Game
                name={game.name}
                released={game.released}
                id={game.id}
                img={game.background_image}
                key={game.id}
              />
            ))}
          </Games>
          <h2>New Games</h2>
          <Games>
            {newGames.map((game) => (
              <Game
                name={game.name}
                released={game.released}
                id={game.id}
                img={game.background_image}
                key={game.id}
              />
            ))}
          </Games>
        </AnimatePresence>
      </AnimateSharedLayout>
    </GameList>
  );
};
const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
