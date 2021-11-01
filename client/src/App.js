import {Homepage,Login,Register,Profile} from "./pages"
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom'
import {useContext} from 'react'
import {AuthContext} from "./context/AuthContext"
function App() {
  const {user} = useContext(AuthContext)
  return (
    <Router >
        <Switch>
        <Route exact path="/">{user? <Homepage /> :<Register/>}</Route>
        <Route exact path="/login">{user? <Redirect to="/"/>: <Login />}</Route>
        <Route exact path="/register">{user? <Redirect to="/"/>:<Register />}</Route>
        <Route exact path="/profile/:username"><Profile /></Route>
        <Route exact path="/"><Homepage /></Route>

        </Switch>
    </Router>
  );
}

export default App;
