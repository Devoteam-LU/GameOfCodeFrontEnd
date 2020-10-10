import React from 'react';
import  Collapsible   from 'react-collapsible';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonSearchbar, IonListHeader,
  IonRow, IonGrid,IonCol, IonAvatar, IonLabel, IonList, IonItem, IonCard, IonCardHeader, IonCardContent  } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import AddIcon from '@material-ui/icons/Add';
import LinkIcon from '@material-ui/icons/Link';
import './LifeTabPage.css';


const LifeTabPage: React.FC = () => {
  
  const data = [
    {
      name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
      name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
      name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
      name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
      name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
    },
    {
      name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    },
    {
      name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    },
  ];

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
          <IonCard>
            <IonCardContent>
              <LineChart width={300} height={100} data={data}>
                <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            </IonCardContent>
          </IonCard>
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
          <Collapsible trigger="Recent Transactions">
              <IonList>
                <IonItem>
                  <IonAvatar slot="start">
                    <img src="./assets/avatar-han.png"></img>
                  </IonAvatar>
                  <IonLabel>Pokémon Yellow</IonLabel>
                </IonItem>
                <IonItem >
                <IonAvatar slot="start">
                    <img src="./assets/avatar-han.png"></img>
                  </IonAvatar>
                  <IonLabel>Mega Man X</IonLabel>
                </IonItem>
              </IonList>
            </Collapsible>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LifeTabPage;
