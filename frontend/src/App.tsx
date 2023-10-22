import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Router from "./Router/Router";

const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default App;
