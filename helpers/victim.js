let Victim = require('../models/victim');

exports.getVictims = (req, res) => {
    Victim.find({})
        .then(victims => {res.json(victims)})
        .catch(err => {res.send(err);})
}

exports.createVictim = (req, res) => {
    const {name, age, gender, city, locality, crime_type, crime_spot, description, contact} = req.body;
    const victim = new Victim({name, age, gender, city, locality, crime_type, crime_spot, description, contact});
    victim.save()
    .then(newVictim => {res.json(newVictim)})
    .catch(err => {res.send(err)});
}

module.exports = exports;