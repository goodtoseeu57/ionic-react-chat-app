import { IonSpinner } from "@ionic/react";


const Loading = () => {
  return (
    <div style={{height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <IonSpinner/>
    </div>
  )
}

export default Loading;
