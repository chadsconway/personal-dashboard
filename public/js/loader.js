function hideLoader() {
	console.log('hideLoader() fired');
	let loaderdiv = $('.loaderdiv');
	console.log(loaderdiv);
	$('.loaderdiv').hide();
	$('.loaderdiv').attr('font-size', '40px');
}
function showLoader() {
	console.log('showLoader() fired');
	//	$('.loaderdiv').attr('display', 'block');
}
