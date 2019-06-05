import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem } from '@ionic/react';
import React from 'react';

const Settings: React.SFC<any> = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Blank: Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent padding>
        <IonItem>Settings</IonItem>
      </IonContent>
    </>
  );
};

export default Settings;