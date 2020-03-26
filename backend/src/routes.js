 
const express = require('express');
const OngController = require('./controllers/OngController');
const OngProfile = require('./controllers/ProfileController');
const OngInsidente = require('./controllers/IncidentController');

const sessions = require('./controllers/SessionController');

const routes = express.Router();


// login 
routes.post('/sessions',sessions.create);

routes.get('/ongs',OngController.index);
routes.post('/ongs',OngController.create);
routes.post('/ongs',OngController.create);

routes.get('/profile',OngProfile.index);

routes.post('/incidents',OngInsidente.create);
routes.get('/incidents',OngInsidente.index);
routes.delete('/incidents/:id',OngInsidente.delete);

module.exports = routes;