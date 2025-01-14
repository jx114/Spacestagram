## Spacestagram

A gallery of NASA's Astronomy Picture of the Day, allows for viewing that updates everyday!

## Table of Contents
1. [Motivation](#Motivation)
1. [Demo](#Demo)
1. [Tech](#Tech)
1. [Features](#Features)
1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Installing Dependencies](#installing-dependencies)


## Motivation
> This is Shopify's Front End Developer Intern Challenge - Winter 2022, even though the requirment was for front-end only, I wanted to make a deployed full-stack application because I really enjoy working with data and backend system designs.
* I also wanted to challenge myself further by using a language(Typescript) that I was unfamiliar with and also with a concept(React Hooks) that I did not really touch until now. I opted for a more minimalistic design because the contrast between the darkness in space and the white plain background really highlights the pictures.
* One of my main motivation is that I was really glad that the API is astronomy related because I have always had a fascination with outer space and one of my life goals is to live in space and to observe Earth and if I am lucky enough, I would be writing software whilst in space.
* In order to keep myself on track, I used [Trello](https://trello.com/b/oYen6r6L/spacestagram) a ticketing system to track my progress and ensure I continue to output work at a timely matter

## Demo
[Check out the website!](http://ec2-54-219-138-150.us-west-1.compute.amazonaws.com/)
![](https://media2.giphy.com/media/zT5UG1ZAPvmTZxC0sz/giphy.gif?cid=790b76113866cc584d0564f3111c08ede5b508c1281bb89e&rid=giphy.gif&ct=g)

## Tech
* Front End
  * [React](https://reactjs.org/)
  * [TypeScript](https://www.typescriptlang.org/)
  * [Material UI](https://mui.com/) for UI styling
* Backend
  * [MongoDB](https://www.mongodb.com/) & [Mongoose](https://mongoosejs.com/)
  * [Express](https://expressjs.com/) & [Node](https://nodejs.dev/)
  * [Axios](https://www.npmjs.com/package/axios) to connect to the API
* Hosting
  * [Docker](https://www.docker.com/)
  * [AWS EC2](https://aws.amazon.com/ec2/)

## Requirements


- Node v14.16.0

- npm v6.14.11

- MongoDB v4.4.0


## Features
* Built using Material UI and React consists of image viewing, modal popup, alerts, sharing/likes.
* Dynamic modal viewer for each photo to display details of each photo.
* Persistent likes via on-click functionality through `MongoDB`.
* Modularized components.
* Containerized with Docker and deployed on AWS.
* Photos chosen via on-click functionality.
* Photo source links shared.
* Updates on every new day with a new photo.

## Directory
```bash
├── Dockerfile
├── README.md
├── docker-compose.yml
├── package-lock.json
├── package.json
├── build
│   ├── asset-manifest.json
│   ├── index.html
│   └── static
│       ├── css
│       ├── js
│       └── media
├── public
│   └── index.html
├── server
│   ├── controllers
│   │   └── APOD.js
│   ├── index.js
│   ├── models
│   │   └── APOD.js
│   ├── routes
│   │   └── api
│   │       └── index.js
│   └── utils
│       └── index.js
├── specs
├── src
│   ├── components
│   │   ├── App.tsx
│   │   ├── Footer
│   │   │   └── Footer.tsx
│   │   ├── Header
│   │   │   └── Header.tsx
│   │   ├── ImageViewer
│   │   │   └── ImageViewer.tsx
│   │   ├── PhotoList
│   │   │   ├── Photo
│   │   │   │   └── index.tsx
│   │   │   └── index.tsx
│   │   └── utils
│   │       ├── formatFromNasa.ts
│   │       ├── styles.ts
│   │       └── types.ts
│   ├── index.tsx
│   └── react-app-env.d.ts
└── tsconfig.json
```
## Available Scripts

## Install Dependencies
In the project directory, you can run:

### `npm install`

### `npm start`

Runs the app and server with [concurrently](https://www.npmjs.com/package/concurrently) in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser and server [http://localhost:3017](http://localhost:3017).

### `npm test`
WIP
### `npm build`
Runs the app in production.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser).

[LinkedIn](https://www.linkedin.com/in/jacky-xia-8aa261161//)
