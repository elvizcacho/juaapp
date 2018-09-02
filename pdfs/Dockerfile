FROM elvizcacho/html-pdf:latest

WORKDIR /usr/src/app

# Copy app and setting it up
COPY . /usr/src/app
RUN npm install

EXPOSE 4100

ENTRYPOINT "dev-entrypoint.sh"