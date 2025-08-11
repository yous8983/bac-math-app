import { IonFooter, IonToolbar, IonTitle } from "@ionic/react";

export default function Footer() {
  return (
    <IonFooter>
      <IonToolbar color="light">
        <IonTitle className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Bac Math Mauritanie - Tous droits
          réservés
        </IonTitle>
      </IonToolbar>
    </IonFooter>
  );
}
