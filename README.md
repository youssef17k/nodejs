# TP DevOps - CI/CD avec GitHub Actions

## Présentation
Ce projet consiste à créer une application Node.js avec Express et à automatiser un pipeline CI/CD multi-jobs avec GitHub Actions.

## Installation et exécution
1. Cloner le projet : git clone https://github.com/youssef17k/nodejs.git
2. Accéder au dossier :  cd nodejs
3. Installer les dépendances :  npm ci
4. Démarrer le serveur : npm start
5. Ouvrir http://localhost:3000 : Résultat attendu : Hello World!

## Pipeline CI/CD
Le pipeline comporte quatre jobs :
- job-1 : premier job
- job-2 : dépend de job-1
- job-3 : dépend de job-1
- job-4 : dépend de job-2 et job-3

Chaque job possède trois steps :
1. Checkout du code
2. Affichage des fichiers avec ls
3. Affichage d'un message avec echo

## Tests du pipeline
- Exécution #1 : succès du premier job
- Exécution #2 : succès des quatre jobs
- Exécution #3 : échec volontaire de job-3
- Exécution #4 : correction de l'erreur

## Questions de synthèse

### 1. Workflow, job, step et runner
Workflow : fichier YAML définissant un processus automatisé dans GitHub Actions
Job : ensemble de steps exécutées sur un même runner
Step : étape d'un job exécutant une action ou une commande
Runner : machine qui exécute les jobs du workflow

### 2. Différence entre uses et run
uses permet d'utiliser une action GitHub existante
run permet d'exécuter une commande shell, par exemple ls ou echo.

### 3. Rôle de needs
needs définit les dépendances entre les jobs
Un job utilisant needs attend la réussite des jobs dont il dépend
Sans needs, les jobs peuvent s'exécuter en parallèle

### 4. Pourquoi utiliser pull_request et push ?
push permet de vérifier le code après son envoi sur une branche
pull_request permet de vérifier les modifications proposées avant leur fusion dans main
Cela permet de détecter les erreurs avant l'intégration du nouveau code

## Analyse des erreurs
Une erreur volontaire a été introduite dans job-3 en remplaçant ls par lss
Cette commande inexistante provoque l'échec de job-3
job-2 peut réussir, mais job-4 est ignoré car il dépend de job-2 et de job-3
Après correction de lss en ls, le pipeline doit réussir