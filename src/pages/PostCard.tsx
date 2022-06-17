import React, {useState} from 'react'
import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonIcon,
    IonItem,
    IonModal,
    IonToast,
    useIonAlert,
    useIonRouter
} from "@ionic/react";
import {createOutline, informationCircle, trashBin} from 'ionicons/icons';
import EditPostModal from './edit-post-modal';
import {useDeletePost} from "../hooks/graph-ql-request";
import {Post} from "../Interfaces/PostInterface";


type Props = {
    post: Post,
}


const PostCard: React.FC<Props> = ({post}) => {

    const [present] = useIonAlert();
    const [isOpenModal, setOpenModal] = useState(false);
    const mutateDelete = useDeletePost();

    const router = useIonRouter();
    const navigateToPost = (id: string) => {
        router.push(`/post/${id}`, 'forward')
    }

    const showDeletePostAlert = (id: string, title: string) => {
        return present({
            header: `Are you sure do you want to delete the post with title?`,
            message: title,
            buttons: [
                'Cancel',
                {text: 'Ok', handler: (d) => mutateDelete.mutateAsync(id)},
            ],
            onDidDismiss: (e) => console.log('did dismiss'),
        })
    }

    return (
        <>
            <IonCard>
                <IonCardHeader>
                    <IonItem lines={'none'} className={'ion-no-padding'}>
                        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                        <IonIcon slot={'end'} color='danger' icon={trashBin}
                                 onClick={() => showDeletePostAlert(post.id, post.title)}></IonIcon>
                    </IonItem>
                    <IonCardTitle> {post.title} </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    {post?.body}
                    <IonItem lines={'none'} className={'ion-no-padding'}>
                        <IonIcon slot={'start'} icon={createOutline} onClick={() => setOpenModal(true)}> </IonIcon>
                        <IonButton slot={'end'} onClick={() => navigateToPost(post.id)}> Read more </IonButton>
                    </IonItem>
                </IonCardContent>
            </IonCard>

            <IonModal
                isOpen={isOpenModal}
                initialBreakpoint={0.5}
                breakpoints={[0, 0.5, 1]}
                onDidDismiss={() => setOpenModal(false)}>
                <EditPostModal {...post} />
            </IonModal>

            <IonToast isOpen={mutateDelete.isSuccess}
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
        </>
    )
}

export default PostCard;
