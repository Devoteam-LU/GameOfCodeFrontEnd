import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonToggle,
  IonList,
  IonItem,
  IonLabel,
  IonItemDivider,
  IonIcon,
} from "@ionic/react";
import {
  checkmark,
  logoFacebook,
  logoGoogle,
  logoLinkedin,
  logoTwitter,
} from "ionicons/icons";

export const ConsentPage: React.FC = () => {
  const [checked, setChecked] = useState(true);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Data & Consent</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonLabel>All</IonLabel>
            <IonToggle
              checked={false}
              onIonChange={(e) => setChecked(e.detail.checked)}
            />
          </IonItem>
          <IonItemDivider>Bank Accounts</IonItemDivider>
          <IonItem>
            <IonLabel>Spurkees</IonLabel>
            <IonToggle
              checked={checked}
              onIonChange={(e) => setChecked(e.detail.checked)}
            />
          </IonItem>
          <div style={{ margin: "0px 12px" }}>
            <div style={{ display: "flex" }}>
              <h6 style={{ flex: 1 }}>IBAN: LU69 1234 5678 9101 1213</h6>
              <IonIcon
                style={{ marginTop: 8 }}
                icon={checkmark}
                color="success"
                size="large"
              />
            </div>
          </div>
          <IonItem>
            <IonLabel>BIL</IonLabel>
            <IonToggle checked={false} />
          </IonItem>
          <IonItem>
            <IonLabel>ING</IonLabel>
            <IonToggle checked={false} />
          </IonItem>
          <IonItemDivider>Social Media</IonItemDivider>
          <IonItem>
            <IonLabel>
              <IonIcon
                style={{ margin: "0px 6px -2px 4px" }}
                icon={logoGoogle}
              />
              Google
            </IonLabel>
            <IonToggle
              checked={checked}
              onIonChange={(e) => setChecked(e.detail.checked)}
            />
          </IonItem>
          <IonItem>
            <IonLabel>
              <IonIcon
                style={{ margin: "0px 6px -2px 4px" }}
                icon={logoFacebook}
              />
              Facebook
            </IonLabel>
            <IonToggle
              checked={checked}
              onIonChange={(e) => setChecked(e.detail.checked)}
            />
          </IonItem>
          <IonItem>
            <IonLabel>
              <IonIcon
                style={{ margin: "0px 6px -2px 4px" }}
                icon={logoLinkedin}
              />
              LinkedIn
            </IonLabel>
            <IonToggle
              checked={checked}
              onIonChange={(e) => setChecked(e.detail.checked)}
            />
          </IonItem>
          <IonItem>
            <IonLabel>
              <IonIcon
                style={{ margin: "0px 6px -2px 4px" }}
                icon={logoTwitter}
              />
              Twitter
            </IonLabel>
            <IonToggle
              checked={checked}
              onIonChange={(e) => setChecked(e.detail.checked)}
            />
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};
