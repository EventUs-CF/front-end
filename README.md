## EventUs Front End

![eventUs](src/assets/eventUs.jpg)

**Author**: Lacy Hogan, Michael Castor, Ryan Groesch, Sean Miller 
**Version**: 1.0.0

## Overview
<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for a Code Fellows 301 class. (i.e. What's your problem domain?) -->
This application is designed to be a social media oriented around Events. The concept is that as a user you can sign-up in order to create, view and attend (running and drinking) events that are near the user. 

The original customer is for a local Hashing club to alleviate the need to post in multiple social media platforms, provide a streamlined UI for events in the area near the user and persist the organized data in an efficient manner. 

The application utilizes a MERN Stack (MongoDB, Express.js, React/Redux and Node.js) with OAuthorization to accomplish this. 

## Getting Started
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->
### In Your .env File:
- PORT: 8080
- API_URL: http://localhost:7000

To install dependencies, run:

```npm i```

```nodemon``` or ```npm start``` This will start the server and tell you what port you're on

To start the db and test the routes, from the command line, enter:

```npm run dbon``` This turns MongoDB on

```npm run test``` Enter this line in a separate command line tab. This initiates the tests via jest

```npm run dboff``` This turns off MongoDB

## Architecture
JavaScript, Node, express, babel, webpack, dotenv, enzyme, jest, prop-types, react, redux, superagent, uuid

## Change Log
<!-- Use this are to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an examples:
01-01-2001 4:59pm - Application now has a fully-functional express server, with GET and POST routes for the book resource. -->

## Credits and Collaborations
<!-- Give credit (and a link) to other people or resources that helped you build this application. -->

## Workflow
#### Entity-Relationship (ER) Model
![eventUs-workflow](src/assets/eventUs-entity-relationships.png)