const express = require('express');
const userRoutes = require('./UserRoutes')
const cors = require('cors')
const app = express();

require('./db')
app.use(cors())

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(userRoutes);

app.listen(5000, () => {
  console.log("Server is running at port 5000");
})