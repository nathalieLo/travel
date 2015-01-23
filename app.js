var express = require('express');
var app = express();
var customer = require('./lib/customer.js');
var handlebars = require('express3-handlebars').create({ defaultLayout:'main' })

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
   customer.firstname = "Jan";
   customer.surname = "Brown";
   customer.age = 34;
   res.render('home', 
      {
	     firstname : customer.firstname,
		 surname : customer.surname,
		 age : customer.age
		 });
   
});

app.get('/about', function(req, res){
	res.render('about');
});

// custom 404 page
app.use(function(req, res){
	res.status(404);
	res.render('404');
});

// custom 500 page
app.use(function(err, req, res, next){
	console.error(err.stack);	
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), function(){
	console.log( 'nats second app' + app.get('port'));
});