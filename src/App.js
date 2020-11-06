import React from 'react';
import './App.css';

import HomePage from './pages/homepage/homepage';
import StorePage from './pages/store/store';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header';
import SignInAndSignUp from './pages/signinandsignup/signinandsignup';
import { auth, createUserProfileDocument } from './firebase/firebase';


class App extends React.Component {
  constructor () {
    super();
    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => {
        this.setState({
          currentUser: {
            id: snapShot.id,
            ...snapShot.data()
          }
        });
      });
    }
    this.setState({ currentUser: userAuth });
  });
  }
  componentWillUnmont() {
    this.unsubscribeFromAuth();
  } 

render() {
  return (
    <div>
      <Header currentUser={this.state.currentUser} />
      <Switch> 
        <Route exact path='/' component= { HomePage } />
        <Route path='/store' component= { StorePage } />
        <Route path='/signIn' component= {SignInAndSignUp} />
      </Switch>
    </div>
  );
  }
}

export default App;
