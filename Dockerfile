FROM node:latest as frontend
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run build

FROM nginx as production-stage
RUN mkdir /app
COPY --from=frontend /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80