import { IonBackButton, IonButtons, IonHeader, IonIcon, IonToolbar } from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router'
import { usePost } from "./graph-ql-request";
import Loading from './loading';
import PostCard from "./PostCard";

const Post = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = usePost({ queryKey: { postId: id } })

  return (
    <div>
      {isLoading ? <Loading /> :
        <>
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonBackButton />
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <PostCard post={data} />
        </>}
    </div>
  )
}

export default Post
