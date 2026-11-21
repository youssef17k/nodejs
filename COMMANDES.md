# COMMANDES - TP CI/CD GitHub Actions
## Partie 1 : Environnement
- node --version : afficher la version Node.js.
- npm --version : afficher la version npm.
- git --version : afficher la version Git.
- git config --global user.name "Nom" : configurer le nom Git.
- git config --global user.email "Email" : configurer l'adresse e-mail Git.
- git config --global --list : afficher la configuration Git.

## Partie 2 : Application Node.js
- mkdir nodejs : créer le dossier du projet.
- cd nodejs : accéder au dossier.
- npm init -y : initialiser le projet Node.js.
- npm install express : installer Express.
- code . : ouvrir le projet dans VS Code.
- npm start : démarrer le serveur Express.
- Ctrl+C : arrêter le serveur.

## Partie 3 : Git et GitHub
- git init : initialiser le dépôt Git.
- git status : vérifier l'état des fichiers.
- git add . : préparer les fichiers pour le commit.
- git commit -m "init" : créer le premier commit.
- git branch -M main : renommer la branche principale.
- git remote add origin URL : ajouter le dépôt distant.
- git remote -v : afficher les dépôts distants.
- git push -u origin main : publier la branche main.

## Partie 4 : Premier workflow
- mkdir .github : créer le dossier GitHub.
- mkdir .github/workflows : créer le dossier des workflows.
- git add .github/workflows/cicd.yml : ajouter le workflow.
- git commit -m "ci: add job-1" : enregistrer le premier job.
- git push : publier le workflow.

Commandes exécutées dans GitHub Actions :
- ls : afficher les fichiers du projet.
- echo "Hello, job 1" : afficher un message.

## Partie 5 : Pipeline multi-jobs
- git add .github/workflows/cicd.yml : préparer le workflow modifié.
- git commit -m "ci: add job-2, job-3 and job-4" : enregistrer les quatre jobs.
- git push : déclencher l'exécution #2.

## Partie 6 : Tests du pipeline
Création de l'erreur :
- lss : commande volontairement inexistante.
- git add .github/workflows/cicd.yml : préparer la modification.
- git commit -m "test: break job-3" : enregistrer l'erreur.
- git push : déclencher l'exécution #3.

Correction :
- ls : commande correcte.
- git add .github/workflows/cicd.yml : préparer la correction.
- git commit -m "fix" : enregistrer la correction.
- git push : déclencher l'exécution #4.

## Partie 7 : Livrables
- git add README.md COMMANDES.md REPONSES.md : préparer les fichiers de documentation.
- git commit -m "docs: add TP documentation" : enregistrer la documentation.
- git push : publier les livrables sur GitHub.
