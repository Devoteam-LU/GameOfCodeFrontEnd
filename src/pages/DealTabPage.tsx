import React from 'react';
import { IonContent, IonHeader,
  IonGrid,
  IonRow,
  IonCol,
  IonSearchbar,
  IonButtons,
  IonMenuButton,
   IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './DealTabPage.css';

const DealTabPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonGrid>
            <IonRow>
              <IonCol  size="2">
                <IonHeader>
                  Deal
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
      <IonContent>
        
      </IonContent>
    </IonPage>
  );
};

export default DealTabPage;
