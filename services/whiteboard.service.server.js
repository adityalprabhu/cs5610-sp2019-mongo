const dao = require('../daos/whiteboard.dao.server');

module.exports = app => {
    populateDatabase = (req, res) =>
        res.json(dao.populateDatabase());

    truncateDatabase = (req, res) =>
        res.json(dao.truncateDatabase());

    app.post('/api/populate', populateDatabase);
    app.delete('/api/all', truncateDatabase)
};