import "./App.css";
import { BrowserRouter, Switch } from "react-router-dom";
import Views from "views";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Views />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
