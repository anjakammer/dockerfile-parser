FROM node:8-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install > /dev/null 2>&1

COPY . .

CMD [ "yarn", "start" ]
