# Getting Started

`git clone https://github.com/toukolonka/Name-App-Backend.git`

`cd Name-App-Backend`

`npm install`

`npm start` - runs the application on localhost:3001

# Info

You can find the REST API on localhost:3001/api/names

You can find REST API for single name on `http://localhost:3001/api/names/*name*` for example `http://localhost:3001/api/names/Ville`

Application contains three different routes:

`/` - Names ordered by amount

`/byname` - Names ordered in alphabetical order

`/total` - Total number of names

You can filter names by writing into the input box on the top right corner.

If you are interested in frontend code, please check https://github.com/toukolonka/Name-App-Frontend.git
