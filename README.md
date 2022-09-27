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
4. Create a free Twilio account to generate the following:
```
Auth Token 

Account Sid 

```

5. Update .env_example file or ./knexfile.js file with your connection details and database to match.

If using the .env_example file make sure to rename it to .env

```
PORT = <PORT_NUMBER>
DB_HOST = <HOST_ADDRESS>
DB_USER = <YOUR DB USERNAME>
DB_PASSWORD = <YOUR DB PASSWORD>
DB_DATABASE = chefyData
ACCOUNT_SID = <YOUR ACCOUNT SID GENERATED FROM CREATING A TWILIO ACCOUNT>
AUTH_TOKEN = <YOUR AUTH TOKEN GENERATED FROM CREATING A TWILIO ACCOUNT>
```

6.Run migrations file.

```
npm run migrate or npx knex migrate:latest
```

7. Run seed file to populate data on the database.

```
npm run seed or npx knex seed:run
```

8. Start the server.

```
npm run dev or node server.js
```
