import React, { useState } from "react";
import { IonPage, IonContent, IonList, IonItem, IonLabel } from "@ionic/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ExamenBlanc.css";

type Examen = {
  id: number;
  titre: string;
  description: string;
  fichier: string;
};

const examensData: Examen[] = [
  {
    id: 1,
    titre: "Examen Blanc 2023",
    description: "Examen complet pour s’entrainer",
    fichier: "/pdfs/examen_blanc_2023.pdf",
  },
  {
    id: 2,
    titre: "Examen Blanc 2022",
    description: "Ancien examen pour révision",
    fichier: "/pdfs/examen_blanc_2022.pdf",
  },
];

export default function ExamenBlanc() {
  const [selectedId, setSelectedId] = useState(examensData[0].id);
  const selectedExamen = examensData.find((e) => e.id === selectedId)!;

  return (
    <IonPage>
      <Navbar />
      <IonContent>
        <div className="examen-container">
          <div className="examen-list">
            <h2>Examens Blancs</h2>
            <IonList>
              {examensData.map((ex) => (
                <IonItem
                  key={ex.id}
                  button
                  color={ex.id === selectedId ? "primary" : ""}
                  onClick={() => setSelectedId(ex.id)}
                >
                  <IonLabel>{ex.titre}</IonLabel>
                </IonItem>
              ))}
            </IonList>
          </div>

          <div className="examen-detail">
            <h2>{selectedExamen.titre}</h2>
            <p>{selectedExamen.description}</p>
            <div className="examen-content">
              <iframe
                src={selectedExamen.fichier}
                title={selectedExamen.titre}
                width="100%"
                height="500px"
              />
            </div>
          </div>
        </div>
      </IonContent>
      <Footer />
    </IonPage>
  );
}
