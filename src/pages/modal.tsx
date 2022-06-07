import {IonButton, IonInput, IonItem, IonLabel, IonToolbar} from '@ionic/react';
import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";

const Modal: React.FC<any> = (props) => {
    const {register, handleSubmit} = useForm({
        mode: "onSubmit",
        reValidateMode: 'onChange',
        defaultValues: {name: '', description: ''}
    });
    const onSubmit = async (data: any) => {
        console.log(data)
    }

    useEffect(() => {
        console.log('validation')
    }, [onSubmit])
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <IonToolbar className={'ion-padding'}>
                Create a new project
            </IonToolbar>
            <IonItem className="ion-padding">
                <IonLabel>Name of the project</IonLabel>
                <IonInput {...register('name')} ></IonInput>
            </IonItem>

            <IonItem className="ion-padding">
                <IonLabel>Description of the project</IonLabel>
                <IonInput {...register('description')} ></IonInput>
            </IonItem>

            <IonButton type={'submit'} className={'ion-padding'}>Submit</IonButton>
        </form>
    )
}

export default Modal;

