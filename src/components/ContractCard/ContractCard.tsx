import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonItem,
} from "@ionic/react";
import React from "react";
import { ContractDto } from "../../api-clients/api";

interface IProps {
  contract: ContractDto;
  isNew?: boolean;
}

export default function ContractCard({ contract, isNew }: IProps) {
  const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(
    contract.creationDate
  );
  const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(
    contract.creationDate
  );
  const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(
    contract.creationDate
  );
  const date = `${da}.${mo}.${ye}`;

  return (
    <IonCard>
      <IonCardHeader>
        {isNew && "NEW!"}
        <IonCardSubtitle style={{ textAlign: "left" }}>
          <div style={{ display: "flex" }}>
            <span style={{ flex: 1 }}>{contract.projectTitle}</span>
            {date}
          </div>
        </IonCardSubtitle>
        <IonCardTitle style={{ textAlign: "left" }}>
          {contract.clause}
        </IonCardTitle>
        <IonCardSubtitle style={{ textAlign: "left" }}>
          <br />
          {contract.amount && (
            <div style={{ display: "flex" }}>
              <span style={{ flex: 1 }}>Privileges</span>
              {contract.amount / 2}€ / {contract.amount}€
            </div>
          )}
        </IonCardSubtitle>
        <IonCardSubtitle style={{ textAlign: "left" }}>
          <br />
          {contract.dealerFirstName && (
            <div style={{ display: "flex" }}>
              <span style={{ flex: 1 }}>{contract.dealerFirstName}</span>
              {(contract.amount || 0) / 2}€ at{" "}
              {(contract.interestRate || 0) * 100}%
            </div>
          )}
        </IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent></IonCardContent>
      {isNew && (
        <IonItem>
          <IonButton color="warning" slot="end">
            Decline
          </IonButton>
          <IonButton color="tertiary" slot="end">
            Approve
          </IonButton>
          <IonButton color="secondary" slot="end">
            Chat
          </IonButton>
        </IonItem>
      )}
    </IonCard>
  );
}
