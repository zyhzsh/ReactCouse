import { useEffect, useState } from "react";
import { useSelector,useDispatch} from "react-redux";
function App() {
  const counter=useSelector(state=>state.counter);
  const dispatch=useDispatch();
  return (
    <div className="App">
      <h1>Counter:{counter}</h1>
      <button onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
      <button onClick={()=>dispatch({type:"SIGN_IN"})}>SIGN IN</button>
    </div>
  );
}

export default App;
