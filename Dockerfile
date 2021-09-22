#Stage 1
FROM node:alpine as builder

WORKDIR /stakater-frontend

COPY package.json .

RUN yarn install

COPY . .

RUN yarn build

FROM nginx 

ENV CI=true

COPY --from=builder /stakater-frontend/build /usr/share/nginx/html

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]

