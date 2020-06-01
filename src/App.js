import React from 'react';
import './App.css';
import Nav from './component/shared/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './component/dashboard/Dashboard';
import Welcome from './component/Welcome';
import CreateWallet from './component/dashboard/dashboardoperations/CreateWallet';
import NotFound from './component/shared/NotFound';

import { Provider } from 'react-redux'
import store from './Store'
import UpdateWallet from './component/dashboard/dashboardoperations/UpdateWallet';

function App() {
  return (

    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" component={Nav} />
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/createwallet" exact component={CreateWallet} />
          <Route path="/updatewallet/:id" exact component={UpdateWallet} />
          <Route path="/" component={NotFound} />

        </Switch>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
