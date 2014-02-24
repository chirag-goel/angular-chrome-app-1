module.exports = function(app){
	require('/Users/Rob/www/masterycards/src/js/routes.js')(app)
	require('/Users/Rob/www/masterycards/src/js/controllers/nav.js')(app)
	require('/Users/Rob/www/masterycards/src/js/controllers/root.js')(app)
	require('/Users/Rob/www/masterycards/src/js/controllers/users.js')(app)
	require('/Users/Rob/www/masterycards/src/js/directives/click.js')(app)
	require('/Users/Rob/www/masterycards/src/js/directives/draggable.js')(app)
}