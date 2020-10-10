import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './MatchTabPage.css';

const MatchTabPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Match</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Match</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Match Tab Page" />
      </IonContent>
    </IonPage>
  );
};

export default MatchTabPage;
