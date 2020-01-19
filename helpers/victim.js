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

exports.getVictim = (req, res) => {
    Victim.findOne({_id:req.params.victimId})
    .then(foundVictim => res.json(foundVictim))
    .catch(err => {res.send(err)});
}

exports.updateVictim = async(req, res) => {
    try{
        let victim = await Victim.findOneAndUpdate({_id:req.params.victimId}, req.body, {new:true})
        await victim.save()
        res.json(victim)
    }
    catch(err){
        res.send(err);
    };
}

exports.deleteVictim = (req, res) => {
    Victim.findByIdAndDelete(req.params.victimId)
    .then(() => res.json({message: "We deleted it!"}))
    .catch(err => res.send(err));
}

module.exports = exports;