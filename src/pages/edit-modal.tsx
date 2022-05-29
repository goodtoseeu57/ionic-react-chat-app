import { IonPage, IonContent, IonModal, IonItem } from "@ionic/react";
import { useState } from "react";

const EditModal: React.FC<any> = (props) => {

    const { title } = props;
    return (
        <IonContent>
            <IonItem lines="none"> {title}</IonItem>
        </IonContent>
    );
};

export default EditModal;
