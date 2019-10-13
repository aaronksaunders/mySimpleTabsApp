import React, { Component } from "react";
import { Route, Redirect, Switch, RouteComponentProps } from "react-router-dom";
import { IonReactRouter } from "@ionic/react-router";
import {
  IonApp,
  IonPage,
} from "@ionic/react";

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
import TabRoot from "./pages/TabRoot";
import { any } from "prop-types";

type Props = {
  component:
    | ReturnType<typeof any> & React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
  path?: string | string[];
};

export class PrivateRoute extends Component<Props> {
  isAuthenticated = true;
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
    <IonApp>
      <IonReactRouter>
        {/* Switch: Renders the first child <Route> or <Redirect> that matches the location. */}
        <IonPage id="main">
        <Switch>
          <Route path="/login" component={LoginPage} exact={true} />
          <Route path="/register" component={RegisterPage} exact={true} />
          <PrivateRoute path="/" component={TabRoot} />
          <Route path="/*" render={() => <Redirect to="/login" />} />
        </Switch>
        </IonPage>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
