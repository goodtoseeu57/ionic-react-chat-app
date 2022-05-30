import {
  IonList,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonCheckbox,
  IonButtons,
  IonIcon,
  IonFabButton, IonFab, IonFabList, IonButton
} from '@ionic/react';
import './Tab1.css';
import { useState } from "react";
import {accessibility, add, ellipse, square, star, starOutline, triangle} from 'ionicons/icons';
import Counter from '../experiments/reducer';
import Card from './generalCard';
import Review from './starreview';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@awesome-cordova-plugins/native-geocoder';
import { ThemeContext } from '..';



interface ContainerProps {
  name: string;
}

const Tab1: React.FC<ContainerProps> = ({ name }) => {
  const data = [ 1, 2, 3 ];
  const [ background, setBackground ] = useState('white')
  const [ locationData, setLocationData ] = useState<any>('')

  let options: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };



  async function fetchLocationData() {
    const res = await (await NativeGeocoder.reverseGeocode(51.502356, -0.117150, options))
    console.log(res);
    setLocationData(res);
  }
  // fetchLocationData();



  return (
    <>
      <IonPage style={{ "--ion-background-color": background }}>
         <IonFab vertical="bottom" horizontal="start">
          <IonFabButton>
            <IonIcon icon={add} />
          </IonFabButton>
           <IonFabList side={'top'}>
             <IonButton>New project</IonButton>
           </IonFabList>
        </IonFab>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonIcon icon={accessibility} onClick={() => background === 'black' ? setBackground('white') : setBackground('black')}></IonIcon>
            </IonButtons>
            <IonButtons slot="end">
              <IonIcon icon={ellipse} onClick={() => background === 'black' ? setBackground('white') : setBackground('black')}></IonIcon>
            </IonButtons>
            <IonTitle> {name} </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen style={{
          marginTop: '20px',
        }} className="ion-padding custom">
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Tab 123</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonList style={{ height: '50vh', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            {data.map(d =>
              <IonItem key={d}>
                <IonLabel style={d % 2 === 0 ? { opacity: 0.3 } : {}} >{d}</IonLabel>
                <IonCheckbox color={background === 'black' ? 'light' : 'dark'} checked={true}></IonCheckbox>
              </IonItem>
            )}
          </IonList>

          <ThemeContext.Consumer>
            {darktheme => {
              return <div> hihhi {darktheme.color} </div>
            }}
          </ThemeContext.Consumer>

          <IonList>
          </IonList>

          <Counter />

          <Review rating='4' />

        </IonContent>
      </IonPage>
    </>

  );
};

export default Tab1;
