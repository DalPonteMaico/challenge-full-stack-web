FROM node:alpine

WORKDIR /usr/api

COPY ./package*.json ./

RUN npm install

RUN yarn

COPY . .

EXPOSE 3000

CMD yarn start
