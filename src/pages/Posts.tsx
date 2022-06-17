import {
    IonButton,
    IonContent,
    IonFab,
    IonFabButton,
    IonFabList,
    IonHeader,
    IonIcon,
    IonPage,
    IonTitle,
    IonToolbar,
    useIonRouter
} from '@ionic/react';
import {usePosts} from "../hooks/graph-ql-request";
import {useRef, useState} from "react";
import useOnScreen from "../hooks/useOnScreen";
import PostCard from "./PostCard";
import Loading from "./loading";
import {add} from 'ionicons/icons';

const Posts: React.FC = () => {

    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const {data: posts, isLoading, error} = usePosts({queryKey: {page: page, limit: limit}})
    const lastElementRef = useRef(null)
    const isOnScreen = useOnScreen(lastElementRef);
    const [showModal, setShowModal] = useState(false);
    const router = useIonRouter();

    const navigateToNewPost = () => {
        router.push('new-post')
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Posts</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonFab vertical="bottom" horizontal="end">
                <IonFabButton>
                    <IonIcon icon={add}/>
                </IonFabButton>
                <IonFabList side={'start'}>
                    <IonButton onClick={navigateToNewPost}>
                        Create Post
                    </IonButton>
                </IonFabList>
            </IonFab>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle data-testid="my-test" size="large">Posts</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <div>
                    {isLoading ? <Loading/> : posts?.map((post: any) => (
                        <PostCard post={post} key={post.id}/>
                    ))}
                    <div ref={lastElementRef}></div>
                </div>
            </IonContent>
        </IonPage>
    );
}


export default Posts;
