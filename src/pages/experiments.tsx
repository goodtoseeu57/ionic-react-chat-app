import {IonButtons, IonContent, IonHeader, IonIcon, IonList, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import {useState} from "react";
import {accessibility, ellipse} from 'ionicons/icons';
import Counter from '../experiments/reducer';
import Review from './starreview';
import {ThemeContext} from '..';

interface ContainerProps {
    name: string;
}

const Experiments: React.FC<ContainerProps> = ({name}) => {
    const [background, setBackground] = useState('white')

    return (
        <>
            <IonPage style={{"--ion-background-color": background}}>

                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonIcon icon={accessibility}
                                     onClick={() => background === 'black' ? setBackground('white') : setBackground('black')}></IonIcon>
                        </IonButtons>
                        <IonButtons slot="end">
                            <IonIcon icon={ellipse}
                                     onClick={() => background === 'black' ? setBackground('white') : setBackground('black')}></IonIcon>
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

                    <ThemeContext.Consumer>
                        {darktheme => {
                            return <div> {darktheme.color} </div>
                        }}
                    </ThemeContext.Consumer>
                    <IonList>
                    </IonList>
                    <Counter/>
                    <Review rating='4'/>
                </IonContent>
            </IonPage>
        </>
    );
};

export default Experiments;
