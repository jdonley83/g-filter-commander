(function($){
	$(function(){
		var commander = com.jdonley83.g_filter_commander,
			inputField = $('#input'),
			initBtn = $('#init'),
			source = $('#filter-list-template').html(),
			template,
			filter_list_div = $('#filter-list'),
			finalizeBtn = $('#finalize'),
			outputText = $('#output'),
			filter_input = $('#filter-input'),
			add_filterBtn = $('#add-filter');

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

		$(add_filterBtn).click(function(){
			if ($(filter_input).val()) {
				commander.addItem($(filter_input).val());
				regenList(commander.process());

				$(filter_input).val('');
			}
		});

		$(finalizeBtn).click(function(){
			window.prompt("Copy to clipboard: Ctrl+C, Enter", commander.finalize());
		});
	});
})($);