javascript:void(!function () { 
	
	$('.bread-crumb').append(`<div id='modal'><img id='rSLogo' src='http://rstyleimg.s3.amazonaws.com/MKTG-Design/logo-01.png' alt='rewardStyle Logo'><h1 id='modalTitle'>Image Selector</h1><p>Click on the image you want to save. A new tab will open where you're able to save the desired image. Refresh the page to restore rewardStyle.com's original functionality.</p><button id='closeModal'>Ok</button><p>Stay tuned for new product updates, including a long-term solution to save Product and Favorite images.</p></div>`);

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

	$('#rSLogo').css({
	    'width': '30%25',
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

/*
JSFiddle - https://jsfiddle.net/c0zqn7u4/13/
/*