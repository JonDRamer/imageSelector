javascript:void(!function () { 


	$('.bread-crumb').append(`<div id="modal"><h1 id="modalTitle">Welcome to rS Image Selector</h1><p>Click on any of your favorite images to get the source link in a new tab.  When you're finished just refresh the page and rS.com's original functionality will be restored. </p><button id="closeModal">Got It</button></div>`);
	
	$('#modal').css({
	    "width": "50%",
	    "position": "absolute",
	    "left": "25%",
	    "z-index": 1,
	    "box-shadow": "rgba(0, 0, 0, 0.3) 0px 0px 10px",
	    "text-align": "center",
	    "padding": "7px",
	    "background": "#fff"
	});

	$('#modalTitle').css({
		"font-size": "12px",
		"font-weight": "600"
	});

	$('#closeModal').click(function() {
		$('#modal').remove();
	});

	$('#closeModal').css({
		"border": "1px solid black",
		"width": "10%"
	});
	
	console.log("Welcome to rS Image Selector. Click on any of your favorite images to get the source link in a new tab.  When you're finished just refresh the page and rS.com's original functionality will be restored.");

	collectAndBindProductImages();

	$(window).scroll(function() {

	    clearTimeout($.data(this, 'scrollTimer'));

	    $.data(this, 'scrollTimer', setTimeout(function() {
	        collectAndBindProductImages();
	    }, 100));

	});
	
	function collectAndBindProductImages() {

		$('.product-image').off('click').on('click', (function(e) {
			setTimeout(function() {
				console.log($('.product-details__title').text() + "\nLINK: ", `https://${e.target.attributes.style.value.split('//')[1].replace(')', '')}`);
				window.open(`https://${e.target.attributes.style.textContent.split('//')[1].replace(')', '')}`);
				$('product-modal').hide();
			}, 100);

		}));

	}

}());	
