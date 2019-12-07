jQuery(document).ready(function() {
	console.log('jQuery ready fired');

	$('form').submit(function(event) {
		var formData = {
			complete: false,
			task: $('input[name=task]').val()
		};

		$.ajax({
			type: 'POST',
			url: 'https://chadsconway.info/api/addtodo',
			data: formData,
			dataType: 'json'
		}).done(function(data) {
			console.log(data);
			location.reload();
		});

		event.preventDefault();
	});

	$('.ccdelete').click(function() {
		console.log('something clicked');
	});
});

function loadToDos() {
	$.ajax({
		type: 'GET',
		url: 'https://chadsconway.info/api/gettodos',
		dataType: 'json'
	}).done(function(data) {
		for (var i = 0; i < data.length; i++) {
			if (data[i].complete) {
				$('#todobody').append(`
			<tr><th>${data[i].id}</th><td> <input class="form-check-input" type="checkbox" value="checked" id="defaultCheck1"></td>
			<td>${data[i].task}</td>	<td class="btn btn-danger btn-block" id=data[i].id>Delete</td></tr>`);
			} else {
				$('#todobody').append(`
			<tr><th>${data[i].id}</th><td> <input class="form-check-input" type="checkbox" value="" id="check1"></td>
			<td>${data[i].task}</td>
			<td class=" btn btn-danger btn-block" onclick="deleteTodo(${data[i].id})" id=${data[i].id} >Delete</td>
			</tr>`);
			}
		}
	});
}

function deleteTodo(id) {
	$.ajax({
		type: 'GET',
		url: `https://chadsconway.info/api/deletetodo/${id}`,
		dataType: 'json'
	})
		.done(function(data) {
			location.reload();
		})
		.catch(err);
}
