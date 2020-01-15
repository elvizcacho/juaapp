FROM node:8.17.0-alpine

WORKDIR /usr/src/app

# Copy app and setting it up
COPY . /usr/src/app
RUN npm install

EXPOSE 4200

ENTRYPOINT /usr/src/app/entrypoint.sh