com = {};
com.jdonley83 = {};
com.jdonley83.g_filter_commander = (function(){
	function sanitize_data(input) {
		var filter_arr = input.split("|");
		return filter_arr;
	}

	return {
		process: function(input){
			return sanitize_data(input);
		}
	};
})();