import {useForm} from "react-hook-form";
import {IonButton, IonInput, IonItem, IonLabel, IonTitle, IonToast, IonToolbar} from "@ionic/react";
import {useUpdatePost} from "../hooks/graph-ql-request";
import {Post} from "../Interfaces/PostInterface";
import React, {ComponentProps} from "react";

interface EditPost {
    title: string,
    body: string,
    id?: string
}

const EditPostModal: React.FC<Post> = (props) => {
    const {title, body, id} = props;
    const {setValue, handleSubmit, register} = useForm<EditPost>()
    const updateMutation = useUpdatePost()
    const onSubmit = async (data: EditPost) => {
        data.id = id
        await updateMutation.mutateAsync(data)
    }
    if (body && title) {
        setValue('title', title)
        setValue('body', body)
    }

    const ionToastPros: ComponentProps<typeof IonToast> = {
        isOpen: updateMutation.isSuccess,
        message: 'Post has been updated successfully',
        position: 'top'
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
            <IonToast {...ionToastPros} />
        </form>
    );
};

export default EditPostModal;
