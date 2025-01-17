import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import CheckoutForm from './CheckoutForm';
import ImageInfo from './ImageInfo';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path= "/checkout">
            <Header/>
            <Checkout />
          </Route>
          <Route path= "/imageinfo/:id">
            <ImageInfo/>
          </Route>
          <Route path= "/form">
            <CheckoutForm />
          </Route>
          <Route path= "/login">
            <Login />
          </Route>
          <Route path= "/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
