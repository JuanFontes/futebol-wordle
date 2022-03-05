FROM node:16.14.0-alpine3.14 AS builder
WORKDIR /app
COPY package-lock.json package.json ./
RUN npm ci
COPY . .
RUN npm run build

<<<<<<< HEAD:Dockerfile
FROM nginx:1.20.2-alpine
COPY --from=0 /app/build /usr/share/nginx/html
=======
## Production image
FROM nginx:1.20.2-alpine AS prod
COPY docker/etc/nginx/nginx.conf /etc/nginx/nginx.conf
COPY docker/etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
COPY --from=prod_builder /app/build /usr/share/nginx/html
COPY docker/build_system.sh .
RUN ./build_system.sh && rm ./build_system.sh
# port use by Nginx within docker network.
EXPOSE 8080
USER reactle

## Development image
FROM node_modules AS dev
EXPOSE 3000
CMD npm run start
>>>>>>> 7d1a95b867d250bd060c4faa244b7eff9c929f10:docker/Dockerfile
