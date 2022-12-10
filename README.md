# CS222 Course Project Group 91

Shoe Annex Web Forum 
# Summary of Introduction

- Shoe Annex is a community forum made for and by sneakerheads. With the ability to post, discuss, and see the top-trending shoes in the sneaker community, Shoe Annex is the central hub for all things 'shoes'. In creating this project, we not only wanted to develop a prototype for a very real and plausible product but also hone our programming and software engineering skills. We discovered that there wasn't really an exclusively shoe related forum that people could interact on, so we decided to create one to give the community the platform to interact and learn more about their favorite styles and shoes.


# Technical Architecture

Our Project follows the MERN stack, which stands for MongoDB, Express.js, React,js, and Node.js.

For the frontend, we chose to use React.js for its accessiblity and thorough documentation. It's ability to create interactive frontend elements and its compatibility with backend elements made it better to work with when deciding on how we wanted to connect frontend and backend together.

The next parts we utilized was Express.js and Node.js. For Node.js we made a server for the Express.js framework to function on. The server opened a port to interact with the backend that would eventually connect with our React frontend. We connected these aspects by taking the information received from the React frontend and transferring it to the fetch functions that will execute the GET and POST requests required to get and add information to the database. 

MongoDB itself was our preferred choice for data storage because of the technologies being built around all 4 working together. It made writing and receiving from the database easier due to its compatability with Node and Express.

## To install the required modules

In the project's main directory, you can run:
### `npm i mongodb`

You may also need to download Node.js, which you can find at [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
## To use our website

First, in the project's /shoe-yelp/server/ directory, you can run:
### `npm run devStart`

In order to run the server.
The page will reload automatically when you make changes.

In the project's /shoe-yelp/client/src/ directory, you can run:
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload automatically when you make changes.\
You may also see any lint errors in the console.

# Group Members and Their Roles

Dylan Brennan 
- Worked on the integration between frontend and backend using Express.js and Node.js
- Created the server to facilitate communication between the two sides of the project and for data transfer

Emmanuel Buabeng 
- Added in the signin/login page components to the website
- Created button for post creation 

Fay Lin 
- Worked on the styling for the whole project using CSS
- Created the central frontend architecture of the website using React.js 

Kyle Polson
- Created the database collections within MongoDB to be accessed from the site 
- Created fucntions to manipulate data from the database to be used by Node.js
