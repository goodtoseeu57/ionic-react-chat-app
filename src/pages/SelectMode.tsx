import React from 'react';
import { IonBackButton, IonHeader, IonToolbar, IonButtons, IonItem, IonMenuButton, IonContent, IonButton, useIonRouter } from '@ionic/react';


const SelectMode = () => {
  const navigate = useIonRouter();
  const routeGoBack = () => {
    navigate.goBack();
  }

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
            <IonButton routerDirection="back" onClick={routeGoBack}>Go Back</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonItem>
      </IonItem>
    </>
  )
}

export default SelectMode;
