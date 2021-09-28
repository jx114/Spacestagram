FROM node:14.16.0
ENV NODE_ENV=production
ENV CONNECTIONSTRING='mongodb://mongo:27017/spacestagram'
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production
RUN npm install react-scripts -g
COPY . .
RUN npm run build
CMD ["npm", "run", "dockerStart"]
