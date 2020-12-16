import HomePage from './pages/HomePage';
import ListProduct from './pages/ListProduct'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <Router>
    <Switch>
      <Route path="/listProducts" component={ListProduct} />
      <Route path="/" component={HomePage} />
    </Switch>
    </Router>
  );
}

export default App;
