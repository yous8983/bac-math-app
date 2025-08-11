import React, { useState } from "react";
import { IonPage, IonContent, IonList, IonItem, IonLabel } from "@ionic/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Exercices.css";

type Exercice = {
  id: number;
  titre: string;
  enonce: string;
  corrige: string;
};

const exercicesData: Exercice[] = [
  {
    id: 1,
    titre: "Exercice 1 : Limites",
    enonce: "Calculer la limite de f(x) en x→+∞...",
    corrige: "La limite est 0 car...",
  },
  {
    id: 2,
    titre: "Exercice 2 : Dérivation",
    enonce: "Trouver la dérivée de f(x) = x² + 3x...",
    corrige: "La dérivée est 2x + 3...",
  },
];

export default function Exercices() {
  const [selectedId, setSelectedId] = useState<number>(exercicesData[0].id);
  const selectedExo = exercicesData.find((e) => e.id === selectedId)!;

  return (
    <IonPage>
      <Navbar />
      <IonContent>
        <div className="exercices-container">
          <div className="exercices-list">
            <h2>Exercices</h2>
            <IonList>
              {exercicesData.map((exo) => (
                <IonItem
                  key={exo.id}
                  button
                  color={exo.id === selectedId ? "primary" : ""}
                  onClick={() => setSelectedId(exo.id)}
                >
                  <IonLabel>{exo.titre}</IonLabel>
                </IonItem>
              ))}
            </IonList>
          </div>

          <div className="exercices-detail">
            <h2>{selectedExo.titre}</h2>
            <div className="exercices-content">
              <h3>Énoncé</h3>
              <p>{selectedExo.enonce}</p>
              <h3>Corrigé</h3>
              <p>{selectedExo.corrige}</p>
            </div>
          </div>
        </div>
      </IonContent>
      <Footer />
    </IonPage>
  );
}
