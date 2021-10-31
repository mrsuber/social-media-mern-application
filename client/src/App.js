import {Homepage,Login,Register,Profile} from "./pages"
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
function App() {
  return (
    <Router >
        <Switch>
        <Route exact path="/"><Homepage /></Route>
        <Route exact path="/login"><Login /></Route>
        <Route exact path="/register"><Register /></Route>
        <Route exact path="/profile/:username"><Profile /></Route>
        <Route exact path="/"><Homepage /></Route>

        </Switch>
    </Router>
  );
}

export default App;
