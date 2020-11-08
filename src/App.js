import React from 'react';
import './App.css';

import HomePage from './pages/homepage/homepage';
import StorePage from './pages/store/store';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/header/header';
import SignInAndSignUp from './pages/signinandsignup/signinandsignup';
import { auth, createUserProfileDocument } from './firebase/firebase';
import { setCurrentUser } from './redux/user/user.actions';


class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
           setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
  });
  }
  componentWillUnmont() {
    this.unsubscribeFromAuth();
  } 

 render() {
  return (
    <div>
      <Header />
      <Switch> 
        <Route exact path='/' component= { HomePage } />
        <Route path='/store' component= { StorePage } />
        <Route exact path='/signIn'  render={
          () => this.props.currentUser ? (
            <Redirect to='' />
          ) : (
            <SignInAndSignUp/>
          )
        } 
       />
      </Switch>
    </div>
  );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
