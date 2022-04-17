import { IonCard, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import { usePosts } from "./graph-ql-request";
import { useEffect, useRef, useState } from "react";
import useOnScreen from "./useOnScreen";

const Tab3: React.FC = () => {

  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)


  const {data, isLoading, error} = usePosts({queryKey: {page: page, limit: limit}})
  console.log(data);

  const lastElementRef = useRef(null)

  const isOnScreen = useOnScreen(lastElementRef);


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
            <IonTitle data-testid="my-test"  size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div>
          {isLoading ? <p> is loading</p> : data?.map((d: any) => (
            <div key={d.id}>
              <IonCard>
                <IonCardHeader>
                  <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                  <IonCardTitle> {d.title} </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  Keep close to Nature's heart... and break clear away, once in awhile,
                  and climb a mountain or spend a week in the woods. Wash your spirit clean.
                </IonCardContent>
              </IonCard>
            </div>

          ))}
          <div ref={lastElementRef}></div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
