const dotenv = require("dotenv")
dotenv.config();
const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const indexRoute = require('./routes');
const mongoose = require("mongoose");

app.set("view engine", 'ejs');
app.set("views", __dirname + '/views')
app.set("layout", 'layouts/layout');
app.use(expressLayouts)
app.use(express.static("public"))

mongoose.connect(process.env.DATABASE_URL);

let connection = mongoose.connection;
connection.on('error', (error) => console.error("error", error))
connection.once('open', () => console.log("db connected succefully"))



app.use('/', indexRoute);

app.listen(process.env.PORT || 4000, () => {
    console.log("Port running at: ", process.env.PORT || 4000);
})