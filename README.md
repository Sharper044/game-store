# Stuart Harper's Board Game Store

Total Hours applied to this project: 26

I was given the following challenge: 

"Your task is to build a simple online store that includes:

* A store landing page
* A method for showing additional description and options about a product (such as choosing quantity)
* A shopping cart
* A customer profile page behind a login
 

"Additional Details:

* The site backend should treat the products and customer profile information as though it were pulled from a database. If you want to include a simple database that is fine, however, calling a JSON file is sufficient.
* See [https://printandmail.byu.edu/laser](https://printandmail.byu.edu/laser) for an example of what a list of products and additional details when selecting a product might look like. Please note: you do not have to build anything as complex as that site. Products do not need to require any additional customization beyond selecting quantity.
* The shopping cart should allow each customer to add or remove items and change item quantities. Shopping carts should be unique to each customer (if two people are visiting the site, they will each have their own shopping cart).
* The customer profile page should include information about the customer (such as name, email). That information should be editable. Again, it is not necessary to include a database; reading from and writing to JSON files is sufficient.

I had hoped to finish the project in a week, but I did not have enough time available that week to do so.

In its current state the server works and is ready for testing. It is connected to an actual database that I have setup. There has been very little work done on the front end, but I do plan on finishing this project and making it better.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

1) fork or clone repo.
2) run 'npm i' or 'yarn install' in your terminal to install all packages.
3) contact me for a copy of the .env.local file, and place it in the root of the project.
4) run 'nodemon' in the terminal to start a local copy of the server.
5) run 'npm start' or 'yarn start' in the terminal to begin running a local copy of the front end.

## Deployment

I currently have this hosted on digital ocean if you have any improvements on this please contact me.

## Built With

Backend:
* Javascript
* Node.js
* [Express](https://expressjs.com/) - Node.js server framework.
* [Massive](https://massive-js.readthedocs.io/en/v2/) - PostgreSQL-specific data access tool.
* [Heroku](https://dashboard.heroku.com/apps/game-store-portfolio) - External database
* PostgreSQL

Frontend:
* Javascript/JSX
* [React](https://reactjs.org/) - The web framework used
* [NPM](https://www.npmjs.com/) - Dependency Management
* [Redux](https://redux.js.org/) - State Management
* [Axios](https://www.npmjs.com/package/axios) - Used to handle http requests.
* [Material-UI](https://material-ui.com) - 3rd party component and styling library based on Google's material specification.

## Lessons Learned Along The Way

Initially I tried to build this using Typescript instead of Javascript. I have been using Typescript for the last 8 months, and it is a powerful tool and can increased development speed once it is learned and properly configured. However I was unable to get the configuration to work in time and had to revert to Javascript. The lesson I learned from this is that when coding on a tight deadline, it is best to keep things simple and not include things that are just nice to have that dont meet MVP.

The same could also be said for the tool I planed on using for authentication. On top of Express sessions I planed on using Auth0 for authentication of the users. This is a tool I have used over the last year, and I am familiar with it.I use it because I am of the opinion that holding such sensitive data as passwords is best handled by a third party that knows a lot more about cyber security than I do. But fighting with the configuration cost me valuable time, and where this was a tight deadline, I should have used Express sessions for the whole thing from the beginning.

At some point, I plan on replacing the Javascript on the front and back ends with Typescript/TSX. I also plan on eventually integrating Auth0. It also is upsetting to me that I never put any tests in, and so I plan on adding a full set of test on the entire system. I also want it hosted ether through heroku or digital ocean eventually.

## Authors

* **Stuart Harper** - *Initial work* - [Sharper044](https://github.com/Sharper044)

## Acknowledgments

* I want to thank my wife, Summer 'The Amazing' Harper, for being so supportive. After coming home from two jobs I normally take care of the children and provide her with some relief, but all this week she has been essentially running the house on her own, and giving me all the time I could get in the evenings to work on this. To my Amazing wife... I salute you!