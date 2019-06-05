import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  RouteComponentProps
} from "react-router-dom";
import {
  IonApp,
  IonPage,
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonIcon
} from "@ionic/react";
import Home from "./pages/Home";
import Settings from "./pages/Settings";

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
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomeDetailPage from "./pages/HomeDetailPage";
import TabRoot from "./pages/TabRoot";
import { any } from "prop-types";

type Props = {
  component:
    | ReturnType<typeof any> & React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
  path?: string | string[];
};

export class PrivateRoute extends Component<Props> {
  isAuthenticated = false;
  render() {
    const Component = this.props.component;
    const routeRender = (props: any) => {
      if (this.isAuthenticated) {
        return React.createElement(Component, props);
      }
      return (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      );
    };
    return <Route render={routeRender.bind(this)} />;
  }
}

const App: React.SFC = () => {
  return (
    <Router>
      <IonApp>
        {/* Renders the first child <Route> or <Redirect> that matches the location. */}
        <Switch>
          <Route path="/login" component={LoginPage} exact={true} />
          <Route path="/register" component={RegisterPage} exact={true} />
          <PrivateRoute path="/" component={TabRoot} />
          <Route path="/*" render={() => <Redirect to="/login" />} />
        </Switch>
      </IonApp>
    </Router>
  );
};

export default App;
