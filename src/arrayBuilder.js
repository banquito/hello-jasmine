var ArrayBuilder = function() {
	var randomIntFromInterval = function(min,max) {
	    return Math.floor(Math.random()*(max-min+1)+min);
	}
	this.build = function() {
		var items = [];
		var dontRepeat = new DontRepeat();
		while (items.length < 5) {
			var newItem = randomIntFromInterval(0, 9);
			var newItems = items.concat(newItem);
			if (dontRepeat.apply(newItems)) {
				items = newItems;
			}
		}
		return items;
	}
}