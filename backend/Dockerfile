FROM node:8.11.3-alpine


WORKDIR /usr/src/app

# Copy app and setting it up
COPY . /usr/src/app
RUN npm install

EXPOSE 4000

ENTRYPOINT "dev-entrypoint.sh"