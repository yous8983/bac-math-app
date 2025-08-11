import React from "react";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router-dom";

import Home from "./pages/Home";
import Cours from "./pages/Cours";
import Exercices from "./pages/Exercices";
import SujetsBac from "./pages/SujetsBac";
import Quiz from "./pages/Quiz";
import ExamenBlanc from "./pages/ExamenBlanc";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";

import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import DetailChapitre from "./pages/DetailChapitre";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/" component={Home} />
        <Route exact path="/cours" component={Cours} />
        <Route exact path="/cours/:chapter" component={DetailChapitre} />
        
        <Route exact path="/exercices" component={Exercices} />
        <Route exact path="/sujets-bac" component={SujetsBac} />
        <Route exact path="/quiz" component={Quiz} />
        <Route exact path="/examen-blanc" component={ExamenBlanc} />
        <Route exact path="/faq" component={FAQ} />
        <Route exact path="/contact" component={Contact} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
