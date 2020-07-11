import React, { Fragment, } from 'react';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import { Switch, Route, } from 'react-router-dom';
import FetchUser from './components/FetchUser';
import ProtectedRoute from './components/ProtectedRoute';
import CatList from './components/cats/CatList';
import ToyList from './components/toys/ToyList';
import DogList from './components/dogs/DogList';
import FoodList from './components/foods/FoodList';


const App = () => (
  <Fragment>
    <Navbar />
    <FetchUser>
      <Switch>
        <ProtectedRoute exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/catlist" component={CatList} />
        <Route exact path="/doglist" component={DogList} />
        <Route exact path="/toylist" component={ToyList} />
        <Route exact path="/foodlist" component={FoodList} />
        <Route component={NoMatch} />
      </Switch> 
    </FetchUser>
  </Fragment>
)

export default App;
