FROM node:23.11.0 

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .

CMD ["npm","run","dev"]