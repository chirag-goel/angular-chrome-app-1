module.exports = function(app){
	require('/Users/robertchristian/www/angular-chrome-app/src/js/routes.js')(app)
	require('/Users/robertchristian/www/angular-chrome-app/src/js/controllers/nav.js')(app)
	require('/Users/robertchristian/www/angular-chrome-app/src/js/controllers/root.js')(app)
	require('/Users/robertchristian/www/angular-chrome-app/src/js/controllers/users.js')(app)
	require('/Users/robertchristian/www/angular-chrome-app/src/js/directives/click.js')(app)
	require('/Users/robertchristian/www/angular-chrome-app/src/js/directives/draggable.js')(app)
}