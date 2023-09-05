/** Database for lunchly */

// const pg = require("pg");

// const db = new pg.Client("postgresql:///lunchly");

// db.connect();

// module.exports = db;


const { Client } = require("pg");

let DB_NAME;

if (process.env.NODE_ENV === "test") {
    DB_NAME = "lunchly_test";
} else {
    DB_NAME = "lunchly";
}

const db = new Client({
    host: "/var/run/postgresql/",
    database: DB_NAME
});

db.connect();

module.exports = db;
