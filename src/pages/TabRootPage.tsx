import {
IonTabs,
IonTabBar,
IonTabButton,
IonRouterOutlet,
IonLabel
} from "@ionic/react";
import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import "./TabRootPage.css";
import LifeTabPage from "./LifeTabPage";
import MatchTabPage from "./Match/Match";
import DealTabPage from "./DealTabPage";
import { AuthContext } from "../modules/auth";
import DashboardIcon from '@material-ui/icons/Dashboard';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import LoginPage from "./Login";
  
  const TabRootPage: React.FC = () => {
    const { isAuthenticated } = useContext(AuthContext);
    return (
      <IonTabs>
          {isAuthenticated ? (
                <IonRouterOutlet>
                    <Route path="/tabs/life" component={LifeTabPage} exact={true} />
                    <Route path="/tabs/match" component={MatchTabPage} exact={true} />
                    <Route path="/tabs/deal" component={DealTabPage} exact={true} />
                    <Route path="/" render={() => <Redirect to="/tabs/life" />} exact={true}  />
                    <Redirect from="/" to="//tabs/life" exact />
                </IonRouterOutlet>
                   ) : (
                    <IonRouterOutlet>
                        <Route path="/login" component={LoginPage} exact />
                        <Redirect from="/" to="/login" exact />
                    </IonRouterOutlet>
                )}
        {/*-- Tab bar --*/}
        <IonTabBar slot="bottom">
            <IonTabButton tab="life" href="/tabs/life">
              <DashboardIcon color="primary"/>
              <IonLabel color="primary">Life</IonLabel>
            </IonTabButton>
            <IonTabButton tab="match" href="/tabs/match">
              <FavoriteBorderIcon color="primary"/>
              <IonLabel color="primary">Match</IonLabel>
            </IonTabButton>
            <IonTabButton tab="deal" href="/tabs/deal">
              <SupervisorAccountIcon color="primary"/>
              <IonLabel color="primary">Deals</IonLabel>
            </IonTabButton>
          </IonTabBar>
      </IonTabs>
    );
  };
  
  export default TabRootPage;