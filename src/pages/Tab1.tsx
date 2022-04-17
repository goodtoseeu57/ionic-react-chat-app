import { IonList, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonToggle, IonBadge, IonButton, IonCheckbox, IonButtons, IonIcon } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { useState } from "react";
import { accessibility, ellipse, square, triangle } from 'ionicons/icons';


interface ContainerProps {
  name: string;
}

const Tab1: React.FC<ContainerProps> = ({name}) => {
  const data = [1,2,3];
  const [background, setBackground] = useState('white')
  return (
    <IonPage style={{"--ion-background-color": background}}>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonIcon icon={accessibility} onClick={() => background === 'black' ? setBackground( 'white') : setBackground('black')}></IonIcon>
        </IonButtons>

          <IonButtons slot="end">
          <IonIcon icon={ellipse} onClick={() => background === 'black' ? setBackground( 'white') : setBackground('black')}></IonIcon>
        </IonButtons>
         <IonTitle> {name} </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen style={ { marginTop: '20px',
      }} className="ion-padding custom">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList style={{ height: '80vh',display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
          {data.map(d =>
           <IonItem key={d}>
             <IonLabel style={d % 2===0 ? {opacity: 0.3} : {} } >{ d }</IonLabel>
             <IonCheckbox color={ background === 'black' ? 'light' : 'dark' } checked={true}></IonCheckbox>
           </IonItem>
          )}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
