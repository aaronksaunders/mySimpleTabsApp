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


const App: React.SFC = () => {
  let authenticated = false
  return !authenticated ? 
    <Router>
      <IonApp>
        <Route path="/:tab(login)"  component={LoginPage}  exact={true} />
        <Route path="/:tab(register)"  component={RegisterPage}  exact={true} />
        <Route path="/*" render={() => <Redirect to="/login"/>} />
      </IonApp>
    </Router>
:
    <Router>
      <Route exact path="/" render={() => <Redirect to="/home"/>} />
      <IonApp>
        <IonPage>
          <IonTabs>
            <IonRouterOutlet>
              <Route path="/:tab(home)" component={Home} exact={true} />
              <Route path="/:tab(settings)" component={Settings} />
              <Route path="/*" render={() => <Redirect to="/home"/>} />
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="home" href="/home">
                <IonIcon name="flash" />
                <IonLabel>Tab One</IonLabel>
              </IonTabButton>
              <IonTabButton tab="settings"  href="/settings">
                <IonIcon name="apps" />
                <IonLabel>Tab Two</IonLabel>
              </IonTabButton>
            </IonTabBar> 
          </IonTabs>
        </IonPage>
      </IonApp>
    </Router>

  };




export default App;
