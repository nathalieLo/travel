
module.exports = {
	bind:  
	function (app) {
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
			customer.addressLine1 = "1 bum terrace";
			customer.addressLine2 = "harrow";
			customer.postcode = "FY5";
			res.render('about', 
				 { 
					fullName : customer.getFullName(),
					fullAddress : customer.getFullAddress(),
					pageTestScript: '/qa/tests-about.js'
				 });		
			  });
			  
			  // custom 404 page

		  
	 }
 }