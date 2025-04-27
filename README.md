<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Author

Julius Zak
mail: zak.julius@gmail.com
phone: +1 (646) 342 2330

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

### Solution for iCapital Interview Home Assignment

This project implements a basic investor entry form with standard information fields and an option to upload a file.  
The system stores all form data in a mocked database and saves uploaded files in the `/uploads` folder, with the file name referenced in the corresponding database record.  
The **SSN** field is used as a "primary key" to uniquely identify and store investor records.

#### Mocked Database
To save time, I created a custom implementation of a mocked database instead of setting up a real relational database.  
However, NestJS provides detailed documentation on integrating with databases here: [NestJS Database Techniques](https://docs.nestjs.com/techniques/database).  
If I had more time, I would have followed these steps to implement a real database connection.  
While using this system, you can view the created records in the `mock/mockDB.json` file.

#### TailwindCSS
I integrated **TailwindCSS** into the project to enhance the user interface and make it more visually appealing.

#### File Size Verification
Currently, the system does **not** verify the uploaded file size as requested.  
Given more time, I would have implemented this feature by following the documentation provided by NestJS here: [NestJS File Upload Techniques](https://docs.nestjs.com/techniques/file-upload).

#### Additional feature in open PR
There is one open PR which I added later, just to make this app a little nicer. This PR includes client side upload file size validation + form submittion upload progress.
https://github.com/jgzak/iCapital/pull/1


## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

# rebuild tailwindcss styles
 npm run build:tailwind

# server should be started on: http://localhost:3000
```


## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

