module.exports = (app) => {
    const users = require('../controllers/authenticate.controller.js');  

    // Retrieve a single Note with noteId
    app.get('/authenticate/:username', users.findOne);
}