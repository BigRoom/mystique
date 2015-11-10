FROM node:5.0.0
MAINTAINER Alex Bierwagen <me@alexb.io>

COPY . /src
WORKDIR /src

RUN npm install
RUN npm run build

EXPOSE 8080

CMD npm run deploy
