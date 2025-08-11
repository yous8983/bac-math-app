import { IonPage, IonContent } from "@ionic/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Faq() {
  return (
    <IonPage>
      <Navbar />
      <IonContent className="bg-background min-h-screen p-6">
        <h1 className="text-2xl font-bold text-primary mb-4">FAQ</h1>
        <p className="text-gray-700">Questions fréquentes et réponses...</p>
      </IonContent>
      <Footer />
    </IonPage>
  );
}
