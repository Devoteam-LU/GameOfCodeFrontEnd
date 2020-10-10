import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";
import React from "react";
import { ProjectDto } from "../../api-clients/api";

interface IProps {
  project: ProjectDto;
}

export default function ProjectCard({ project }: IProps) {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardSubtitle>
          {project.firstName} {project.lastName}
        </IonCardSubtitle>
        <IonCardTitle>{project.title}</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>{project.description}</IonCardContent>
    </IonCard>
  );
}
