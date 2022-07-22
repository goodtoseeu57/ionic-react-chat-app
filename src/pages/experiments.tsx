import {IonContent, IonPage} from '@ionic/react';
import {useState} from "react";
import Review from './starreview';

interface ContainerProps {
    name: string;
}

const Experiments: React.FC<ContainerProps> = ({name}) => {
    const [background, setBackground] = useState('white')

    return (
        <IonPage style={{"--ion-background-color": background}}>
            <IonContent>
                <Review rating='4'/>
            </IonContent>
        </IonPage>

    );
};

export default Experiments;
