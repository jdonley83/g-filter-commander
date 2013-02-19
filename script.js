(function($){
	$(function(){
		var commander = com.jdonley83.g_filter_commander,
			inputField = $('#input'),
			initBtn = $('#init'),
			source = $('#filter-list-template').html(),
			template,
			filter_list_div = $('#filter-list');

		template = Handlebars.compile(source);

		function regenList(inputArr) {
			var context = {filters: inputArr};
			var html = template(context);

			$(filter_list_div).html('');
			$(filter_list_div).append(html);

			$('a.remove-filter').click(function(){
				commander.removeItem($(this).data("filter"));
				regenList(commander.process());
			});
		}

		$(initBtn).click(function(){
			var input = $(inputField).val();

			commander.init(input);

			regenList(commander.process());
		});
	});
})($);