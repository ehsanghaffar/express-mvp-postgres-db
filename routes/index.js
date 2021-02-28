var express = require('express');
var router = express.Router();

let landing = require('../controllers/landing');

// Routes
router.get('/', landing.get_landing);
// submit lead route
router.post('/', landing.submit_lead);

// show lead(s) routes
router.get('/leads', landing.show_leads);
router.get('/lead/:lead_id', landing.show_lead);

// edit lead routes
router.get('/lead/:lead_id/edit', landing.show_edit_lead);
router.post('/lead/:lead_id/edit', landing.edit_lead);

// destroy lead routes
router.post('/lead/:lead_id/delete', landing.delete_lead);
// ajax delete
router.post('/lead/:lead_id/delete-json', landing.delete_lead_json);

module.exports = router;
