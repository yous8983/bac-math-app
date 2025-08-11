import {
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonMenu,
} from "@ionic/react";
import {
  homeOutline,
  bookOutline,
  createOutline,
  documentTextOutline,
  helpCircleOutline,
  schoolOutline,
  timerOutline,
  chatbubblesOutline,
  personCircleOutline,
} from "ionicons/icons";
import { motion } from "framer-motion";

export default function SideMenu() {
  return (
    <IonMenu contentId="main">
      <IonContent>
        {/* En-tête avec dégradé */}
        <motion.div
          className="bg-gradient-to-r from-primary to-accent text-white p-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-lg font-bold">Menu</h2>
          <p className="text-sm opacity-80">Navigation principale</p>
        </motion.div>

        {/* Liste animée */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <IonList>
            <IonItem
              routerLink="/"
              routerDirection="root"
              className="hover:bg-gray-100"
            >
              <IonIcon icon={homeOutline} slot="start" color="primary" />
              <IonLabel>Accueil</IonLabel>
            </IonItem>
            <IonItem
              routerLink="/cours"
              routerDirection="root"
              className="hover:bg-gray-100"
            >
              <IonIcon icon={bookOutline} slot="start" color="primary" />
              <IonLabel>Cours</IonLabel>
            </IonItem>
            <IonItem
              routerLink="/exercices"
              routerDirection="root"
              className="hover:bg-gray-100"
            >
              <IonIcon icon={createOutline} slot="start" color="primary" />
              <IonLabel>Exercices</IonLabel>
            </IonItem>
            <IonItem
              routerLink="/sujets-bac"
              routerDirection="root"
              className="hover:bg-gray-100"
            >
              <IonIcon
                icon={documentTextOutline}
                slot="start"
                color="primary"
              />
              <IonLabel>Sujets Bac</IonLabel>
            </IonItem>
            <IonItem
              routerLink="/quiz"
              routerDirection="root"
              className="hover:bg-gray-100"
            >
              <IonIcon icon={schoolOutline} slot="start" color="primary" />
              <IonLabel>Quiz</IonLabel>
            </IonItem>
            <IonItem
              routerLink="/examen-blanc"
              routerDirection="root"
              className="hover:bg-gray-100"
            >
              <IonIcon icon={timerOutline} slot="start" color="primary" />
              <IonLabel>Examen Blanc</IonLabel>
            </IonItem>
            <IonItem
              routerLink="/faq"
              routerDirection="root"
              className="hover:bg-gray-100"
            >
              <IonIcon icon={helpCircleOutline} slot="start" color="primary" />
              <IonLabel>FAQ</IonLabel>
            </IonItem>
            <IonItem
              routerLink="/contact"
              routerDirection="root"
              className="hover:bg-gray-100"
            >
              <IonIcon icon={chatbubblesOutline} slot="start" color="primary" />
              <IonLabel>Contact</IonLabel>
            </IonItem>
            <IonItem
              routerLink="/dashboard"
              routerDirection="root"
              className="hover:bg-gray-100"
            >
              <IonIcon
                icon={personCircleOutline}
                slot="start"
                color="primary"
              />
              <IonLabel>Dashboard</IonLabel>
            </IonItem>
          </IonList>
        </motion.div>
      </IonContent>
    </IonMenu>
  );
}
