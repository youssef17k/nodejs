
# Image de base Node.js officielle
FROM node:22-alpine

# Répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Installation des dépendances de production
COPY package*.json ./
RUN npm ci --omit=dev

# Copie du code source
COPY . .

# Port de l'application
EXPOSE 3000

# Démarrage de l'application
CMD ["node", "server.js"]
