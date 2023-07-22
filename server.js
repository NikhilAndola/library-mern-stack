const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config();
const app = express();
const expressLayouts = require("express-ejs-layouts");
const bodyParser = require("body-parser");

const indexRouter = require('./routes');
const authorRoute = require('./routes/authors');

app.set("view engine", 'ejs');
app.set("views", __dirname + '/views')
app.set("layout", 'layouts/layout');
app.use(expressLayouts)
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))

mongoose.connect(process.env.DATABASE_URL);

let connection = mongoose.connection;
connection.on('error', (error) => console.error("error", error))
connection.once('open', () => console.log("db connected successfully"))



app.use('/', indexRouter);

app.use("/authors", authorRoute);

app.listen(process.env.PORT || 4000, () => {
    console.log("Port running at: ", process.env.PORT || 4000);
})