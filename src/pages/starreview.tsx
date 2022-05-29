import { IonIcon } from "@ionic/react";
import { star, starOutline } from "ionicons/icons";

const Review: React.FC<any> = ({rating}) =>  {
    console.log(rating)
    const max = 5;
    const ar = [{id: 1} , {id: 2}]
    const ar1 = [{id: 1} , {id: 2},  {id: 2}]
    console.log(ar)
    const unfilledstars = max - ar.length;

    return (
        <>
          {
            ar.map((i) => (
              <IonIcon src={star}></IonIcon>
            ))
          }

        {
            ar1.map((i) => (
              <IonIcon src={starOutline}></IonIcon>
            ))
          }

          
        </>
      )
 
}

export default Review ;