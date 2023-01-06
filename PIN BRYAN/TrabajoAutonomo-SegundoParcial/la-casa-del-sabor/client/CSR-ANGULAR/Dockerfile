# PASO 1: BUILD
FROM node:16.16.0 as build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build --prod

# PASO 2
FROM nginx:latest

COPY --from=build /usr/src/app/dist/client /usr/share/nginx/html

COPY --from=build /usr/src/app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
