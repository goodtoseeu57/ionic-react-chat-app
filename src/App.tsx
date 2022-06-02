import {Redirect, Route, Switch} from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import {IonReactRouter} from '@ionic/react-router';
import {ellipse, square, triangle} from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Post from './pages/post'
import SelectMode from './pages/SelectMode';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
    <IonApp>
        <IonReactRouter>
            <Route exact path="/tabs">
                <SelectMode/>
            </Route>
            <IonTabs>
                <IonRouterOutlet>
                    <Switch>
                        <Route exact path="/tab1">
                            <Tab1 name='Dashboard'/>
                        </Route>
                        <Route exact path="/tab2" component={Tab2}/>
                        <Route path="/tab2/landing" component={SelectMode}/>
                        <Route path="/tab3">
                            <Tab3/>
                        </Route>
                        <Route exact path="/">
                            <Redirect to="/tab2"/>
                        </Route>
                        <Route exact path="/post/:id" component={Post}/>
                    </Switch>
                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                    <IonTabButton tab="tab1" href="/tab1">
                        <IonIcon icon={triangle}/>
                        <IonLabel>Tab 1</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="tab2" href="/tab2">
                        <IonIcon icon={ellipse}/>
                        <IonLabel>Tab 2</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="tab3" href="/tab3">
                        <IonIcon icon={square}/>
                        <IonLabel>Tab 3</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="dates" href="/dates">
                        <IonIcon icon={square}/>
                        <IonLabel>Tab 4</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    </IonApp>
);

export default App;
