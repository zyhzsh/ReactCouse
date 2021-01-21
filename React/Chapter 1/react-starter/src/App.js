import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreatTweet";
import { useState } from "react";
function App() {
  const message = "Hello";
  //state
  const [name,setName]=useState("S Zhu");
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);
  return (
    <div className="box">
      <CreateTweet
        textInput={textInput}
        setTextInput={setTextInput}
        tweets={tweets}
        setTweets={setTweets}
      />
      <TweetList name={name} tweets={tweets} />
    </div>
  );
}

export default App;
