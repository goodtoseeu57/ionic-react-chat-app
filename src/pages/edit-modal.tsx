import {useForm} from "react-hook-form";
import {IonButton, IonInput, IonItem, IonLabel, IonTitle, IonToolbar} from "@ionic/react";
import {Post} from "../Interfaces/PostInterface";
import {useUpdatePost} from "./graph-ql-request";

interface EditPost {
    title: string,
    body: string,
    id?: string
}

const EditModal: React.FC<Post> = (props) => {
    const {title, body, id} = props;
    const {setValue, setFocus, handleSubmit, register} = useForm<EditPost>()
    const updateMutation = useUpdatePost()
    const onSubmit = async (data: EditPost) => {
        data.id = id
        await updateMutation.mutateAsync(data)
        console.log(data)
    }
    if (body && title) {
        setValue('title', title)
        setValue('body', body)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <IonToolbar mode={'ios'}>
                <IonTitle>
                    Edit Post
                </IonTitle>
            </IonToolbar>
            <IonItem className={'ion-padding'}>
                <IonLabel position={'floating'}></IonLabel>
                <IonInput {...register('title')} ></IonInput>
            </IonItem>
            <IonItem className={'ion-padding'}>
                <IonLabel position={'floating'}></IonLabel>
                <IonInput {...register('body')} ></IonInput>
            </IonItem>
            <IonButton className={'ion-padding'} expand={'block'} type={"submit"}>Confirm</IonButton>
        </form>
    );
};

export default EditModal;
