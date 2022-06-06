
var path = require('path');
var routes = function(app) {
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/public', 'index.html'));
});
};
module.exports = routes;