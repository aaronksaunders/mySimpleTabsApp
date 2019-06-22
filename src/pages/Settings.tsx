import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonButton
} from "@ionic/react";
import React from "react";

const Settings: React.SFC<any> = props => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Blank: Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent padding>
        <IonItem>Settings</IonItem>
        <IonItem>
          {" "}
          <IonButton
            expand="full"
            style={{ margin: "14" }}
            onClick={e => {
              e.preventDefault();
              props.history.push("/settings-detail");
            }}
          >
            NEXT PAGE
          </IonButton>
        </IonItem>
      </IonContent>
    </>
  );
};

export default Settings;
