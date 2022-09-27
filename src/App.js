import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Search/>
      <Category/>
      <Pages/>
      </BrowserRouter>
    </div>
  );
}

export default App;
