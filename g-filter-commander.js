com = {};
com.jdonley83 = {};
com.jdonley83.g_filter_commander = (function(){
	function sanitize_data(input) {
		var filter_arr = input.split("|"),
			output_arr = [],
			length = filter_arr.length;

		for (var i = 0; i < length; i++) {
			var current_item = filter_arr[i];
			if (current_item.indexOf("@") == 0) {
				output_arr[i] = current_item.substring(1);
			} else {
				output_arr[i] = current_item;
			}
		}

		return output_arr;
	}

	return {
		process: function(input){
			return sanitize_data(input);
		}
	};
})();