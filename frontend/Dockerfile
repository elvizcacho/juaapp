FROM node:8.11.3-alpine

# Add ngnix
RUN mkdir -p /run/nginx && apk update && apk add nginx
COPY ./nginx/dev-nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/src/app

# Copy app and setting it up
COPY . /usr/src/app
RUN npm install
RUN npm run build

EXPOSE 80

ENTRYPOINT "dev-entrypoint.sh"
