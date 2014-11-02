var DontRepeat = function() {
	this.apply = function(items) {
		var isOk = true;
		for (var currentIndex = 0; currentIndex < items.length; currentIndex++) {
			var currentItem = items[currentIndex];
			for (var otherIndex = 0; otherIndex < items.length; otherIndex++) {
				var otherItem = items[otherIndex];
				if (currentIndex !== otherIndex) {
		        	if (currentItem == otherItem) {
		        		isOk = false;
		        	}
		        }
			}
		}
		return isOk;
	}
}