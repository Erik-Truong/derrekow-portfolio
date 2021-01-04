import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Resume from "./components/Resume";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path='/' />
        <Route component={Resume} path='/resume' />
      </Switch>
    </BrowserRouter>
  )

}

export default App;
