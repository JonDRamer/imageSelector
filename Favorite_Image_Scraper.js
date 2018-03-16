javascript:void(!function () { 
	
	$('.bread-crumb').append(`<div id='modal'><h1 id='modalTitle'>Welcome to rewardStyle Image Selector</h1><p>Click on the image you want to save. A new tab will open where you're able to save the desired image. Refresh the page to restore rewardStyle.com's original functionality.</p><button id='closeModal'>Got It</button><p>Stay tuned for new product updates, including a long-term solution to save Product and Favorite images.</p></div>`);

	$('#modal').css({
	    'width': '35%25',
	    'position': 'absolute',
	    'left': '30.5%25',
	    'z-index': 1,
	    'box-shadow': 'rgba(0, 0, 0, 0.3) 0px 0px 10px',
	    'text-align': 'center',
	    'padding': '40px',
	    'background': '#fff',
	    'color': 'black'
	});

	$('#modalTitle').css({
		'font-size': '12px',
		'font-weight': '600'
	});

	$('#closeModal').click(function() {
		$('#modal').remove();
	});

	$('#closeModal').css({
		'background': 'black',
		'color': 'white',
		'border': '1px solid black',
		'padding': '5px 15px',
		'margin': '10px'
	});
	
	
	console.log('Welcome to rewardStyle Image Selector. Click on any of your favorite images to get the source link in a new tab.  When you are finished just refresh the page to exit image selection mode.  Your links will also be printed here in the console for your convenience.');

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

