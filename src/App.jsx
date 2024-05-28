import RollDice from "./Components/RollDice";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);
import "./App.css";

function App() {
  return <RollDice />;
}

export default App;
