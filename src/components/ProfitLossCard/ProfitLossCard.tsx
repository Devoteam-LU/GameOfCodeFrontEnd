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
import React, { useContext } from "react";
import { UserBorrowLendSituationDto } from "../../api-clients/api";
import { AuthContext } from "../../modules/auth";

interface IProps {
  profitLoss: UserBorrowLendSituationDto;
}

export default function ProfitLossCard({ profitLoss }: IProps) {
  const { user } = useContext(AuthContext);
  return (
    <>
      {user != null && user.apy != null && profitLoss != null && (
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>
              <span>Profit loss</span>
              <span style={{ float: "right" }}>Credit score | APY</span>
            </IonCardSubtitle>
            <IonCardTitle style={{ color: "green" }}>
              <span>
                {profitLoss.totalLossProfit != null &&
                profitLoss.totalLossProfit < 0
                  ? "-"
                  : "+"}
                {profitLoss.totalLossProfit?.toFixed(2)} €
              </span>
              <span style={{ float: "right" }}>
                {user?.creditScore} | {(user.apy * 100).toFixed(1)} %
              </span>
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
                  <h2>
                    <IonLabel color="tertiary">
                      € {profitLoss.totalBorrowingAmount?.toFixed(2)} (€{" "}
                      {profitLoss.borrowLossProfit?.toFixed(2)})
                    </IonLabel>
                  </h2>
                </IonCol>
                <IonCol style={{ textAlign: "right" }}>
                  <h2>
                    <IonLabel color="tertiary">
                      € {profitLoss.totalLendingAmount?.toFixed(2)} (€{" "}
                      {profitLoss.lendLossProfit?.toFixed(2)})
                    </IonLabel>
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
