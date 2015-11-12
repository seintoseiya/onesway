$(function () {
	$('.box').draggable({
		helper: 'clone'
	}).resizable({
		handles: 'all'
	});
	$('.target').droppable({
		accept: '.box',
		hoverClass: 'hover',
		tolerance: 'fit',
		drop: function(event, ui){
			ui.draggable.clone().appendTo(this);
			console.log('dropped!');
		}
	});
	var selected = new Array();
	$('#selectable').selectable({
		selected: function(event, ui){
			if(selected.indexOf(ui.selected.id) === -1){
				selected.push(ui.selected.id);	
			}
			console.log(selected);
		},
		unselected: function(event, ui){
			var id = ui.unselected.id;
			selected.splice(selected.indexOf(id), 1);
			console.log(selected);
		}
	});
	$('#sortable').sortable({
		cursor: 'move',
		opacity: 0.5,
		update: function(event, ui){
			// sortable("serialize")はclass名をitem_1の様にしておかないと使えない
			console.log($(this).sortable("serialize"));
		}
	});
	$('#accordion').accordion();

	var langs = ["ja","en","cn","fn","sp","田中","田口"];
	$('#langs').autocomplete({
		source : langs
	});

	$('button').button();
	$('#check').button();
	$('input[type=radio]').button();
	$('#set').buttonset();

	$('#datepicker').datepicker({
		dateFormat: "yy-mm-dd",
		numberOfMonths: 3,
		minDate: -2,
		maxDate: "+1M"
	});

	$('#button1').click(function(){
		$('#msg').dialog('open');
	});
	$('#msg').dialog({
		autoOpen: false,
		buttons: {
			"OK": function(){
				$(this).dialog('close');
			}
		},
		title: "title",
		modal: true
	});

	$('#bar').progressbar({
		value: 33
	});
	$('#slider').slider({
		slide: function(event, ui){
			console.log(ui.value);
			$('#bar').progressbar('option', 'value', ui.value);
		}
	});

	$('#tabs').tabs({
		active: 1
	});

	$('#box').click(function(){
		$(this).effect("explode", {
			pieces: 4
		});
	});
});