Create A Rest API

1) npm init -y
2) npm install -D typescript
3) npm install -D ts-node
4) npm install -D nodemon
5) Create tsconfig.js file
	{
    "compilerOptions": {
        "module": "NodeNext",
        "moduleResolution": "node",
        "baseUrl": "src",
        "outDir": "dist",
        "sourceMap": true,
        "noImplicitAny": true,
    },
    "include": ["src/**/*"]
}

6) Create a nodemon.json
{
    "watch": ["src"],
    "ext":".ts,.js",
    "exec": "ts-node ./src/index.ts"
}
7) Create a /src folder then add a index.ts or app.ts.
8) In /index.ts 
	import express from "express";
	import http from "http";
	import bodyParser from "body-parser";
	import cookieParser from "cookie-parser";
	import compression from "compression";
	import cors from "cors";

	const app = express();

	app.use(cors({
    		credentials: true,
	}))

	app.use(compression());
	app.use(cookieParser());
	app.use(bodyParser.json());

	const server = http.createServer(app)

	server.listen(8080, () => {
    		console.log('Server running on http://localhost:8080/');
	});

If using typescript insatall types
	npm i -D @types/express
	npm i -D @types/body-parser
	npm i -D @types/cookie-parser
	npm i -D @types/cors
	npm i -D @types/compression
7.) npm install --save sequelize
8.) npm install --save mysql2

DB Connection

/index.ts
import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
const { sequelize, connectToDB } = require("./db");

const app = express();
const PORT = 3000;

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(PORT, async () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  await connectToDB();
});


/db.js
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("test", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

const connectToDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = { sequelize, connectToDB };   


```USING SEQUELIZE CLI / USING PRISMA => https://www.youtube.com/watch?v=CQcaeIhVB8c```

```Typescript data modeling
https://www.youtube.com/watch?v=VyEKwp6Q4fY&t=1528s```


9.)npm i -g sequelize-cli


SEQEULIZE COMMANDS
10.) run commands
```Commands:
  sequelize db:migrate                        Run pending migrations
  sequelize db:migrate:schema:timestamps:add  Update migration table to have timestamps
  sequelize db:migrate:status                 List the status of all migrations
  sequelize db:migrate:undo                   Reverts a migration
  sequelize db:migrate:undo:all               Revert all migrations ran
  sequelize db:seed                           Run specified seeder
  sequelize db:seed:undo                      Deletes data from the database
  sequelize db:seed:all                       Run every seeder
  sequelize db:seed:undo:all                  Deletes data from the database
  sequelize db:create                         Create database specified by configuration
  sequelize db:drop                           Drop database specified by configuration
  sequelize init                              Initializes project
  sequelize init:config                       Initializes configuration
  sequelize init:migrations                   Initializes migrations
  sequelize init:models                       Initializes models
  sequelize init:seeders                      Initializes seeders
  sequelize migration:generate                Generates a new migration file      [aliases: migration:create]
  sequelize model:generate                    Generates a model and its migration [aliases: model:create]
  sequelize seed:generate                     Generates a new seed file           [aliases: seed:create]

Options:
  --version  Show version number                                                  [boolean]```
  --help     Show help    

```11.) Start to run   sequelize db:create  
12.) npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
13.) npx sequelize-cli db:migrate / mamigrate sa db
14.) npx sequelize-cli db:seed:all / insert a new data to db```
