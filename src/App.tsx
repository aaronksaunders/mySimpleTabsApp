import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { IonApp, IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon } from '@ionic/react';
import Home from './pages/Home';
import Settings from './pages/Settings';

/* Core CSS required for Ionic components to work properly */
import "@ionic/core/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/core/css/normalize.css";
import "@ionic/core/css/structure.css";
import "@ionic/core/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/core/css/padding.css";
import "@ionic/core/css/float-elements.css";
import "@ionic/core/css/text-alignment.css";
import "@ionic/core/css/text-transformation.css";
import "@ionic/core/css/flex-utils.css";
import "@ionic/core/css/display.css";
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomeDetailPage from './pages/HomeDetailPage';
import TabRoot from './pages/TabRoot';


const App: React.SFC = () => {
  let authenticated = true
  return !authenticated ? 
    <Router>
      <IonApp>
        <Route path="/login"  component={LoginPage}  exact={true} />
        <Route path="/register"  component={RegisterPage}  exact={true} />
        <Route path="/*" render={() => <Redirect to="/login"/>} />
      </IonApp>
    </Router>
:
    <Router>
      <IonApp>
      <Route path="/" component={TabRoot} />
      </IonApp>
    </Router>

  };




export default App;
