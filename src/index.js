const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const route = require('./routes/route')
const cors = require("cors");

const app = express()

app.use(cors());

app.use(bodyParser.json())
mongoose.connect("mongodb+srv://Sumit:Shakya123@cluster0.of12ajb.mongodb.net/urlShortner", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

app.use('/', route)


app.listen(process.env.PORT || 3001, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3001))
});
