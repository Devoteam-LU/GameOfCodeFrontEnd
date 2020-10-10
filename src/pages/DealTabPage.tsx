import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './DealTabPage.css';

const DealTabPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Deal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Deal</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Deal Tab Page" />
      </IonContent>
    </IonPage>
  );
};

export default DealTabPage;
