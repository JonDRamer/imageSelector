javascript:void(!function () { 
	
	$('.bread-crumb').append(`<div id='modal'><h1 id='modalTitle'>Welcome to rS Image Selector</h1><p>Click on any of your favorite images to get the source link in a new tab.  When you're finished just refresh the page and rS.com's original functionality will be restored. </p><button id='closeModal'>Got It</button></div>`);

	$('#modal').css({
	    'width': '25%',
	    'position': 'absolute',
	    'left': '37.5%',
	    'z-index': 1,
	    'box-shadow': 'rgba(0, 0, 0, 0.3) 0px 0px 10px',
	    'text-align': 'center',
	    'padding': '50px',
	    'background': '#fff'
	});

	$('#modalTitle').css({
		'font-size': '12px',
		'font-weight': '600'
	});

	$('#closeModal').click(function() {
		$('#modal').remove();
	});

	$('#closeModal').css({
		'border': '1px solid black',
		'padding-left': '10px',
		'padding-right': '10px'
	});
	
	
	console.log('Welcome to rS Image Selector. Click on any of your favorite images to get the source link in a new tab.  When you are finished just refresh the page to exit image selection mode.  Your links will also be printed here in the console for your convenience.');

	collectAndBindProductImages();

	$(window).scroll(function() {

	    clearTimeout($.data(this, 'scrollTimer'));

	    $.data(this, 'scrollTimer', setTimeout(function() {
	        collectAndBindProductImages();
	    }, 100));

	});
	
	function collectAndBindProductImages() {

		$('.product-image').off('click').on('click', (function(e) {

			var url = e.target.attributes.style.value.split('//')[1].replace(')', '');

			setTimeout(function() {
				console.log($('.product-details__title').text() + '\nLINK: ', 'https://' + url);
				window.open('https://' + url);
				$('product-modal').hide();
			}, 100);

		}));

	}

}());	
