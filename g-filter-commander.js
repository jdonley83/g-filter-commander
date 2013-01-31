com = {};
com.jdonley83 = {};
com.jdonley83.g_filter_commander = (function(){
	var _items;

	function removeItem(item) {
		var length = _items.length,
			toSplice = -1;
		for (var i = 0; i < length; i++) {
			if (_items[i] == item){
				toSplice = i;
				break;
			}
		}

		if (toSplice >= 0){
			_items.splice(toSplice, 1);
		}
	}

	function sanitizeData() {
		var output_arr = [],
			length = _items.length;

		for (var i = 0; i < length; i++) {
			var current_item = _items[i];
			if (current_item.indexOf("@") === 0) {
				output_arr[i] = current_item.substring(1);
			} else {
				output_arr[i] = current_item;
			}
		}

		return output_arr.sort();
	}

	return {
		init: function(input){
			_items = input.split("|");
		},
		addItem: function(input){
			_items.push(input);
		},
		process: function(){
			return sanitizeData();
		},
		removeItem: function(input){
			removeItem(input);
		}
	};
})();