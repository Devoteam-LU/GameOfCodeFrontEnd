import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonCol,
  IonGrid,
  IonLabel,
  IonRow,
} from "@ionic/react";
import React from "react";
import { UserBorrowLendSituationDto } from "../../api-clients/api";

interface IProps {
  profitLoss: UserBorrowLendSituationDto;
}

export default function ProfitLossCard({ profitLoss }: IProps) {
  return (
    <>
      {profitLoss != null && (
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Profit loss</IonCardSubtitle>
            <IonCardTitle style={{color: "green"}}>
              {profitLoss.totalLossProfit != null && profitLoss.totalLossProfit < 0 ? "-" : "+"}
              {profitLoss.totalLossProfit?.toFixed(2)} €
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <span>Total borrow (+interests)</span>
                </IonCol>
                <IonCol style={{ textAlign: "right" }}>
                  <span>Total lend(+interests)</span>
                </IonCol>
              </IonRow>

              <IonRow>
                <IonCol>
                  <h2>€ {profitLoss.totalBorrowingAmount?.toFixed(2)} (€ {profitLoss.borrowLossProfit?.toFixed(2)})</h2>
                </IonCol>
                <IonCol style={{ textAlign: "right" }}>
                  <h2>
                  <h2>€ {profitLoss.totalLendingAmount?.toFixed(2)} (€ {profitLoss.lendLossProfit?.toFixed(2)})</h2>
                  </h2>
                </IonCol>
              </IonRow>

          </IonGrid>
          </IonCardContent>
        </IonCard>
      )}
    </>
  );
}
