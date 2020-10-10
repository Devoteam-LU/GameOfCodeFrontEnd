import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./DealTabPage.css";
import ProfitLossCard from "../components/ProfitLossCard/ProfitLossCard";
import {
  ContractApi,
  getApiUrl,
  UserBorrowLendSituationDto,
} from "../api-clients/api";

const DealTabPage: React.FC = () => {
  const [contractApi, setContractApi] = useState<ContractApi>(
    new ContractApi(getApiUrl())
  );
  const [profitLoss, setProfitLoss] = useState<UserBorrowLendSituationDto>();

  useEffect(() => {
    contractApi.userSituation()
    .then(res => setProfitLoss(res))
    .catch(err => console.log(err));
  }, [profitLoss]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Deal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {profitLoss && <ProfitLossCard profitLoss={profitLoss} />}
      </IonContent>
    </IonPage>
  );
};

export default DealTabPage;
