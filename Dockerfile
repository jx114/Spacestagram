FROM node:14.16.0

ENV NODE_ENV=production

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "run", "start"]
