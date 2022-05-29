const express = require('express');
const SSLCommerzPayment = require("sslcommerz");
const bodyParser = require('body-parser')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose');
const path = require("path");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const HomeRouter = require("./Routers/HomeRouter");
const loginRouter = require("./Routers/loginRouter");
const inboxRouter = require("./Routers/inboxRouter");
const usersRouter = require("./Routers/userRouter");
const projectRouter = require("./Routers/projectRouter");
const ngoRouter = require("./Routers/ngoRouter");
const donationRouter = require("./Routers/donationRouter");
const paymentRouter = require("./Routers/paymentRouter");
const {
    notFoundHandler,
    errorHandler,
  } = require("./Middlewares/common/errorHandler");
  
dotenv.config();
app.use(express.json());

app.use(express.urlencoded({ extended: true })); 
app.use('/',express.static(path.join(__dirname, "public")));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost:27017/NGO-Donation" )
.then(()=> console.log("connected successfully"))
.catch((err)=> console.log(err));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());
app.use('/payment',paymentRouter);
app.use('/home',HomeRouter);
app.use('/ngo',ngoRouter);
app.use('/donate',donationRouter);
app.use('/project',projectRouter);
app.use('/',loginRouter);
app.use("/users", usersRouter);
app.use("/inbox", inboxRouter);

app.use(notFoundHandler);


app.use(errorHandler);

app.listen(process.env.PORT, () =>
  console.log(`Server is listening on port ${process.env.PORT}!`),
);
