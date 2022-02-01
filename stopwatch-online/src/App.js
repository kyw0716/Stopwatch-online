import {Route } from "react-router-dom";
import Home from "./routes/Home";

function App() {
  return (
      <Route path="/">
        <Home/>
      </Route>
  );
}

export default App;
