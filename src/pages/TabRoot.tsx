import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonPage,
  IonButton,
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel
} from "@ionic/react";
import React from "react";
import { withRouter, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import HomeDetailPage from "./HomeDetailPage";
import Settings from "./Settings";
import SettingsDetailPage from "./SettingsDetailPage";

const TabRoot: React.SFC<any> = props => {
  return (
    <>
      <IonPage>
        <IonTabs>
          {/* create the routes for all of the tabs here */}
          <IonRouterOutlet>
            <Route path="/:tab(home)" component={Home} exact={true} />
            <Route path="/:tab(home-detail)" component={HomeDetailPage} />
            <Route path="/:tab(settings)" component={Settings} />
            <Route path="/:tab(settings-detail)" component={SettingsDetailPage} />
            <Route path="/*" render={() => <Redirect to="/home" />} /> 
          </IonRouterOutlet>

          {/* ensure the tab bar is displayed */}
          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/home">
              <IonIcon name="flash" />
              <IonLabel>Tab One</IonLabel>
            </IonTabButton>
            <IonTabButton tab="settings" href="/settings">
              <IonIcon name="apps" />
              <IonLabel>Tab Two</IonLabel>
            </IonTabButton>
          </IonTabBar>

          {/* closing tags... */}
        </IonTabs>
      </IonPage>
    </>
  );
};

export default withRouter(TabRoot);
