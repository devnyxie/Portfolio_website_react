import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { First_div } from "./components/First_div";
import { Second_div } from "./components/Second_div";
import { NavbarComponent } from "./components/NavbarComponent";
import { Background } from "./components/Third_div";
import { Fourth_div } from "./components/Fourth_div";
function App() {
  return (
    <>
      <NavbarComponent />
      <div>
        <First_div />
        <Second_div />
        <Background />
        <Fourth_div />
      </div>
    </>
  );
}

export default App;
