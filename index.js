const express = require("express");
const methodOverride = require("method-override");
const cors = require('cors')
const userRouter = require("./controllers/userRouter");
const postRouter = require("./controllers/postRouter");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(cors())


app.get("/", (req, res) => {
  // Can also change just a sample size for the route
  res.send("You're Home");
});

// We can discuss what we want on each route and where it should go
app.use("/users/", userRouter);
app.use("/posts/", postRouter);


app.use((err, req, res, next) => {
  const statusCode = res.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).send(message);
});


app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'), () => {
  console.log(`Project 3 HOSTED on ${app.get('port')}`);
});
