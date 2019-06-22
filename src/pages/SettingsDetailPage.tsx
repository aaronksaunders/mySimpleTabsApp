import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import React from "react";
import { withRouter } from "react-router-dom";

const SettingsDetailPage: React.SFC<any> = props => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton
              text=""
              defaultHref="/"
              onClick={() => props.history.replace("/settings")}
              goBack={() => {}}
            />
          </IonButtons>
          <IonTitle>Ionic Settings Detail</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent padding>SettingsDetailPage</IonContent>
    </IonPage>
  );
};

export default withRouter(SettingsDetailPage);
