com = {};
com.jdonley83 = {};
com.jdonley83.g_filter_commander = (function(){
	var _items;

	function removeItem(item) {
		var length = _items.length,
			toPop = [], i;
		for (i = 0; i < length; i++) {
			if (_items[i] == item){
				toPop.push(i);
			}
		}

		length = toPop.length;
		var modifier = 0;
		for (i = 0; i < length; i++){
			_items.splice(i, 1);
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