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
  return models.Lead.findAll().then(leads => {
    res.render('landing', { title: 'Express', leads: leads });
  })
}

// show single record with ID parameter
exports.show_lead = function(req, res, next) {
  return models.Lead.findOne({
    where: {
      id: req.params.lead_id
    }
  }).then(lead => {
    res.render('lead', { lead: lead });
  })
}

// show edit form
exports.show_edit_lead = function(req, res, next) {
  return models.Lead.findOne({
    where: {
      id: req.params.lead_id
    }
  }).then(lead => {
    res.render('lead/edit_lead', { lead: lead });
  })
}

// edit lead
exports.edit_lead = function(req, res, next) {
  return models.Lead.update({
    email: req.body.lead_email
  }, {
    where: {
    id: req.params.lead_id
    }
  }).then(result => {
    res.redirect('/lead/' + req.params.lead_id);
  })
} 