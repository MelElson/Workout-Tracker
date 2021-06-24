const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/shrouded-beyond", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
    userCreateIndex: true,  ///changed useCreateIndex
  useFindAndModify: false
});
mongoose.connection.on('connected', () =>
  console.log('Connected to MongoDB Endpoint')
);
mongoose.connection.on('error', (err) =>
  console.log(`Mongoose default connection error: ${err}`)
);



// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/htmlRoutes")); //add this 

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

//mongodb://localhost/shrouded-beyond-16842
//mongodb://localhost/workout