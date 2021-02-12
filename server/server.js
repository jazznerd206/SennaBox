const express = require("express");
const path = require('path');
let PORT = process.env.PORT || 8080;
let app = express();

// Express middleware
// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// add routes module
const routes = require("./routes");

// Add routes, both API and view
app.use(routes);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./html/index.html"));
});

app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
});