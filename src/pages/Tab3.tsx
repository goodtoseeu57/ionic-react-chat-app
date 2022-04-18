import { IonCard, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, useIonRouter } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import { usePosts } from "./graph-ql-request";
import { useEffect, useRef, useState } from "react";
import useOnScreen from "./useOnScreen";
import PostCard from "./PostCard";
import Loading from "./loading";

const Tab3: React.FC = () => {

  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)


  const {data, isLoading, error} = usePosts({queryKey: {page: page, limit: limit}})

  const lastElementRef = useRef(null)

  const isOnScreen = useOnScreen(lastElementRef);


  const router = useIonRouter();
  const navigateToPost = (id: string) => {
    console.log(id);
    router.push(`/post/${id}`)
  }


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle data-testid="my-test" size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div>
          {isLoading ? <Loading/> : data?.map((d: any) => (
            <div onClick={() => navigateToPost(d.id)} key={d.id}>
              <PostCard post={d}/>
            </div>
          ))}
          <div ref={lastElementRef}></div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
