const express = require("express");

const app = express();

app.get("/", (req, res) =>
  res.json({ msg: "welcome to the ContactKeeper API..." })
);

app.use('/api/users', require('./routs/users'))
app.use('/api/auth', require('./routs/auth'))
app.use('/api/contacts', require('./routs/contacts'))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
