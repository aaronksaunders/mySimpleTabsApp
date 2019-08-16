import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonPage,
  IonTabs,
  IonTab,
  IonButton
} from "@ionic/react";
import React from "react";

const LoginPage: React.SFC<any> = ({history}) => {
  return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Ionic LOGIN</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent className="ion-padding">
          LOGIN PAGE
          <div>
            <IonButton 
              onClick={(e: any) => {
                e.preventDefault();
                history.push("/register");
              }}
              // href="/register"
            >
              REGISTER
            </IonButton>
          </div>
        </IonContent>
      </IonPage>
  );
};

export default LoginPage;
