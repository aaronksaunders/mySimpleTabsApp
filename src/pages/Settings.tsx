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
      <IonContent className="ion-padding">
        <IonItem>Settings</IonItem>
          <IonButton
            expand="full"
            style={{ margin: "14" }}
            href="/settings-detail"
          >
            NEXT PAGE
          </IonButton>
      </IonContent>
    </>
  );
};

export default Settings;
