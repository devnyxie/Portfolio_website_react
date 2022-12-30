import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { First_div } from "./components/First_div";
import { Second_div } from "./components/Second_div";
import { NavbarComponent } from "./components/NavbarComponent";
function App() {
  return (
    <>
      <NavbarComponent />
      <div>
        <First_div />
        <Second_div />
      </div>
    </>
  );
}

export default App;
