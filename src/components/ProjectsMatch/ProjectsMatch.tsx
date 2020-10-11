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
import { UserInterestApi, getApiUrl, ProjectDto } from "../../api-clients/api";
import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectsMatch: React.FC = () => {
  const [userInterestApi, setUserInterestApi] = useState<UserInterestApi>(
    new UserInterestApi(getApiUrl())
  );
  const [interestingProjects, setInterestingProjects] = useState<
    ProjectDto[]
  >();

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
      {interestingProjects && (
        <>
          <div>
            <h1>Suggested for you</h1>
          </div>
          {interestingProjects.map((i) => {
            return (
              <ProjectCard
                key={"suggestedProject_" + i.createdByUserId + "_" + i.id}
                project={i}
              />
            );
          })}
        </>
      )}
    </>
  );
};

export default ProjectsMatch;
