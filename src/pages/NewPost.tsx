import {IonButton, IonInput, IonItem, IonLabel, IonToast, IonToolbar} from '@ionic/react';
import React from 'react';
import {useForm} from "react-hook-form";
import {CreatePostInput, useCreatePost} from "./graph-ql-request";
import {informationCircle} from "ionicons/icons";

const NewPost: React.FC = (props) => {

    const {register, handleSubmit, setValue, formState: {errors}} = useForm({
        reValidateMode: 'onChange',
        defaultValues: {title: '', body: ''}
    });

    const mutation = useCreatePost();

    const onSubmit = async (data: CreatePostInput) => {
        await mutation.mutateAsync(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <IonToolbar className={'ion-padding'}>
                Create a new project
            </IonToolbar>
            <IonItem className="ion-padding">
                <IonLabel position={'floating'}>Name of the project</IonLabel>
                <IonInput {...register('title')} ></IonInput>
            </IonItem>

            <IonItem className="ion-padding">
                <IonLabel position={'floating'}>Description of the project</IonLabel>
                <IonInput {...register('body', {required: true})}  ></IonInput>
            </IonItem>

            {errors.body && <span>this field is required</span>}

            <IonToast isOpen={mutation.isSuccess}
                      message="Click to Close"
                      icon={informationCircle}
                      position="top"
                      buttons={[
                          {
                              text: 'Done',
                              role: 'cancel',
                              handler: () => {
                                  console.log('Cancel clicked');
                              }
                          }
                      ]}
            />
            <IonButton expand={'block'} type={'submit'} className={'ion-padding'}>Submit</IonButton>
        </form>
    )
}

export default NewPost;

