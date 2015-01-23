
var Customer = {
	firstname :    "",
	surname   :    "",
	age       :    -1,
	addressLine1 : "",
	addressLine2 : "",
	postcode : "",
	
	getFullName : function() {

		return this.firstname + " " + this.surname;

	},
	
	getFullAddress : function() {
	
		return this.addressLine1 + "<br/>" 
		+ this.addressLine2 + "<br/>"
		+ this.postcode;
	}
	
};

module.exports = Customer;

