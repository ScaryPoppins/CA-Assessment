const express = require("express");
const blogController = require('./controllers/blogController');
const app = express();
app.use(express.json());

app.get('/',blogController.blog);


const port = 4040
app.listen(port,() => {
    console.log(`listening on ${port}`)
})