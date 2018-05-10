const Users = require('../models/user.model.js');


exports.findOne = (req, res) => {
    debugger;
    console.log(req.params.username);
    Users.find(req.params.username)
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found with username " + req.params.username
            });            
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found with username " + req.params.username
            });                
        }
        return res.status(500).send({
            message: "Error retrieving user with username " + req.params.username
        });
    });
};


