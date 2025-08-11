import React from "react";
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonButton } from "@ionic/react";
import { useParams, useHistory } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type Chapter = {
  slug: string;
  title: string;
  content: React.ReactNode; // React.ReactNode est plus générique que JSX.Element
};

type Section = {
  section: string;
  chapters: Chapter[];
};

const programmeTerminale: Section[] = [
  {
    section: "Analyse",
    chapters: [
      {
        slug: "suites-numeriques",
        title: "Suites numériques",
        content: (
          <>
            <h2>Définition</h2>
            <p>
              Une suite numérique est une fonction définie sur les entiers
              naturels à valeurs dans les nombres réels.
            </p>
            <h3>Notations</h3>
            <ul>
              <li>Suite : (u_n) avec n dans N</li>
              <li>Terme général : u_n</li>
            </ul>
            <h3>Types de suites</h3>
            <ul>
              <li>Suite arithmétique : u_(n+1) = u_n + r</li>
              <li>Suite géométrique : u_(n+1) = q × u_n</li>
            </ul>
            <h3>Limites</h3>
            <p>Étude du comportement de la suite quand n tend vers l’infini.</p>
          </>
        ),
      },
      {
        slug: "fonctions-usuelles",
        title: "Fonctions usuelles",
        content: (
          <>
            <h2>Présentation</h2>
            <p>
              Les fonctions usuelles comprennent les fonctions polynomiales,
              exponentielles, logarithmiques, trigonométriques, etc.
            </p>
            <h3>Exemples</h3>
            <ul>
              <li>Fonction identité: f(x) = x</li>
              <li>Fonction carré: f(x) = x²</li>
              <li>Fonction exponentielle: f(x) = e^x</li>
              <li>Fonction logarithme: f(x) = ln(x)</li>
            </ul>
            <h3>Propriétés</h3>
            <p>Continuité, dérivabilité, courbes représentatives.</p>
          </>
        ),
      },
      // Ajoute les autres chapitres Analyse ici de façon similaire
      // ...
    ],
  },
  {
    section: "Algèbre",
    chapters: [
      {
        slug: "nombres-complexes",
        title: "Nombres complexes",
        content: (
          <>
            <h2>Définition</h2>
            <p>
              Les nombres complexes sont des nombres de la forme z = a + bi où a
              et b sont réels et i² = -1.
            </p>
            <h3>Représentation</h3>
            <p>Forme algébrique, trigonométrique et exponentielle.</p>
            <h3>Opérations</h3>
            <ul>
              <li>Addition, multiplication</li>
              <li>Conjugué, module, argument</li>
            </ul>
          </>
        ),
      },
      // Ajoute les autres chapitres Algèbre ici
    ],
  },
  // Continue pour Géométrie, Probabilités et statistiques ...
];

const DetailChapitre: React.FC = () => {
  const { chapter } = useParams<{ chapter: string }>();
  const history = useHistory();

  let foundChapter: Chapter | undefined;

  for (const section of programmeTerminale) {
    foundChapter = section.chapters.find((ch) => ch.slug === chapter);
    if (foundChapter) break;
  }

  if (!foundChapter) {
    return (
      <IonPage>
        <Navbar />
        <IonContent fullscreen className="ion-padding">
          <h2>Chapitre non trouvé</h2>
          <IonButton onClick={() => history.goBack()}>Retour</IonButton>
        </IonContent>
        <Footer />
      </IonPage>
    );
  }

  return (
    <IonPage>
      <Navbar />
      <IonHeader>
        <IonToolbar>
          <IonTitle>{foundChapter.title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        {foundChapter.content}
        <IonButton onClick={() => history.goBack()} style={{ marginTop: 20 }}>
          Retour aux cours
        </IonButton>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default DetailChapitre;
