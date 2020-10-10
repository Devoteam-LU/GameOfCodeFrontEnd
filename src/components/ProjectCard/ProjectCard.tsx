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
          {project.firstName} {project.lastName}
        </IonCardSubtitle>
        <IonCardTitle style={{ textAlign: "left" }}>
          {project.title}
        </IonCardTitle>
      </IonCardHeader>

      {/* <IonGrid>
        <IonRow>
          <IonCol>
            {project.imageUrl && (
              <img
                style={{ maxHeight: "100px", textAlign: "left" }}
                src={project.imageUrl}
              />
            )}
          </IonCol>
          <IonCol style={{ textAlign: "left" }}>
            <div>
              {project.firstName} {project.lastName}
            </div>
            <div>Credit score</div>
            <div>Looking to borrow</div>
          </IonCol>
          <IonCol style={{ textAlign: "right" }}>
            <div>{project.title}</div>
            <div>740.0</div>
            <div>10,000.00</div>
          </IonCol>
        </IonRow>
      </IonGrid>
       */}
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
        <IonButton fill="outline" slot="end">
          Priviledge
        </IonButton>
        <IonButton fill="outline" slot="end">
          Chat
        </IonButton>
      </IonItem>
    </IonCard>
  );
}
