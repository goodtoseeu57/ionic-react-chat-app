import { IonInput, IonItem, IonLabel, IonModal, IonToolbar } from '@ionic/react';
import { text } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';

const Modal: React.FC<any> = (props) => {

    const [ title, setTitle ] = useState<string>('')

    const [ description, setDescription ] = useState<string>('')

    useEffect(() => {
        console.log('validation')
    }, [ description, title ])
    return (
        <>
            <IonToolbar>
                Create a new project
            </IonToolbar>
            <IonItem style={{
                "--border-width": "2px",
                "--border-color": "#403E39",
                "--border-radius": "8px",
            }} className="ion-padding">
                <IonLabel position="floating">Name of the project</IonLabel>
                <IonInput value={title} onIonChange={e => setTitle(e.detail.value!)}></IonInput>
            </IonItem>



            <IonItem className="ion-padding">
                <IonLabel position="floating">Description of the project</IonLabel>
                <IonInput value={description} onIonChange={e => setDescription(e.detail.value!)}></IonInput>
            </IonItem>
        </>
    )
}

export default Modal;

