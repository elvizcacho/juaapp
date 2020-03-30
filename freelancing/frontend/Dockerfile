FROM node:12.16.1-alpine

# Add ngnix
RUN mkdir -p /run/nginx && apk update && apk add nginx
COPY ./nginx/dev-nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/src/app

# Copy app and setting it up
COPY . /usr/src/app
RUN npm install
RUN npm rebuild node-sass
RUN npm run build

EXPOSE 80

ENTRYPOINT /usr/src/app/entrypoint.sh
