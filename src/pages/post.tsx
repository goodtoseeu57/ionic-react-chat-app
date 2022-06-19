import {IonButton, IonButtons, IonIcon, IonToolbar, useIonRouter} from '@ionic/react';
import React from 'react';
import {useParams} from 'react-router'
import Loading from './loading';
import PostCard from "./PostCard";
import {arrowBack} from 'ionicons/icons';
import {usePost} from "../hooks/graph-ql-request";


const Post = () => {
    const {id} = useParams<{ id: string }>();
    const {data, isLoading, error} = usePost({queryKey: {postId: id}})
    const router = useIonRouter()
    const goBack = () => router.goBack()

    return (
        <div>
            {isLoading ? <Loading/> :
                <>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonButton className={'ionButton'} onClick={goBack}>
                                <IonIcon slot="icon-only" ios={arrowBack} md={arrowBack}/>
                            </IonButton>
                        </IonButtons>
                    </IonToolbar>
                    <PostCard post={data}/>
                </>}
        </div>
    )
}

export default Post
