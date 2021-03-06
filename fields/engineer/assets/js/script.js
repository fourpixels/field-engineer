(function($) {
	$.fn.engineer = function() {
		return this.each(function() {
			var field = $(this);
			var fieldname = 'engineer';

			if(field.data( fieldname )) {
				return true;
			} else {
				field.data( fieldname, true );
			}

			// Render event
			field.on('input change click', '.engineer-data .field input, .engineer-data .field select, .engineer-data .field textarea', function() {
				EngineerTableRender.render(field);
			});

			// Add event
			field.find('.table-add-button, .engineer-add-button-empty').click(function(e) {
				EngineerTableAdd.add(field);
			});

			// Delete event
			field.on('click', '.engineer-delete-button', function() {
				$(this).closest('.engineer-row').remove();
				EngineerTableRender.render(field);

				engineerEmpty(field);
			});

			engineerEmpty(field);

			EngineerSort.init(field);
		});
	};
})(jQuery);

function engineerEmpty(field) {
	if(field.find('[data-engineer-row] .engineer-field.field').length) {
		field.find('.engineer-empty').hide();
		field.find('.engineer-table').removeClass('engineer-hide');
		field.find('.engineer-button-wrap').removeClass('engineer-hide');
	} else {
		field.find('.engineer-empty').show();
		field.find('.engineer-table').addClass('engineer-hide');
		field.find('.engineer-button-wrap').addClass('engineer-hide');
	}
}