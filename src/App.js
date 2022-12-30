import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { First_div } from "./components/First_div";
import { Second_div } from "./components/Second_div";
import { NavbarComponent } from "./components/NavbarComponent";
import { Background } from "./components/Third_div";
function App() {
  return (
    <>
      <NavbarComponent />
      <div>
        <First_div />
        <Second_div />
        <Background />
      </div>
    </>
  );
}

export default App;
