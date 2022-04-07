FROM ubuntu:trusty

WORKDIR /home/app
COPY ./package.json /home/app/package.json

RUN apt-get update
RUN apt-get -y install curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_11.x  | bash -
RUN apt-get -y install nodejs --force-yes
RUN npm install

COPY src src

CMD NODE_NO_WARNINGS=1 node src/server.js