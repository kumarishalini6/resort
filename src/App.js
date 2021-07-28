import './App.css';
import Home from './pages/Home';
import Room from './pages/Room'
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';

import {Route, Switch} from 'react-router-dom';

import Navbar from './Components/Navbarr';

function App() {
  return (
  <>
  <Navbar />
  <Switch>
  <Route exact path="/" component={Home}/>
  <Route exact path="/Rooms" component={Room}/>
  <Route exact path="/Rooms/:slug" component={SingleRoom}/>
  <Route  component={Error}/>
  </Switch>
 
  </>
  );
}

export default App;
