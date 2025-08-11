import { IonContent, IonPage } from "@ionic/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Dashboard() {
  return (
    <IonPage>
      <Navbar />
      <IonContent className="p-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="mt-2">
          Espace utilisateur pour suivre la progression et accéder aux outils.
        </p>
      </IonContent>
      <Footer />
    </IonPage>
  );
}
