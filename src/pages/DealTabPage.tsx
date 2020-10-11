import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./DealTabPage.css";
import { ContractApi, getApiUrl, ContractDto } from "../api-clients/api";
import ContractCard from "../components/ContractCard/ContractCard";

const DealTabPage: React.FC = () => {
  const [contractApi] = useState<ContractApi>(new ContractApi(getApiUrl()));
  const [contracts, setContracts] = useState<ContractDto[]>([]);

  useEffect(() => {
    contractApi
      .listByUserIdAll()
      .then((res) => setContracts(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Deal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <div style={{ background: "#EBEBEB" }}>

        {contracts.map((contract, index) => (
          <ContractCard key={index} contract={contract} isNew={index === 2} />
        ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default DealTabPage;
