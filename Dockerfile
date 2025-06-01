#stage 1 build angular app
FROM node:22 as build
WORKDIR /app
COPY /package*.json ./
RUN npm install
COPY . .
RUN npm run build

#STAGE 2 SERVE THE ANGULAR APP
FROM nginx:alpine
COPY --from=build /app/dist/food-delivery-app /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
