import React, { useContext, useEffect, useState } from "react";
import {
  IonChip,
  IonContent,
  IonHeader,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
  IonListHeader,
  IonGrid,
  IonCol,
  IonRow,
  IonSearchbar,
  IonButtons,
  IonMenuButton,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";
import "./Match.css";
import { UserInterestApi, getApiUrl } from "../../api-clients/api";
import ProfilesMatch from "../../components/ProfilesMatch/ProfilesMatch";
import ProjectsMatch from "../../components/ProjectsMatch/ProjectsMatch";

const Match: React.FC = () => {
  const [userInterestApi, setUserInterestApi] = useState<UserInterestApi>(
    new UserInterestApi(getApiUrl())
  );
  const [interests, setInterests] = useState<string[]>();

  useEffect(() => {
    userInterestApi
      .listByUserId()
      .then((res: string[]) => {
        setInterests(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle><IonLabel color="primary">Match</IonLabel></IonTitle>
          <IonButtons slot="end">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div style={{ background: "#EBEBEB" }}>
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle></IonCardSubtitle>
              <IonCardTitle>My interests</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              {interests &&
                interests.map((i) => {
                  return (
                    <IonChip key={i}>
                      <IonLabel>{i}</IonLabel>
                    </IonChip>
                  );
                })}
            </IonCardContent>
          </IonCard>

          {/* <ProfilesMatch /> */}
          <ProjectsMatch />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Match;
