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
    useIonAlert,
    useIonRouter
} from "@ionic/react";
import {createOutline, trashBin} from 'ionicons/icons';
import EditModal from './edit-modal';


interface Post {
    id: string,
    title: string,
    body?: string
}

type Props = {
    post: Post,
}


const PostCard: React.FC<Props> = ({post}) => {

    const [present] = useIonAlert();

    const [isOpenModal, setOpenModal] = useState(false);
    const router = useIonRouter();
    const navigateToPost = (id: string) => {
        router.push(`/post/${id}`, 'forward')
    }

    const showDeletePostAlert = (id: string) => {
        return present({
            header: 'Are you sure do you want to delete this post?',
            buttons: [
                'Cancel',
                {text: 'Ok', handler: (d) => console.log('ok pressed')},
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
                                 onClick={() => showDeletePostAlert(post.id)}></IonIcon>
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
                <EditModal {...post} />
            </IonModal>
        </>
    )
}

export default PostCard;
