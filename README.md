# JS Game Keep White Space

Un petit jeu développé en JavaScript, avec une interface web, des tests unitaires et des tests fonctionnels.  
Le projet est automatisé avec GitHub Actions pour vérifier le code, lancer les tests et déployer le site sur GitHub Pages.

## Sommaire

- [À propos](#à-propos)
- [Objectifs du projet](#objectifs-du-projet)
- [Fonctionnalités](#fonctionnalités)
- [Technologies utilisées](#technologies-utilisées)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Lancer le projet](#lancer-le-projet)
- [Tests](#tests)
- [Docker](#docker)
- [CI/CD avec GitHub Actions](#cicd-avec-github-actions)
- [Déploiement GitHub Pages](#déploiement-github-pages)
- [Publication de l'image Docker sur GHCR](#publication-de-limage-docker-sur-ghcr)
- [Arborescence du projet](#arborescence-du-projet)
- [Contribuer](#contribuer)
- [Licence](#licence)

## À propos

Ce projet est un jeu web en JavaScript.  
Le but est de proposer une application jouable dans le navigateur, avec une structure de code propre, des tests automatisés et une chaîne de déploiement simple à maintenir.

Le dépôt contient aussi une configuration GitHub Actions qui permet :
- de lancer des vérifications automatiques,
- de déployer le site sur GitHub Pages,
- et éventuellement de pousser une image Docker dans GitHub Container Registry (GHCR).

## Objectifs du projet

Les objectifs principaux sont :
- développer un jeu fonctionnel et jouable dans le navigateur,
- structurer le code en modules réutilisables,
- vérifier la logique avec des tests unitaires,
- valider le comportement réel avec des tests fonctionnels,
- automatiser le déploiement avec GitHub Actions,
- rendre le projet facile à lancer, tester et déployer.

## Fonctionnalités

- Jeu accessible depuis un navigateur.
- Interface graphique basée sur HTML/CSS/JavaScript.
- Gestion d’éléments de jeu via canvas.
- Tests unitaires pour valider la logique.
- Tests fonctionnels pour vérifier le comportement dans le navigateur.
- Déploiement automatique sur GitHub Pages.
- Option de publication d’une image Docker sur GHCR.

## Technologies utilisées

- JavaScript
- HTML
- CSS
- Node.js
- npm
- Playwright pour les tests fonctionnels
- Jest pour les tests unitaires
- Docker
- GitHub Actions
- GitHub Pages
- GitHub Container Registry (GHCR)

## Prérequis

Avant de lancer le projet, il faut avoir :
- Node.js installé,
- npm installé,
- Git installé,
- Docker installé si tu veux utiliser le conteneur,
- un navigateur compatible pour les tests fonctionnels.

## Installation

Clone le dépôt :

```bash
git clone https://github.com/<ton-username>/<ton-repo>.git
cd <ton-repo>
```

Installe les dépendances :

```bash
npm install
```

Si le projet utilise Playwright, installe aussi les navigateurs nécessaires :

```bash
npx playwright install
```

## Lancer le projet

Pour lancer le projet en local, utilise la commande adaptée à ton `package.json`.

Exemple :

```bash
npm start
```

Ou, si tu utilises un serveur de développement :

```bash
npm run dev
```

Ensuite ouvre le navigateur sur l’adresse locale indiquée dans le terminal.

## Tests

Le projet contient deux types de tests.

### Tests unitaires

Les tests unitaires vérifient la logique interne du jeu, par exemple :
- les calculs,
- les classes utilitaires,
- les états du jeu,
- les fonctions de mouvement ou de score.

Commande possible :

```bash
npm test
```

### Tests fonctionnels

Les tests fonctionnels vérifient le comportement réel de l’application dans le navigateur.  
Ils permettent de s’assurer que :
- la page se charge correctement,
- le conteneur principal existe,
- les canvas sont bien créés,
- l’interface réagit comme prévu.

Commande possible :

```bash
npm run test:functional
```

Ces tests utilisent généralement Playwright.

### Lancer tous les tests

Selon ta configuration, tu peux aussi avoir une commande globale comme :

```bash
npm run test
```

## Docker

Le projet peut être exécuté dans un conteneur Docker.

### Construire l’image

```bash
docker build -t js-game .
```

### Lancer le conteneur

```bash
docker run -p 8080:80 js-game
```

Si ton image expose un autre port, adapte la commande en conséquence.

### Intérêt de Docker

Docker permet de :
- standardiser l’environnement,
- éviter les différences entre machines,
- faciliter le déploiement,
- rendre le projet plus simple à partager.

## CI/CD avec GitHub Actions

Le dépôt utilise GitHub Actions pour automatiser certaines tâches :
- vérification du code,
- lancement des tests,
- déploiement automatique,
- publication d’artefacts selon les workflows configurés.

Un workflow peut être déclenché :
- à chaque push,
- ou manuellement via `workflow_dispatch`.

Cela permet d’avoir un projet plus fiable, car chaque modification est testée automatiquement.

## Déploiement GitHub Pages

Le site est déployé sur GitHub Pages à partir d’un workflow GitHub Actions.  
Une fois le pipeline terminé avec succès, l’application est accessible via l’URL GitHub Pages du dépôt.

Ce système permet de publier automatiquement le projet à chaque modification de la branche principale.

## Publication de l’image Docker sur GHCR

Le projet peut aussi publier une image Docker dans GitHub Container Registry.

### Principe

Le workflow :
1. se connecte à GHCR,
2. construit l’image,
3. lui attribue des tags,
4. pousse l’image dans le registry GitHub.

### Exemple d’image

```bash
ghcr.io/<ton-username>/<ton-repo>:latest
```

### Utilisation

Pour récupérer l’image :

```bash
docker pull ghcr.io/<ton-username>/<ton-repo>:latest
```

Pour la lancer ensuite :

```bash
docker run -p 8080:80 ghcr.io/<ton-username>/<ton-repo>:latest
```

## Arborescence du projet

Exemple d’organisation possible :

```bash
.
├── src/
├── tests/
├── public/
├── Dockerfile
├── package.json
├── README.md
└── .github/
    └── workflows/
        ├── test.yml
        ├── deploy.yml
        └── docker.yml
```

Adapte cette partie à la vraie structure de ton dépôt.

## Contribuer

Si tu veux améliorer le projet :

1. crée une branche dédiée,
2. fais tes modifications,
3. lance les tests,
4. vérifie que le workflow passe,
5. ouvre une pull request.

Bonnes pratiques :
- garder le code lisible,
- écrire des tests quand c’est utile,
- éviter de casser les sélecteurs utilisés par les tests fonctionnels,
- documenter les changements importants.

## Licence

Ajoute ici la licence de ton projet, par exemple :

- MIT
- GPL
- ou aucune licence spécifique si ce n’est pas encore défini.
