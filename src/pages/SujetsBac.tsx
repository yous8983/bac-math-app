import React, { useState } from "react";
import { IonPage, IonContent, IonList, IonItem, IonLabel } from "@ionic/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./SujetsBac.css";

type Sujet = {
  id: number;
  titre: string;
  annee: number;
  fichier: string; // URL ou chemin du fichier PDF
};

const sujetsData: Sujet[] = [
  {
    id: 1,
    titre: "Bac Mathématiques - Session 2023",
    annee: 2023,
    fichier: "/pdfs/bac_math_2023.pdf",
  },
  {
    id: 2,
    titre: "Bac Mathématiques - Session 2022",
    annee: 2022,
    fichier: "/pdfs/bac_math_2022.pdf",
  },
  {
    id: 3,
    titre: "Bac Mathématiques - Session 2021",
    annee: 2021,
    fichier: "/pdfs/bac_math_2021.pdf",
  },
];

export default function SujetsBac() {
  const [selectedSujetId, setSelectedSujetId] = useState<number>(
    sujetsData[0].id
  );

  const selectedSujet = sujetsData.find((s) => s.id === selectedSujetId)!;

  return (
    <IonPage>
      <Navbar />
      <IonContent>
        <div className="sujets-container">
          <div className="sujets-list">
            <h2>Sujets du Bac</h2>
            <IonList>
              {sujetsData.map((sujet) => (
                <IonItem
                  key={sujet.id}
                  button
                  color={sujet.id === selectedSujetId ? "primary" : ""}
                  onClick={() => setSelectedSujetId(sujet.id)}
                >
                  <IonLabel>{`${sujet.titre} (${sujet.annee})`}</IonLabel>
                </IonItem>
              ))}
            </IonList>
          </div>

          <div className="sujets-detail">
            <h2>{selectedSujet.titre}</h2>
            <div className="sujets-content">
              <iframe
                src={selectedSujet.fichier}
                title={selectedSujet.titre}
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
