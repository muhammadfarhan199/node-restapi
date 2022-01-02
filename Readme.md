# Nodejs Rest API with Mongoose

# Environment vars

This project uses the following environment variables:

| Name      | Description            | Default Value |
| --------- | ---------------------- | ------------- |
| PORT      | Port to run the app    | "6789"        |
| MONGO_URI | MongoDB Connection URI | ""            |

# Pre-requisites

- Install [Node.js](https://nodejs.org/en/)

# Getting started

- Clone the repository

```
git clone  <git lab template url> <project_name>
```

- Install dependencies

```
cd <project_name>
npm install
```

- Build and run the project

```
npm start
```

Navigate to `http://localhost:6789/getrecords`

### Running the build

All the different build steps are orchestrated via [npm scripts](https://docs.npmjs.com/misc/scripts).
Npm scripts basically allow us to call (and chain) terminal commands via npm.

| Npm Script | Description                                                                        |
| ---------- | ---------------------------------------------------------------------------------- |
| `start`    | Runs full build and runs node on dist/index.js. Can be invoked with `npm start`    |
| `dev`      | Runs full build before starting all watch tasks. Can be invoked with `npm run dev` |
| `test`     | Runs build and run tests using jest. Can be invoked using `npm test`               |
