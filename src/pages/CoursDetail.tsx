import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const programmeTerminale = [
  {
    section: "Analyse",
    chapters: [
      "Suites numériques",
      "Fonctions usuelles",
      "Dérivation",
      "Étude de fonctions",
      "Intégration",
    ],
  },
  {
    section: "Algèbre",
    chapters: [
      "Nombres complexes",
      "Équations et inéquations",
      "Matrices",
      "Applications linéaires",
    ],
  },
  {
    section: "Géométrie",
    chapters: [
      "Vecteurs et repères",
      "Produit scalaire",
      "Géométrie dans l’espace",
      "Droites et plans",
    ],
  },
  {
    section: "Probabilités et statistiques",
    chapters: [
      "Probabilités",
      "Variables aléatoires",
      "Loi binomiale",
      "Statistiques descriptives",
    ],
  },
];

// Même fonction slugify que dans Cours.tsx
const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "");

const CoursDetail: React.FC = () => {
  const { chapterSlug } = useParams<{ chapterSlug: string }>();

  // Trouver chapitre et section
  let foundChapter = "";
  let foundSection = "";

  for (const section of programmeTerminale) {
    for (const chapter of section.chapters) {
      if (slugify(chapter) === chapterSlug) {
        foundChapter = chapter;
        foundSection = section.section;
        break;
      }
    }
    if (foundChapter) break;
  }

  if (!foundChapter) {
    return (
      <IonPage>
        <Navbar />
        <IonContent fullscreen className="ion-padding">
          <h2>Chapitre non trouvé</h2>
          <p>Le chapitre demandé n'existe pas.</p>
          <Link to="/cours">Retour à la liste des cours</Link>
        </IonContent>
        <Footer />
      </IonPage>
    );
  }

  return (
    <IonPage>
      <Navbar />
      <IonContent
        fullscreen
        className="ion-padding"
        style={{ maxWidth: 800, margin: "0 auto" }}
      >
        <h1>{foundChapter}</h1>
        <h3 style={{ color: "#3880ff" }}>{foundSection}</h3>
        <p>
          {/* Ici tu peux mettre un contenu de cours plus détaillé pour ce chapitre */}
          Contenu détaillé du chapitre <strong>{foundChapter}</strong> à
          développer.
        </p>
        <Link
          to="/cours"
          style={{ color: "#3880ff", textDecoration: "underline" }}
        >
          ← Retour à la liste des cours
        </Link>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default CoursDetail;
