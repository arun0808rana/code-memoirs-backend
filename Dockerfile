FROM node:8.17.0-alpine

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .

CMD ["node", "index.js"]