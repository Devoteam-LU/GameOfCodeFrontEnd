import React, { useContext, useEffect, useState } from "react";
import Collapsible from "react-collapsible";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonSearchbar,
  IonListHeader,
  IonRow,
  IonGrid,
  IonCol,
  IonAvatar,
  IonLabel,
  IonList,
  IonItem,
  IonCard,
  IonCardHeader,
  IonCardContent,
} from "@ionic/react";
import axios from "axios";
import ExploreContainer from "../components/ExploreContainer";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import AddIcon from "@material-ui/icons/Add";
import LinkIcon from "@material-ui/icons/Link";
import "./LifeTabPage.css";
import {
  ApplicationUserApi,
  ContractApi,
  getApiUrl,
  getApiUrl2,
  UserBorrowLendSituationDto,
} from "../api-clients/api";
import ProfitLossCard from "../components/ProfitLossCard/ProfitLossCard";
import ChartCard from "../components/ChartCard/ChartCard";
import { AuthContext } from "../modules/auth";

const LifeTabPage: React.FC = () => {
  const { user } = useContext(AuthContext);
  const [applicationUserApi] = useState<ApplicationUserApi>(
    new ApplicationUserApi(getApiUrl2())
  );
  const [contractApi, setContractApi] = useState<ContractApi>(
    new ContractApi(getApiUrl())
  );
  const [profitLoss, setProfitLoss] = useState<UserBorrowLendSituationDto>();

  useEffect(() => {
    contractApi
      .userSituation()
      .then((res) => setProfitLoss(res))
      .catch((err) => console.log(err));
  }, []);

  const api = axios.create({
    baseURL: getApiUrl2(),
  });
  api
    .post("/prod", {})
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log("ERREUR");
    });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Life</IonTitle>
          <IonButtons slot="end">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div style={{ background: "#EBEBEB" }}>
          <IonGrid>
            <IonRow>
              <IonCol size="5">
                <IonLabel>Linked Accounts</IonLabel>
              </IonCol>
              <IonCol size="2">
                <LinkIcon />
              </IonCol>
              <IonCol size="5" align-self="end">
                <FacebookIcon />
                <TwitterIcon />
                <AddIcon></AddIcon>
              </IonCol>
            </IonRow>
          </IonGrid>
          {profitLoss && <ProfitLossCard profitLoss={profitLoss} />}
          <ChartCard />
          <div style={{ display: "flex", padding: "0 16px" }}>
            <h5 style={{ flex: 1 }}>Borrowing capacity</h5>
            <h5>900€</h5>
          </div>
          <div style={{ display: "flex", padding: "0 16px" }}>
            <h5 style={{ flex: 1 }}>You've helped 8 People</h5>
            <h5>500$</h5>
          </div>
          <div style={{ display: "flex", padding: "0 16px" }}>
            <h5 style={{ flex: 1 }}>You owe 1 Person</h5>
            <h5>1000$</h5>
          </div>
          <div style={{ display: "flex", padding: "0 16px" }}>
            <h5 style={{ flex: 1 }}>Credit Score</h5>
            <h5>{user?.creditScore}</h5>
          </div>
          <div style={{ display: "flex", padding: "0 16px" }}>
            <h5 style={{ flex: 1 }}>APY</h5>
            <h5>{user?.apy}</h5>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LifeTabPage;
