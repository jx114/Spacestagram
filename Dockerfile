FROM node:14.16.0

ENV NODE_ENV=production

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production
RUN npm install react-scripts@4.0.3 -g

COPY . .

CMD ["npm", "run", "dockerStart"]
