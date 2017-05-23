# React Twitter Clone with Authentication

* `git clone git@github.com:dshaw1/react-twitter-clone.git`
* Install packages with npm install
* You must also install PostgreSQL (from the website or via Homebrew) and knex package globally with `npm install -g knex`
* Open the knexfile.js and enter the name of the database you are going to create as well as the name of the user for your database
* Run `createdb databaseName` with the name of the database your entered in your knexfile.js
* Enter the command `knex migrate: latest` into the terminal to update your database with the tweets and users tables
* Start dev server with `npm start`
* Visit `http://localhost:8888/`
