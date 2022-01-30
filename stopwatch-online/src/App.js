import { BrowserRouter, Route } from "react-router-dom";
import Home from "./routes/Home";

function App() {
  let timer;
  return (
    <BrowserRouter>
      <Route path="/">
        <Home timer={timer}/>
      </Route>
    </BrowserRouter>
  );
}

export default App;
