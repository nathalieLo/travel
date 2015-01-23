
var Customer = {
	firstname :    "",
	surname   :    "",
	age       :    -1,
	addressLine1 : "",
	addressLine2 : "",
	postcode : "",
	
	getFullName : function() {

		return this.firstname + " " + this.surname;

	}
	
	
};

module.exports = Customer;

