var iceCream = (function(){
	var instance;

	function prepareIcecream(){
		var ice = "ice cream!!!";
		return ice;
	}

	return{
		getIcecream = function(){
			if(!instance){
				instance = prepareIcecream();
			}
			return instance;
		}
	}
})();

var instance1 = iceCream.getIcecream();
var instance2 = icecream.getIcecream();
console.log("instance 1 and 2 are same :" + (instance1 === instance2));