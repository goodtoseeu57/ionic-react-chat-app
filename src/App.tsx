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
import {square} from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Posts from './pages/Posts';
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
                        <Route path="/posts">
                            <Posts/>
                        </Route>
                        <Route exact path="/">
                            <Redirect to="/tab2"/>
                        </Route>
                        <Route exact path="/post/:id" component={Post}/>
                    </Switch>
                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                    <IonTabButton tab="posts" href="/posts">
                        <IonIcon icon={square}/>
                        <IonLabel>Posts</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    </IonApp>
);

export default App;
