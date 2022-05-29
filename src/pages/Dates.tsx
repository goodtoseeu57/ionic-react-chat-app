import { IonButton, IonContent, IonFooter, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import {DateTime}  from 'luxon'
import moment from 'moment';

export const Dates = () =>  {
    const todayWithLuxon = DateTime.now();
    const todayWithMoment = moment();

    const tomorrowWithLuxon = todayWithLuxon.plus({ days: 1 });
    const tomorrowWithMoment = todayWithMoment.add(1, 'day');

    return ( 
        
        <IonPage>
        <IonContent>
            <IonList>
                <IonItem className="ion-padding" lines="none"> <IonLabel> Original Today  </IonLabel>  {DateTime.now().toFormat('D')} </IonItem>  
                <IonItem lines="none"> Dates </IonItem>
                <IonItem>
                    <IonLabel slot="start">start </IonLabel>
                    <IonLabel slot="end">endaå </IonLabel>

                </IonItem>
                <IonItem> <IonLabel> Today with luxon </IonLabel> {todayWithLuxon.toFormat('D')} </IonItem> 
                <IonItem>  <IonLabel> Tomorrow </IonLabel> {tomorrowWithLuxon ? tomorrowWithLuxon.toFormat('D') : '' } </IonItem>
                <IonItem>  <IonLabel> Today with moment </IonLabel>  {todayWithMoment.format('DD/MM/YYYY')} </IonItem>
                <IonItem> <IonLabel> Tomorrow </IonLabel> {tomorrowWithMoment ? tomorrowWithMoment.format('DD/MM/YYYY') : ''} </IonItem>
            </IonList>
        </IonContent>
        <IonFooter>
      <IonToolbar>
        <IonTitle>Footer</IonTitle>
      </IonToolbar>
    </IonFooter>
    </IonPage>
  
    );
}

export default Dates;