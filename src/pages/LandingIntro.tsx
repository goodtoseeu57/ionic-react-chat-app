import React, {useState} from "react";
import './LandingIntro.scss'
import {IonList} from "@ionic/react";

const LandingIntro = () => {
    const [value, setValue] = useState<number>()

    const values = [{id: 1, name: 'chris'}, {id: 2, name: 'chris2'}]

    console.log(values.some(v => v.id === value)) // this the source
    return (

        <IonList className={'test ion-padding'}>
            {values.map(v => (
                <div className={`option ${v.id === value ? 'selected' : 'not-selected'}`} key={v.id}
                     onClick={() => setValue(v.id)}> {v.name} </div>
            ))}
        </IonList>
    )
}

export default LandingIntro