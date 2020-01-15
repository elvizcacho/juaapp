FROM node:8.17.0-alpine

WORKDIR /usr/src/app

# Copy app and setting it up
COPY . /usr/src/app
RUN npm install
RUN npm rebuild node-sass
RUN npm run build

EXPOSE 3100

ENTRYPOINT /usr/src/app/entrypoint.sh
