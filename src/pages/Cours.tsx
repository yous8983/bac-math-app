import React, { useState } from "react";
import { IonPage, IonContent, IonIcon } from "@ionic/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { chevronDown, chevronForward } from "ionicons/icons";
import { motion, AnimatePresence } from "framer-motion";

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

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "");

const Cours: React.FC = () => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <IonPage>
      <Navbar />
      <IonContent
        fullscreen
        style={{ padding: "16px", maxWidth: 800, margin: "0 auto" }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#3880ff",
            marginBottom: "24px",
          }}
        >
          Programme Terminale - Cours de Mathématiques
        </h1>

        {programmeTerminale.map(({ section, chapters }) => (
          <section
            key={section}
            style={{
              border: "1px solid #ccc",
              borderRadius: 6,
              marginBottom: 16,
              overflow: "hidden",
            }}
          >
            <button
              onClick={() => toggleSection(section)}
              aria-expanded={!!openSections[section]}
              aria-controls={`${section}-content`}
              style={{
                width: "100%",
                background: "#f0f0f0",
                border: "none",
                padding: "12px 16px",
                fontSize: 18,
                fontWeight: "bold",
                color: "#3880ff",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              {section}
              <IonIcon
                icon={openSections[section] ? chevronDown : chevronForward}
                style={{ fontSize: 24, color: "#3880ff" }}
              />
            </button>

            <AnimatePresence initial={false}>
              {openSections[section] && (
                <motion.ul
                  key="content"
                  id={`${section}-content`}
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1, height: "auto" },
                    collapsed: { opacity: 0, height: 0 },
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={{
                    listStyleType: "disc",
                    paddingLeft: 20,
                    backgroundColor: "#fff",
                    margin: 0,
                    overflow: "hidden",
                  }}
                >
                  {chapters.map((chapter) => (
                    <li key={chapter} style={{ marginBottom: 8 }}>
                      <Link
                        to={`/cours/${slugify(chapter)}`}
                        style={{ color: "#222", textDecoration: "none" }}
                      >
                        {chapter}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </section>
        ))}
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default Cours;
