import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonPage,
  IonButton
} from "@ionic/react";
import React from "react";
import { withRouter } from "react-router-dom";

const Home: React.SFC<any> = (props) => {
  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Ionic HOME</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent padding>
          The world is your oyster.
          <p>
            <IonButton
              expand="full"
              style={{ margin: "14" }}
              onClick={e => {
                e.preventDefault();
                props.history.push("/home-detail");
              }}
            >
              NEXT PAGE
            </IonButton>
          </p>
        </IonContent>
      </IonPage>
    </>
  );
};

export default withRouter(Home);
