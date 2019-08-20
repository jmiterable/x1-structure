var express = require('express');
var router = express.Router();

// Require controller modules
emailTemplateController = require('../controllers/emailTemplateController');
// TODO: pushTemplateController = require('../controllers/pushTemplateController');
// TODO: inAppTemplateController = require('../controllers/inAppTemplateController');


/// EMAIL TEMPLATE ROUTES ///

// GET email template homepage
router.get('/email', emailTemplateController.index);

// GET request for a single email template
router.get('/email/:id', emailTemplateController.template_detail);

// GET request for a list of all email templates
router.get('/emails', emailTemplateController.template_list)


/// TODO: PUSH TEMPLATE ROUTES ///


/// TODO: INAPP TEMPLATE ROUTES ///


module.exports = router;