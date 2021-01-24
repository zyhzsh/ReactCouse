//Global Style
import GolbalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
//pages
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";
//Router
import { Switch, Route,useLocation } from "react-router-dom";
//Animation
import { AnimatePresence } from "framer-motion";
import ScrollTop from "./components/ScrollTop";

function App() {
  const location=useLocation();
  return (
    <div className="App">
      <ScrollTop />
      <GolbalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={AboutUs} />
          <Route exact path="/work" component={OurWork} />
          <Route exact path="/contact" component={ContactUs} />
          <Route exact path="/work/:id" component={MovieDetail} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}
export default App;
