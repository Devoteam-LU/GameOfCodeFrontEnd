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
      <IonListHeader>Users suggested for you</IonListHeader>
      <p>
        {interestingUsers &&
          interestingUsers.map((i) => {
            return (
              <ProfileCard key={i.id} user={i} />
            );
          })}
      </p>
    </>
  );
};

export default ProfilesMatch;
