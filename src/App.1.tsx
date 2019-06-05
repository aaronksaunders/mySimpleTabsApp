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


const App: React.SFC = () => {
  let authenticated = true
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
      {/* // set the default route  */}
      <Route exact path="/" render={() => <Redirect to="/home"/>} />

      {/* Wrap the whole thing in an IonApp */}
      <IonApp>

        {/* We need this to look like an IonPage */}
        <IonPage id="main">

          {/* Here come all the tabs */}
          <IonTabs>

            {/* create the routes for all of the tabs here */}
            <IonRouterOutlet>
              <Route path="/:tab(home)" component={Home} exact={true} />
              <Route path="/:tab(home-detail)" component={HomeDetailPage} />
              <Route path="/:tab(settings)" component={Settings} />
              <Route path="/*" render={() => <Redirect to="/home"/>} />
            </IonRouterOutlet>

            {/* ensure the tab bar is displayed */}
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

            {/* closing tags... */}
          </IonTabs>
        </IonPage>
      </IonApp>
    </Router>

  };




export default App;
