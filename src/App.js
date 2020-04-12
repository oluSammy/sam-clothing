import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import {auth} from './firebase/firebase.utils';
import { createUserProfileDoc } from './firebase/firebase.utils';
import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop-page/shopPage.components';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component';
import CheckoutPage from './pages/checkout/checkout.component'; 
import {setCurrentUser} from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selector';

import './App.css';



class App extends React.Component{
  
   unsubscribeFromAuth = null;
   

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth =  auth.onAuthStateChanged( async userAuth=>{
      if(userAuth){
        const userRef = await createUserProfileDoc(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({            
            id: snapshot.id,
            ...snapshot.data()
          });         

        })
      }else{
        setCurrentUser(userAuth);
      }

    })
  };
      
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path='/checkout' component={CheckoutPage}/>
          <Route exact path='/signin' render={()=> this.props.currentUser ? (<Redirect to='/'/>): (<SignInAndSignUpPage/>)}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const matchDispatchToProps = dispatch =>{
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
};

export default connect(mapStateToProps,matchDispatchToProps)(App);
