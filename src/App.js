import logo from './logo.svg';
import './App.css';
import Page2 from './Page2';
import Page1 from './Page1';
import Page3 from './Page3'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

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
      <Route path="/page3">
        <Page3 />
      </Route>
    </Switch>
  )
  return (
    <Router>
      <main>
        {routes}
        <p>Code that needs to be removed </p>
      </main>
    </Router>
    
  );
}

export default App;
