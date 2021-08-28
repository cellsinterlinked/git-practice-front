import logo from './logo.svg';
import './App.css';
import Page2 from './Page2';
import Page1 from './Page1';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

function App() {

  let routes;

  routes = (
    <Switch>
      <Route path="/">
        <Page1 />
      </Route>
      <Route path="/page2">
        <Page2 />
      </Route>
    </Switch>
  )
  return (
    <Router>
      <main>
        {routes}
      </main>
    </Router>
    
  );
}

export default App;
