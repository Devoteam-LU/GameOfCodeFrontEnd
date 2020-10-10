import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonLabel,
} from "@ionic/react";
import React from "react";
import { UserDto } from "../../api-clients/api";

interface IProps {
  user: UserDto;
}

export default function ProfileCard({ user }: IProps) {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardSubtitle>
          {user.firstName} {user.lastName}
        </IonCardSubtitle>
        <IonCardTitle></IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        {user.interests &&
          user.interests.map((i) => {
            return (
              <IonChip key={i}>
                <IonLabel>{i}</IonLabel>
              </IonChip>
            );
          })}
      </IonCardContent>
    </IonCard>
  );
}
