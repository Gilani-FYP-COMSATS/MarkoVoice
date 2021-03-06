import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import CreateConfiguration from './components/configuration-forms/CreateConfiguration';
import EditConfiguration from './components/configuration-forms/EditConfiguration';
import AddDomainInfo from './components/configuration-forms/AddDomainInfo';

//Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path='/' component={Landing} />
          <section className='container'>
            <Alert />
            <Switch>
              <Route exact path='/Login' component={Login} />
              <Route exact path='/Register' component={Register} />
              <Route exact path='/dashboard' component={Dashboard} />
              <Route
                exact
                path='/create-configuration'
                component={CreateConfiguration}
              />
              <Route
                exact
                path='/edit-configuration'
                component={EditConfiguration}
              />
              <Route exact path='/add-domainInfo' component={AddDomainInfo} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
