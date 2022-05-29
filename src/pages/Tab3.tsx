import { IonCard, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, useIonRouter, IonButton, IonModal, IonLabel, IonToast } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import { useCreatePost, usePosts } from "./graph-ql-request";
import { useCallback, useEffect, useRef, useState } from "react";
import useOnScreen from "./useOnScreen";
import PostCard from "./PostCard";
import Loading from "./loading";
import Modal from './modal';
import { useMutation } from 'react-query';
import { informationCircle } from 'ionicons/icons';

const Tab3: React.FC = () => {

  const [ page, setPage ] = useState(1)
  const [ limit, setLimit ] = useState(10)
  const { data: posts, isLoading, error } = usePosts({ queryKey: { page: page, limit: limit } })
  const lastElementRef = useRef(null)
  const isOnScreen = useOnScreen(lastElementRef);
  const [ showModal, setShowModal ] = useState(false);
  const routerRef = useRef<HTMLIonRouterOutletElement | null>(null);

  interface Props {
    router: HTMLIonRouterOutletElement | null;
  }


  const router = useIonRouter();
  const navigateToPost = (id: string) => {
    console.log(id);
    router.push(`/post/${id}`)
  }

  const setmodal = () => {
    console.log(showModal);
    setShowModal(true);
  }


  const mutation = useCreatePost('', '');

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

        <IonButton onClick={() => setShowModal(true)}> Create project </IonButton>

        <IonButton onClick={() => mutation.mutate()}> {mutation.isLoading ? 'is Loading' : 'Create'} </IonButton>

        <IonButton> {mutation.isSuccess ? 'Successfully creation' : 'Not yet'} </IonButton>

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



        <IonModal
          isOpen={showModal}
          swipeToClose={true}
          breakpoints={[ 0.1, 0.5, 0.7, 1 ]}
          initialBreakpoint={0.5}
          presentingElement={undefined}
          onDidDismiss={() => setShowModal(false)}>
          <Modal />
        </IonModal>

        <div>
          {isLoading ? <Loading /> : posts?.map((post: any) => (
            <PostCard post={post} key={post.id} />
          ))}
          <div ref={lastElementRef}></div>
        </div>
      </IonContent>
    </IonPage >
  );
};


export default Tab3;
