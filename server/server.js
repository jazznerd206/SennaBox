const express = require("express");
const path = require('path');
const cookieParser = require('cookie-parser');
const customAuthMiddleware = require('./middleware/customAuthMid');
let PORT = process.env.PORT || 8080;
let app = express();

// .env config
require('dotenv').config();

// Express middleware
// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// use the cookie-parser to help with auth token, 
// it must come before the customAuthMiddleware
app.use(cookieParser());
app.use(customAuthMiddleware);


// add routes module
const routes = require("./routes");

// Add routes, both API and view
app.use(routes);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./html/index.html"));
});

const db = require('./models');
const syncOptions = { force: false };

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
}).catch(err => console.log(err));