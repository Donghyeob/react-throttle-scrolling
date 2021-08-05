import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact render={() => <Home />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
