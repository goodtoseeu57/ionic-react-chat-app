import React, {useContext} from "react";
import './LandingIntro.scss'
import {CreateAnimation, IonButton, IonCard, IonCardContent, IonContent, IonItem} from "@ionic/react";
import {ThemeContext} from "./useTheme";

const LandingIntro = () => {

    const theme = useContext(ThemeContext)
    console.log(theme)
    return (
        <IonContent>
            <CreateAnimation
                duration={1000}
                fromTo={{
                    property: 'transform',
                    fromValue: 'translateY(-200px) rotate(0)',
                    toValue: `translateY(200px) rotate(0)`,
                }}
                easing="ease-out"
                play={true}
            >
                <IonCard>
                    <IonCardContent>
                        Welcome to CRUD example with Ionic-React react query and graph ql
                    </IonCardContent>
                    <IonItem>
                        <IonButton routerLink={'/posts'}> Go to posts </IonButton>
                    </IonItem>
                </IonCard>
            </CreateAnimation>
        </IonContent>
    )
}

export default LandingIntro