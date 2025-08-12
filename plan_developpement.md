## Plan de Développement - MVP Ionic React
- Projet : Application Cymath
- Version : Minimum Viable Product (MVP)
- Guide de développement : Étape par étape, Sprint par Sprint

## Sprint 1 : Fondations et Authentification (Durée estimée : 7 jours)
- Objectifs :

 - Mise en place de l'environnement de développement.
 
 - Développement du système d'authentification (Connexion, Inscription).
 
 - Configuration de la navigation principale.
 
 - Mise en place de la gestion de l'état utilisateur.
 
 - Tâches (Détails de l'implémentation) :
 
 - Initialisation du projet
 
 - Exécuter npm install -g @ionic/cli.
 
 - Créer le projet avec ionic start CymathApp react --type react.
 
 - Organiser les dossiers src/pages, src/components, src/services, src/theme.
 
 - Configuration de la navigation
 
 - Dans src/App.tsx, configurer IonRouterOutlet et les Route pour :
 
 - /login -> LoginPage
  
 - /register -> RegisterPage
  
 - /home -> HomePage (protégée)
  
 - /profile -> ProfilePage (protégée)
  
 - Mettre en place une logique pour rediriger les utilisateurs non authentifiés vers la page de connexion.
  
 - Développement de l'authentification
  
 - Composants : Créer LoginPage.tsx et RegisterPage.tsx avec des formulaires (IonInput, IonButton).
  
 - Service : Créer src/services/AuthService.ts. Utiliser Axios pour les requêtes POST vers l'API de connexion et d'inscription. Gérer la réponse (token, message d'erreur).
  
 - Gestion de l'état : Créer un AuthContext avec React.createContext. Utiliser le hook useContext pour gérer l'état de connexion de l'utilisateur (isLoggedIn).
  
 - Tests et validation
  
 - Vérifier que les requêtes API fonctionnent correctement.
  
 - S'assurer que la navigation est fluide et que l'authentification protège les pages.

## Sprint 2 : Intégration des données et Interface utilisateur (Durée estimée : 7 jours)
- Objectifs :

 - Développement des pages pour l'affichage des exercices.

 - Création de composants réutilisables pour les données.

 - Intégration du service d'accès aux données.

 - Tâches (Détails de l'implémentation) :

 - Page d'accueil (HomePage.tsx)

 - UI : Utiliser IonGrid pour une mise en page "responsive".

 - Composants : Créer un composant ExerciseCard.tsx pour afficher les exercices (titre, description). Utiliser IonCard.

 - Service : Créer src/services/ExerciseService.ts. Implémenter une fonction fetchExercises() pour appeler l'API et récupérer la liste.

 - Logique : Utiliser useEffect pour appeler fetchExercises() au chargement de la page. Utiliser useState pour stocker et afficher la liste.

 - Page de l'exercice (ExercisePage.tsx)

 - UI : Créer une page détaillée qui affiche le contenu d'un exercice.

 - Logique : Récupérer l'ID de l'exercice depuis la route (useParams). Utiliser useEffect pour appeler l'API et obtenir les questions et les options.

 - Tests et validation

 - Vérifier que les données sont bien affichées.

 - S'assurer que les composants sont réutilisables.

## Sprint 3 : Interactivité et Profil utilisateur (Durée estimée : 7 jours)
- Objectifs :

 - Permettre aux utilisateurs de répondre aux exercices et de soumettre leurs réponses.

 - Développer la page de profil avec le tableau de bord des scores.

 - Préparer l'application pour le déploiement.

 - Tâches (Détails de l'implémentation) :

 - Fonctionnalité de soumission

 - Logique : Dans ExercisePage.tsx, gérer l'état des réponses sélectionnées. Créer une fonction handleSubmit() qui envoie les réponses à l'API via ExerciseService.ts (méthode POST).

 - Feedback : Afficher un retour visuel à l'utilisateur (IonAlert, IonToast) pour indiquer si les réponses sont correctes ou incorrectes.

 - Page de profil (ProfilePage.tsx)

 - UI : Utiliser IonCard pour afficher les informations de l'utilisateur et les statistiques.

 - Service : Créer src/services/UserService.ts avec une fonction fetchUserProfile() pour récupérer les données.

 - Logique : Utiliser useEffect et useState pour afficher les informations de l'utilisateur.

 - Déploiement

 - Optimisation : Exécuter npm run build pour générer une version optimisée.

 - Capacitor :

 - npx cap add android (si nécessaire)

 - npx cap sync

 - Finalisation : Ouvrir le projet dans Android Studio ou Xcode.

 - Effectuer une session de tests de bout en bout pour garantir le bon fonctionnement de toutes les fonctionnalités.