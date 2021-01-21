import Tweet from "./Tweet";
const TweetList = ({ name, tweets }) => {
  return (
    <div className="tweet-list">
    <Tweet name={name} message={tweets[0]}/>
    </div>
  );
};
export default TweetList;
