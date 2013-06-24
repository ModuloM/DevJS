var blurModule = (function($) {
	var blur = {},
		_state = 3,
		_variation;

	function _changeFocus(speed, fn) {
		$('.logo .state' + _state).fadeIn(speed);
		$('.back .state' + _state).fadeIn(speed);
		$('.logo .state' + ( _state - _variation ) ).fadeOut(speed);
		$('.back .state' + ( _state - _variation ) ).fadeOut(speed, fn);
	}

	blur.focusLogo = function(speed, fn) {
		if (_state > 1) {
			_variation = -1;
			_state = _state + _variation;
			_changeFocus(speed, fn);
		} else {
			console.log('Focus is already on logo');
		}
	};
	blur.focusBack = function(speed, fn) {
		if (_state < 3) {
			_variation = 1;
			_state = _state + _variation;
			_changeFocus(speed, fn);
		} else {
			console.log('Focus is already on back');
		}
	};

	return blur;

}(jQuery));

blurModule.focusLogo(700 , function() {
	blurModule.focusBack(500 , function() {
		blurModule.focusLogo(400 , function() {
			blurModule.focusBack(600 , function() {
				blurModule.focusLogo(300 , function() {
					blurModule.focusLogo(300 , function() {
						console.log('end');
					});
				});
			});
		});
	});
});

