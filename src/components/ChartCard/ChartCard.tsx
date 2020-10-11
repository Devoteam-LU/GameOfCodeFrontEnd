import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonChip,
    IonLabel,
  } from "@ionic/react";
  import React from "react";
import { CartesianGrid, Line, LineChart } from "recharts";
  import { UserDto } from "../../api-clients/api";
  
  interface IProps {
  }
  
  export default function ChartCard() {
      
  let amount = [10, 100, 500, 1000, 5000, 7500, 10000, 50000, 100000];

  let proba = [
    0.9100000162919363,
    0.9100000162919363,
    0.9100000162919363,
    0.9100000162919363,
    0.9100000162919363,
    0.6000000089406967,
    0.6000000089406967,
    0.6000000089406967,
    0.6000000089406967,
  ];

  let data = [];
  var i;
  for (i = 0; i < amount.length; i++) {
    data.push({
      amount: amount[i],
      probability: proba[i],
    });
  }

    return (
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>
            Chart
          </IonCardSubtitle>
          <IonCardTitle></IonCardTitle>
        </IonCardHeader>
  
        <IonCardContent>
        <LineChart width={400} height={100} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <Line
              type="monotone"
              dataKey="probability"
              stroke="#8884d8"
              strokeWidth={2}
            />
          </LineChart>
        </IonCardContent>
      </IonCard>
    );
  }
  