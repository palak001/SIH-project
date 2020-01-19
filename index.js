const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;


var victimRoutes = require('./routes/victim');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

//MongoDB
mongoose.set('debug', true);
mongoose.connect(require('./config/keys').mongoURI, {useNewUrlParser: true})
    .then(() => console.log("MongoDB connected..."))
    .catch(err => {console.log(err)});

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.use('/api/victim', victimRoutes);

app.listen(port, () => {
    console.log("App is running on port " + port);
});