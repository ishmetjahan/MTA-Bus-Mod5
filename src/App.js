import React, {Component} from 'react';
import './index.css'
import SignUpPage from './SignUpPage';
import { Switch, Route, withRouter } from 'react-router-dom'
import Registration from './components/Registration.js'
import LoginPage from './LoginPage';
import ProfilePage from './ProfilePage';

class App extends Component {



  render (){
    return (
      <Switch>
      <Route path={'/login'} component={LoginPage}/>
      <Route path={'/profile'} component= {ProfilePage}/>
      <Route path={'/signup'} component={SignUpPage} />
      <Route path={'/'} component={Registration}/>
    </Switch>
    )

  }

}



export default withRouter(App);
