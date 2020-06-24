FROM node:12

WORKDIR /usr/src/app

COPY ./dist /usr/src/app/dist
COPY ./package.json ./package-lock.json ./.env /usr/src/app/

RUN npm install --production
RUN npm install nodemon --global
