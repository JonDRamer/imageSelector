javascript:void(!function () { 

	$('div.favorite-search.standard-page__panel.rs-form').append(`<div id="modal"><p id="modalTitle">Welcome to rS Image Selector</p>Click on any of your favorite images to get the source link in a new tab.  When you're finished just refresh the page and rS.com's original functionality will be restored.</div>`);
	$('#modal').css({
		"align-items": "center",
	    "width": "50%",
	    "height": "20%",
	    "position": "absolute",
	    "left": "25%",
	    "z-index": 1,
	    "display": "flex",
	    "flex-wrap": "wrap",
	    "box-shadow": "rgba(0, 0, 0, 0.3) 0px 0px 10px",
	    "text-align": "center",
	    "font-family": "inherit",
	    "font-weight": "900",
	    "padding": "5px",
	    "background": "#fff"
	});

	$('#modalTitle').css({
		"margin": "0px"
	});
	
	console.log("Click on any of your favorites thumbnail image and the link will be printed below.");

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

alert("Click on any of your favorite images to get the link in a new tab.  When you're all done just refresh the page and the site's usual functionality will be restored.");

