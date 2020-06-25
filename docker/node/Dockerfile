FROM node:12

WORKDIR /usr/src/app

COPY ./src /usr/src/app/src
COPY ./package.json ./package-lock.json ./.env /usr/src/app/

RUN npm install
RUN npm install nodemon webpack-cli --global
RUN npm run build
