import { Redirect, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cours from "./pages/Cours";
import Exercices from "./pages/Exercices";
import SujetsBac from "./pages/SujetsBac";
import Quiz from "./pages/Quiz";
import ExamenBlanc from "./pages/ExamenBlanc";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";

export default function AppRoutes() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/cours" component={Cours} />
      <Route exact path="/exercices" component={Exercices} />
      <Route exact path="/sujets-bac" component={SujetsBac} />
      <Route exact path="/quiz" component={Quiz} />
      <Route exact path="/examen-blanc" component={ExamenBlanc} />
      <Route exact path="/faq" component={FAQ} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Redirect to="/" />
    </>
  );
}
