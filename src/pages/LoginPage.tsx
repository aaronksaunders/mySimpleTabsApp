import { IonContent, IonHeader, IonTitle, IonToolbar, IonTabBar, IonTabButton, IonIcon, IonLabel, IonPage, IonTabs, IonTab } from '@ionic/react';
import React from 'react';

const LoginPage: React.SFC<any> = () => {
  return (
    <>
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic LOGIN</IonTitle>
        </IonToolbar>
      </IonHeader>    

      <IonContent padding>
        LOGIN PAGE
      </IonContent>
    </IonPage>
    </>
  );
};

export default LoginPage;