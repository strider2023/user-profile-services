FROM node:slim

WORKDIR /usr/src/app

ENV SERVER_PORT=3002
ENV DB_HOST=localhost
ENV DB_PORT=3306
ENV DB_USERNAME=root
ENV DB_PASSWORD=voldemort
ENV DB_DATABASE=puja

COPY package.json ./
RUN npm install
RUN npm install pm2 -g

COPY . ./
RUN npm run build

EXPOSE 3002
CMD ["pm2-runtime","dist/index.js"]