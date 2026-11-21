# Réponses aux questions — TP CI/CD GitHub Actions

1) Quelle est la différence entre l'intégration continue (CI), la livraison continue et le déploiement continu (CD) ?
- Intégration continue (CI) : consiste à intégrer régulièrement le code et à effectuer automatiquement des vérifications et des tests pour détecter rapidement les erreurs.
- Livraison continue (Continuous Delivery) : permet de préparer automatiquement une version de l'application prête à être déployée, avec généralement une validation manuelle avant la production.
- Déploiement continu (Continuous Deployment) : permet de déployer automatiquement en production chaque modification qui réussit toutes les vérifications.

2) Pourquoi node_modules ne doit-il pas être versionné, alors que package-lock.json doit l'être ?
- Le dossier node_modules contient les dépendances installées et peut être très volumineux. Il est inutile de le versionner car on peut le recréer avec npm install ou npm ci.
- En revanche, package-lock.json conserve les versions exactes des dépendances afin de garantir des installations cohérentes sur différentes machines et dans GitHub Actions.

3) Que se passerait-il dans la step 2 si l'on supprimait la step 1 (actions/checkout) ? Pourquoi ?
- Sans actions/checkout@v4, le code du dépôt ne serait pas récupéré sur le runner.
- La commande ls pourrait s'exécuter, mais elle n'afficherait pas les fichiers du projet comme server.js ou package.json, car ils n'auraient pas été téléchargés.

4) Pourquoi chaque job doit-il refaire le checkout du code alors que job-1 l'a déjà fait ?
- Chaque job s'exécute dans un environnement indépendant, généralement sur un runner différent
- Les fichiers récupérés par job-1 ne sont pas automatiquement partagés avec les autres jobs
- Chaque job doit donc effectuer son propre actions/checkout@v4 pour accéder au code source

5) Lors de l'exécution #3, pourquoi job-2 a-t-il réussi alors que job-4 a été ignoré ?
- job-2 a réussi parce qu'il dépend uniquement de job-1, qui s'est exécuté correctement
- En revanche, job-4 dépend à la fois de job-2 et de job-3
- Comme job-3 a échoué à cause de la commande inexistante lss, GitHub Actions a ignoré job-4 (Skipped)
- Cela montre que needs contrôle les dépendances entre les jobs

6) Définissez les notions de workflow, job, step et runner dans GitHub Actions.
- Workflow : processus automatisé défini dans un fichier YAML placé dans .github/workflows/
- Job : ensemble de steps exécutées sur un même runner
- Step : étape d'un job qui exécute une action ou une commande
- Runner : machine chargée d'exécuter un job GitHub Actions, par exemple une machine virtuelle Ubuntu

7) Quelle est la différence entre uses et run dans une step ?
- uses permet d'utiliser une action existante, comme actions/checkout@v4, pour récupérer le code du dépôt
- run permet d'exécuter directement une commande shell, comme ls ou echo "Hello, job 1"

8) À quoi sert needs ? Comment s'exécutent des jobs qui n'en déclarent pas ?
- needs sert à définir les dépendances entre les jobs et à contrôler leur ordre d'exécution
- Par exemple, needs: [job-2, job-3] signifie que le job doit attendre la réussite de job-2 et job-3
- Sans needs, les jobs sont indépendants et peuvent s'exécuter en parallèle

9) Pourquoi déclencher le pipeline sur pull_request en plus de push ?
- L'événement push permet de vérifier automatiquement le code lorsqu'il est envoyé sur la branche main
- L'événement pull_request permet de vérifier les modifications proposées avant leur fusion dans main
- Cela aide à détecter les erreurs et à éviter d'intégrer du code défectueux dans la branche principale