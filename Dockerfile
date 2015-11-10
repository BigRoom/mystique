FROM node:5.0.0
MAINTAINER Alex Bierwagen <me@alexb.io>

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build

CMD npm run deploy
