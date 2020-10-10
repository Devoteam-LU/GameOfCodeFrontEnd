import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ellipse, square, triangle } from "ionicons/icons";
import Tab1 from "./pages/Tab1";
import Tab2 from "./pages/Tab2";
import Tab3 from "./pages/Tab3";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Profile";
import { AuthContext } from "./modules/auth";
import DashboardIcon from '@material-ui/icons/Dashboard';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

const App: React.FC = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            {!isAuthenticated ? (
              <Route path="/login" component={Login} exact={true} />
            ) : (
              <></>
            )}
            {!isAuthenticated ? <Redirect to="/login" exact /> : <></>}
            {isAuthenticated ? (
              <Route path="/tab1" component={Tab1} exact={true} />
            ) : (
              <></>
            )}
            {isAuthenticated ? (
              <Route path="/dashboard/:id" component={Dashboard} exact={true} />
            ) : (
              <></>
            )}
            {isAuthenticated ? (
              <Route path="/tab2" component={Tab2} exact={true} />
            ) : (
              <></>
            )}
            {isAuthenticated ? <Route path="/tab3" component={Tab3} /> : <></>}
            {isAuthenticated ? (
              <Route
                path="/"
                render={() => <Redirect to="/tab1" />}
                exact={true}
              />
            ) : (
              <></>
            )}
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="tab1" href="/tab1">
              <DashboardIcon />
              <IonLabel>Life</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/tab2">
              <FavoriteBorderIcon />
              <IonLabel>Match</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab3" href="/tab3">
              <SupervisorAccountIcon />
              <IonLabel>Deals</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
