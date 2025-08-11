import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
} from "@ionic/react";
import { useHistory } from "react-router-dom";

const Navbar: React.FC = () => {
  const history = useHistory();

  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>Bac Math Pro</IonTitle>
        <IonButtons slot="end">
          <IonButton onClick={() => history.push("/")}>Accueil</IonButton>
          <IonButton onClick={() => history.push("/cours")}>Cours</IonButton>
          <IonButton onClick={() => history.push("/exercices")}>
            Exercices
          </IonButton>
          <IonButton onClick={() => history.push("/sujets-bac")}>
            Sujets Bac
          </IonButton>
          <IonButton onClick={() => history.push("/quiz")}>Quiz</IonButton>
          <IonButton onClick={() => history.push("/examen-blanc")}>
            Examen Blanc
          </IonButton>
          <IonButton onClick={() => history.push("/faq")}>FAQ</IonButton>
          <IonButton onClick={() => history.push("/contact")}>
            Contact
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default Navbar;
