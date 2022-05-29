import React, { useState } from 'react'
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonItem, IonModal, useIonRouter } from "@ionic/react";
import { createOutline } from 'ionicons/icons';
import EditModal from './edit-modal';


interface Post {
  id: string,
  title: string,
  body?: string
}

type Props = {
  post: Post,
}


const PostCard: React.FC<Props> = ({ post }) => {


  const router = useIonRouter();
  const navigateToPost = (id: string) => {
    router.push(`/post/${id}`, 'forward')
  }

  const [ isOpenModal, setOpenModal ] = useState(false);

  return (
    <>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          <IonCardTitle> {post.title} </IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          {post?.body ??
            `Keep close to Nature's heart... and break clear away, once in awhile,
          and climb a mountain or spend a week in the woods. Wash your spirit clean.`
          }
          <IonItem>
            <IonIcon icon={createOutline} onClick={() => setOpenModal(true)} > </IonIcon>
            <IonIcon color='danger' icon={createOutline}>Delete</IonIcon>
            <IonButton onClick={() => navigateToPost(post.id)}> Read more </IonButton>
          </IonItem>
        </IonCardContent>
      </IonCard>

      <IonModal
        isOpen={isOpenModal}
        initialBreakpoint={0.5}
        breakpoints={[ 0, 0.5, 1 ]}
        onDidDismiss={() => setOpenModal(false)}>
        <IonItem>
          <EditModal {...post} />
        </IonItem>
      </IonModal>
    </>
  )
}

export default PostCard;
