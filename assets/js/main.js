/*
	Arcana by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			wide:      [ '1281px',  '1680px' ],
			normal:    [ '981px',   '1280px' ],
			narrow:    [ '841px',   '980px'  ],
			narrower:  [ '737px',   '840px'  ],
			mobile:    [ '481px',   '736px'  ],
			mobilep:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			offsetY: -15,
			hoverDelay: 0,
			alignment: 'center'
		});

	// Nav.

		// Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
					'<span class="title">' + 'Me voici' + '</span>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						`
						<ul style="list-style-type: none;">
						<li><img src="images/pray.png" alt="Pray" class="Pray" width="100px"></li>
						<li>J'aimerais que l'on prie pour moi</li>
						<li><img src="images/tjs.png" alt="TeamJS" class="TeamJS" width="100px"></li>
						<li>Je veux intégrer la team JESUS</li>
						<li><img src="images/church.png" alt="ADDN" class="ADDN" width="100px"></li>
						<li>Je n'ai pas d'église</li>
					</ul>
						`+
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

})(jQuery);

$( ".Pray" ).on( "click", function() {
	$('.style1').fadeOut();
	$('.integration_form').fadeOut();
	$('.participation_form').fadeOut();

	$('.pray_form').fadeIn();
});
  
  $( ".TeamJS" ).on( "click", function() {
	$('.style1').fadeOut();
	$('.integration_form').fadeOut();
	$('.participation_form').fadeOut();
	$('.pray_form').fadeOut();


	$('.integration_form').fadeIn();
  }); 

  $( ".ADDN" ).on( "click", function() {
	$('.style1').fadeOut();
	$('.integration_form').fadeOut();
	$('.pray_form').fadeOut();

	$('.participation_form').fadeIn();
  });

