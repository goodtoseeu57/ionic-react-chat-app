import {useContext} from "react";
import './LandingIntro.scss'
import {
    CreateAnimation,
    IonButton,
    IonCard,
    IonCardContent,
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonToggle
} from "@ionic/react";
import {ThemeContext} from "./useTheme";
import {moon} from "ionicons/icons";

const LandingIntro = () => {
    const {theme}= useContext(ThemeContext)

    const toggleDarkModeHandler = () => {
        document.body.classList.toggle('dark');
    }

    return (
        <IonContent style={{'--ion-background-color': theme}}>
            <IonItem lines={'none'}>
                <IonIcon slot="start" icon={moon}/>
                <IonLabel>Dark Mode</IonLabel>
                <IonToggle
                    slot="end"
                    name="darkMode"
                    onIonChange={() => toggleDarkModeHandler()}
                />
            </IonItem>
            {/*<IonIcon icon={contrastOutline} onClick={() => switchTheme(theme)}></IonIcon>*/}
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