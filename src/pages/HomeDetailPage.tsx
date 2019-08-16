import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonPage,
  IonButtons,
  IonMenuButton,
  IonBackButton
} from "@ionic/react";
import React from "react";
import { withRouter } from "react-router-dom";

const HomeDetailPage: React.SFC<any> = props => {
  return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton
                text=""
                defaultHref="/"
                onClick={ ()=> props.history.goBack()}
                // goBack={() => {}}
              />
            </IonButtons>
            <IonTitle>Ionic HOME DETAIL</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">HomeDetailPage</IonContent>
      </IonPage>
  );
};

export default withRouter(HomeDetailPage);
