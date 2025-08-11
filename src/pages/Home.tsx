import React from "react";
import { IonPage, IonContent, IonButton } from "@ionic/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; // Si tu as un footer, sinon enlève
import { motion } from "framer-motion";

const Home: React.FC = () => {
  return (
    <IonPage>
      <Navbar />
      <IonContent className="bg-background min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <motion.img
          src="assets/logo-dark.png"
          alt="Illustration Bac Math"
          className="w-64 max-w-full mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />

        <motion.h1
          className="text-3xl md:text-4xl font-bold text-primary mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Préparez votre Bac Mathématiques
        </motion.h1>

        <motion.p
          className="text-gray-600 max-w-xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Retrouvez des cours complets, exercices corrigés, sujets Bac, quiz et
          examens blancs adaptés au programme de Terminale en Mauritanie.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <IonButton
            routerLink="/cours"
            className="bg-primary hover:bg-accent transition-colors text-white px-6 py-3 rounded-full"
          >
            Commencer
          </IonButton>
        </motion.div>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default Home;
