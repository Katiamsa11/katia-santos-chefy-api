## About Chefy

Chefy is a web-based platform to connect chefs with households for private in-home dining experiences. Clients can search for and book the chef best suited for their event.

## 💻 Main tech Tools used for this project

Git & GitHub

### Back-End

Node/Express

#### Database

Knex/MySQL


## SET UP BACK-END

### Follow these steps to run a local instance of Chefy:

You will need node, npm , and MYSQL already installed in your computer.

1. Clone or download this repository.

2. Create a database using MYSQL and call it the following:

```
chefyData
```

3. Install server dependencies running the following on your terminal:

```
npm install
```

4. Update .env_example file or ./knexfile.js file with your connection details and database to match.

```
PORT = <PORT_NUMBER>
DB_HOST = <HOST_ADDRESS>
DB_USER = <YOUR DB USERNAME>
DB_PASSWORD = <YOUR DB PASSWORD>
DB_DATABASE = chefyData
```

5.Run migrations file.

```
npm run migrate or npx knex migrate:latest
```

6. Run seed file to populate data on the database.

```
npm run seed or npx knex seed:run
```

7. Start the server.

```
npm run dev or node server.js
```
