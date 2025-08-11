import React, { useState } from "react";
import {
  IonPage,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
} from "@ionic/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Quiz.css";

type Question = {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
};

const questionsData: Question[] = [
  {
    id: 1,
    question: "Quelle est la dérivée de x² ?",
    options: ["x", "2x", "x²", "2"],
    correctIndex: 1,
  },
  {
    id: 2,
    question: "Limite de f(x) = 1/x quand x→+∞ ?",
    options: ["0", "1", "∞", "-∞"],
    correctIndex: 0,
  },
];

export default function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const currentQ = questionsData[currentIndex];

  function handleAnswer(index: number) {
    if (index === currentQ.correctIndex) setScore(score + 1);
    if (currentIndex + 1 < questionsData.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowResult(true);
    }
  }

  function restart() {
    setScore(0);
    setCurrentIndex(0);
    setShowResult(false);
  }

  return (
    <IonPage>
      <Navbar />
      <IonContent>
        <div className="quiz-container">
          <h2>Quiz</h2>
          {!showResult ? (
            <div>
              <p>{currentQ.question}</p>
              {currentQ.options.map((opt, i) => (
                <IonButton
                  key={i}
                  expand="block"
                  onClick={() => handleAnswer(i)}
                >
                  {opt}
                </IonButton>
              ))}
              <p>
                Question {currentIndex + 1} sur {questionsData.length}
              </p>
            </div>
          ) : (
            <div>
              <h3>
                Résultat : {score} / {questionsData.length}
              </h3>
              <IonButton onClick={restart}>Recommencer</IonButton>
            </div>
          )}
        </div>
      </IonContent>
      <Footer />
    </IonPage>
  );
}
