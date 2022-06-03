import {IonButton, IonInput, IonItem, IonLabel, IonToolbar} from '@ionic/react';
import React, {useEffect, useState} from 'react';

const Modal: React.FC<any> = (props) => {

    const [title, setTitle] = useState<string>('')

    const [description, setDescription] = useState<string>('')

    useEffect(() => {
        console.log('validation')
    }, [description, title])
    return (
        <>
            <IonToolbar className={'ion-padding'}>
                Create a new project
            </IonToolbar>
            <IonItem className="ion-padding">
                <IonLabel position="floating">Name of the project</IonLabel>
                <IonInput value={title} onIonChange={e => setTitle(e.detail.value!)}></IonInput>
            </IonItem>
            
            <IonItem className="ion-padding">
                <IonLabel position="floating">Description of the project</IonLabel>
                <IonInput value={description} onIonChange={e => setDescription(e.detail.value!)}></IonInput>
            </IonItem>

            <IonButton className={'ion-padding'}>Submit</IonButton>
        </>
    )
}

export default Modal;

