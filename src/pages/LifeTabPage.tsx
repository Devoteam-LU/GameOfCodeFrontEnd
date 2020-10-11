
import React, { useContext, useState } from "react";
import  Collapsible   from 'react-collapsible';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonSearchbar, IonListHeader,
  IonRow, IonGrid,IonCol, IonAvatar, IonLabel, IonList, IonItem, IonCard, IonCardHeader, IonCardContent  } from '@ionic/react';
import axios from "axios";
import ExploreContainer from '../components/ExploreContainer';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import AddIcon from '@material-ui/icons/Add';
import LinkIcon from '@material-ui/icons/Link';
import './LifeTabPage.css';
import { ApplicationUserApi, getApiUrl2 } from "../api-clients/api";


const LifeTabPage: React.FC = () => {
  const [applicationUserApi] = useState<ApplicationUserApi>(
    new ApplicationUserApi(getApiUrl2())
  );

  let proba=[0.585790872574,0.585790872574,0.585790872574,0.585790872574,0.585790872574,0.585790872574,0.585790872574,0.585790872574,0.585790872574];

  let data =[];
  var i;
  for (i = 0; i < 9; i++) { 
    data.push({
      amount: ""+i,
      probability: proba[i]
    });
  }

  const api = axios.create({
    baseURL: getApiUrl2(),
  });
  api
    .get("http://ncarrara.northeurope.cloudapp.azure.com:8080/api/DF5A07B6-2880-4411-84F1-5F62153B0882", {
    })
    .then((res) => {
      console.log(res.data)
    })
    .catch((error) => {
      console.log("ERREUR")
    });


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonHeader>
                  Life
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
      <IonContent fullscreen>
        <div className="ion-padding">
          <IonHeader>
            <IonGrid>
              <IonRow>
                <IonCol  size="5">
                  <IonLabel>Linked Accounts</IonLabel>
                </IonCol>
                <IonCol  size="2">
                    <LinkIcon/>
                </IonCol>
                <IonCol  size="5" align-self="end">
                  <FacebookIcon/>
                  <TwitterIcon />
                  <AddIcon></AddIcon>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonHeader>
          <LineChart width={270} height={100} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <Line type="monotone" dataKey="proba" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
          <Collapsible trigger="Account Status" color="primary">
              <IonList>
                <IonItem>
                  <IonLabel>Pokémon Yellow</IonLabel>
                </IonItem>
                <IonItem >
                  <IonLabel>Mega Man X</IonLabel>
                </IonItem>
                <IonItem >
                  <IonLabel>The Legend of Zelda</IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>Pac-Man</IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>Super Mario World</IonLabel>
                </IonItem>
              </IonList>
            </Collapsible>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default LifeTabPage;
