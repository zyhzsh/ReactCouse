//Global Style
import GolbalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
//pages
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";
//Router
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <GolbalStyle />
      <Nav />
      <Switch>
        <Route exact path="/" component={AboutUs}/> 
        <Route exact path="/work" component={OurWork}/> 
        <Route exact path="/contact" component={ContactUs}/>
        <Route exact path="/work/:id" component={MovieDetail}/>
      </Switch>
    </div>
  );
}
export default App;
