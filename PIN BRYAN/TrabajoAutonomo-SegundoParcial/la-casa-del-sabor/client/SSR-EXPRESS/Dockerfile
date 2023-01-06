FROM node:16.16.0 as build-step

RUN npm install -g ts-node

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN npm install

ENV NODE_ENV=production

EXPOSE 4000

CMD [ "npm", "start" ]