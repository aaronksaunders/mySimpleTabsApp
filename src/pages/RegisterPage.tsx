import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonPage
} from "@ionic/react";
import React from "react";

const RegisterPage: React.SFC<any> = () => {
  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Ionic REGISTER</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent className="ion-padding">
          REGISTER PAGE
          <div>
            <IonButton href="/login">CANCEL</IonButton>
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default RegisterPage;
