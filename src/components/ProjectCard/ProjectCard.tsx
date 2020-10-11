import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonIcon,
  IonItem,
  IonLabel,
  IonRow,
} from "@ionic/react";
import React from "react";
import { ProjectDto, ProjectType } from "../../api-clients/api";
import {
  cashOutline,
  walletOutline,
  wine,
  warning,
  walk,
} from "ionicons/icons";

interface IProps {
  project: ProjectDto;
}

export default function ProjectCard({ project }: IProps) {
  return (
    <IonCard>
      {/* {project.imageUrl && (
        <img
          style={{ maxHeight: "100px", textAlign: "left" }}
          src={project.imageUrl}
        />
      )} */}
      <IonCardHeader>
        <IonCardSubtitle style={{ textAlign: "left" }}>
          <span>
            {project.firstName} {project.lastName}
          </span>
          <span style={{ float: "right" }}>Credit score | APY</span>
        </IonCardSubtitle>
        <IonCardTitle style={{ textAlign: "left" }}>
          <span>{project.title}</span>
          {project != null && project.apy != null && (
          <span style={{ float: "right" }}>
            {project?.creditScore} | {(project.apy * 100).toFixed(1)} %
          </span>
          )}
        </IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        <div>
          <p style={{ textAlign: "justify" }}>{project.description}</p>
        </div>
        <h1 style={{ textAlign: "right" }}>€ {project.budget?.toFixed(2)}</h1>
        {project.interestRate != null && project.interestRate > 0 && (
          <h1 style={{ textAlign: "right" }}>
            {project.interestRate * 100} % interest rate
          </h1>
        )}
        {project.isInterestRateFlexible && (
          <h1 style={{ textAlign: "right" }}>Flexible interest rate</h1>
        )}
      </IonCardContent>
      <IonItem>
        <IonIcon
          icon={
            project.projectType == ProjectType._0 ? cashOutline : walletOutline
          }
          slot="start"
        />
        <IonButton slot="end" color="primary">
          Priviledge
        </IonButton>
        <IonButton slot="end" color="secondary">
          Chat
        </IonButton>
      </IonItem>
    </IonCard>
  );
}
