import {IonItem} from "@ionic/react";

const EditModal: React.FC<any> = (props) => {
    const {title} = props;
    return (
        <IonItem className={'ion-padding'} lines="none"> {title}</IonItem>
    );
};

export default EditModal;
