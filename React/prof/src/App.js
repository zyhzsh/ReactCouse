//Global Style
import GolbalStyle from "./components/GlobalStyle";
import Nav from'./components/Nav';
//pages
import AboutUs from'./pages/AboutUs';
function App() {
  return (
    <div className="App">
      <GolbalStyle />
      <Nav></Nav>
      <AboutUs />
    </div>
  );
}
export default App;
