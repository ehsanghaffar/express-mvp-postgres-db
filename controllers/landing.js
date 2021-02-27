const models = require('../models');

exports.get_landing =  function(req, res, next) {
  res.render('landing', { title: 'Express' });
};

// create record to db
exports.submit_lead =  function(req, res, next) {
  return models.Lead.create({
    email: req.body.lead_email
  }).then(lead => {
    res.redirect('/leads');
  });
};

// show all records on Lead table
exports.show_leads = function(req, res, next) {
  models.Lead.findAll().then(leads => {
    res.render('landing', { title: 'Express', leads: leads });
  })
}