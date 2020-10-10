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
  IonMenuButton
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
          <IonGrid>
            <IonRow>
              <IonCol  size="2">
                <IonHeader>
                  Matc
                </IonHeader>
              </IonCol>
              <IonCol size="10">
                <IonSearchbar ></IonSearchbar>
              </IonCol>
            </IonRow>
          </IonGrid>
          <IonButtons slot="end">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonListHeader>My interests</IonListHeader>
        <p>
          {interests &&
            interests.map((i) => {
              return (
                <IonChip key={i}>
                  <IonLabel>{i}</IonLabel>
                </IonChip>
              );
            })}
        </p>
        {/* <ProfilesMatch /> */}
        <ProjectsMatch />
      </IonContent>
    </IonPage>
  );
};

export default Match;
