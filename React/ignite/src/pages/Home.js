import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadGames } from "../acntions/gamesAction";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  });
  return(
    <div>
        <h1>home</h1>
    </div>
  );
};

export default Home;