import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreatTweet"
//import React,{useState} from "react";
function App() {
  const name ="S Zhu";
  const message="Hello";
  //Here is the place write normal js
  return (
    <div className="box">
       <CreateTweet />
      <TweetList name={name} message={message}/> 
    </div>
  );
}

export default App;
