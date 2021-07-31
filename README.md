# Offline matches result application

This is a offline frontend application for updating and viewing football matches results.

## Getting started

### Things you’ll need

- Node
- NPM / yarn package manager for Node ( we prefer yarn in development mode)
- Angular CLI


### Up and running locally

1. Pull the project down and track the develop branch
2. Make sure to set NPM_TOKEN env variable in the cli in order to access private packages
3. Run `yarn install && yarn dev`

Once you have done that then you can simply run `yarn dev` every other time to run the project in development mode.

`yarn install` will install all the dependencies needed

`yarn build` generates production version of the client

`yarn watch` generates production build with watch enabled

`yarn start` runs the app in production mode served with express server

`yarn dev` runs the app in development mode with hot-reloading

`yarn test` launches the test runner in the interactive watch mode


# Directory Structure

```
└── src
    ├── app
    │    ├── core
    │    │   ├── services
    │    │   ├── models
    │    │   ├── index.ts
    │    │   ├── core.module.ts
    │    │   └── data.ts
    │    ├── shared
    │    │    ├── match-detail
    │    │    ├── table
    │    │    └── share.module.ts
    │    │      
    │    ├── home       
    │    ├── match-table     
    │    ├── result-form      
    │    └── match-table      
    │           
    │
    │
    │
    ├── assets
    ├── environments
    ├── favicon.ico
    ├── index.html
    ├── main.ts
    ├── polyfills.ts
    ├── styles.scss
    ├── test.ts
    ├── .browserlistrc
    ├── .editorconfi
    ├── .gitignore
    ├── angular.json
    ├── karma.conf.js
    ├── package.json
    ├── README.md
    ├── server.js
    ├── tsconfig.app.json
    ├── tsconfig.json
    └── tsconfig.spec.json
    
```
