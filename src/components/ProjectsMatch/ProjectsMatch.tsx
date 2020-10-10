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
import { UserInterestApi, getApiUrl, ProjectDto } from "../../api-clients/api";
import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectsMatch: React.FC = () => {

  const [userInterestApi, setUserInterestApi] = useState<UserInterestApi>(
    new UserInterestApi(getApiUrl())
  );
  const [interestingProjects, setInterestingProjects] = useState<ProjectDto[]>();

  useEffect(() => {
    userInterestApi
      .listInterestingProjectsByUserId()
      .then((res: ProjectDto[]) => {
        setInterestingProjects(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <IonListHeader>Projects suggested for you</IonListHeader>
      <p>
        {interestingProjects &&
          interestingProjects.map((i) => {
            return (
              <ProjectCard key={i.id} project={i} />
            );
          })}
      </p>
    </>
  );
};

export default ProjectsMatch;