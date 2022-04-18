import { IonContent, IonItem, IonHeader, IonFooter, IonNavLink, IonPage, IonTitle, IonToolbar, IonSelect, IonSelectOption, IonLabel, IonSearchbar } from '@ionic/react';
import './Tab2.css';
import { useState } from "react";


const Tab2: React.FC = () => {

  const [category, setCategory] = useState('Apples')
  const [searchText, setSearchText] = useState('')


  return (
    <IonPage>
      <IonHeader>

        <IonToolbar>
          <IonSearchbar className="ion-search-bar" value={searchText} onIonFocus={() => console.log('focused')} onIonBlur={() => console.log('blured')}
                        onIonChange={e => setSearchText(e.detail.value!)}
                        debounce={1000}></IonSearchbar>
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
          your search text is {searchText}
        </IonItem>

      </IonContent>
      <IonFooter>
        <IonToolbar>
          Search Text: {searchText ?? '(none)'}
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Tab2;
