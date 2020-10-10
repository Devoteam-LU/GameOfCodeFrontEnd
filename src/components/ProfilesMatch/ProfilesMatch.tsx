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
  IonSlides,
  IonSlide,
} from "@ionic/react";
import { UserInterestApi, getApiUrl, UserDto } from "../../api-clients/api";
import ProfileCard from "../ProfileCard/ProfileCard";

const ProfilesMatch: React.FC = () => {
  const [userInterestApi, setUserInterestApi] = useState<UserInterestApi>(
    new UserInterestApi(getApiUrl())
  );
  const [interestingUsers, setInterestingUsers] = useState<UserDto[]>();

  useEffect(() => {
    userInterestApi
      .listInterestingPeopleByUserId()
      .then((res: UserDto[]) => {
        setInterestingUsers(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {interestingUsers && (
        <>
          <IonListHeader>Users suggested for you</IonListHeader>
          <IonSlides>
            {interestingUsers.map((i) => {
              return (
                <IonSlide key={i.id}>
                  <ProfileCard user={i} />
                </IonSlide>
              );
            })}
          </IonSlides>
        </>
      )}
    </>
  );
};

export default ProfilesMatch;
