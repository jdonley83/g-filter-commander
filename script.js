(function($){
	$(function(){
		var commander = com.jdonley83.g_filter_commander,
			inputField = $('#input'),
			initBtn = $('#init'),
			source = $('#filter-list-template').html(),
			template,
			filter_list_div = $('#filter-list');

		template = Handlebars.compile(source);

		$(initBtn).click(function(){
			var input = $(inputField).val();

			commander.init(input);

			var context = {filters: commander.process()};
			var html = template(context);

			$(filter_list_div).append(html);

			$('a.remove-filter').click(function(){
				commander.remove($(this).data("filter"));
				//TODO: call to code that will regen list
			});
		});
	});
})($);