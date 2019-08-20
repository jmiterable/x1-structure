exports.index = function(req, res, next) {
    res.send('This is the email template homepage');
};
 
exports.template_list = function(req, res, next) {
    res.send('This is a list of all email templates')
};

exports.template_detail = function(req, res, next) {
    res.send('This is a single template view');
};