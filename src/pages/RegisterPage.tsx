import { IonContent, IonHeader, IonTitle, IonToolbar, IonTabBar, IonTabButton, IonIcon, IonLabel, IonPage, IonTabs, IonTab } from '@ionic/react';
import React from 'react';

const RegisterPage: React.SFC<any> = () => {
  return (
    <>
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic REGISTER</IonTitle>
        </IonToolbar>
      </IonHeader>    

      <IonContent padding>
        REGISTER PAGE
      </IonContent>
    </IonPage>
    </>
  );
};

export default RegisterPage;