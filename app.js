const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send(
    '<h2>POC - Build app from Docker image</h2><img src="https://cdn.cdnlogo.com/logos/d/17/docker.svg" width="400px"><p>This POC was made possible by the nice people at Dome Global engineering and viewers like you.</p>'
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
