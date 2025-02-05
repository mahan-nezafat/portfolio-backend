FROM node:20

ARG IP

ENV IP=${IP}

WORKDIR /backend

COPY package*.json ./

COPY . .

RUN npm install



EXPOSE 3000

CMD [ "npm", "start" ]