import { IonContent, IonItem, IonHeader, IonNavLink, IonPage, IonTitle, IonToolbar, IonSelect, IonSelectOption, IonLabel } from '@ionic/react';
import './Tab2.css';
import { useState } from "react";


const Tab2: React.FC = () => {

  const [category, setCategory] = useState('Apples')

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 21</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        <IonItem routerLink="/tab2/landing" routerDirection="forward">
          Navigate forward
        </IonItem>

        <IonItem>
          <IonLabel>PICK one</IonLabel>
          <IonSelect value={category} onIonChange={e => setCategory(e.detail.value)}>
            <IonSelectOption value="Apples">Apples</IonSelectOption>
            <IonSelectOption value="Oranges">Oranges</IonSelectOption>
            <IonSelectOption value="Carrots">Carrots</IonSelectOption>
          </IonSelect>
        </IonItem>

        <IonItem>
          your category is {category}
        </IonItem>

      </IonContent>
    </IonPage>
  );
};

export default Tab2;
