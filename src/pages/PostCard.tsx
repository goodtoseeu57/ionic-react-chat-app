import React from 'react'
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, useIonRouter } from "@ionic/react";

interface Post {
  id: string,
  title: string,
  body?: string
}

type Props = {
  post: Post,
}

const PostCard: React.FC<Props> = ({post}) => {

  return (
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
      </IonCardContent>
    </IonCard>
  )
}

export default PostCard;
