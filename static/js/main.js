$(function() {
	var home = location.href,
		param = location.search;
	if (!param) {
		$('body').on('click', '.J-change', function() {
			$('.strip').hide();
			addStyle();
			move();
		});
	} else {
		$('.strip').hide();
	}
	
	
	$('body').on('click', '.c1', function() {
		var $ele = $('.c1');
		allAnimate($ele);
	})
	.on('click', '.c2', function() {
		var $ele = $('.c2');
		allAnimate($ele);
	})
	.on('click', '.c3', function() {
		var $ele = $('.c3');
		allAnimate($ele);
	})
	.on('click', '.c4', function() {
		var $ele = $('.c4');
		allAnimate($ele);
	})
	.on('click', '.c5', function() {
		var $ele = $('.c5');
		allAnimate($ele);
	})
	.on('click', '.c6', function() {
		var $ele = $('.c6');
		allAnimate($ele);
	})
	.on('click', '.J-return', function() {
		var home = location.href,
			param = location.search;
		if (param) {
			location.href = home;
		} else {
			location.href = home + '?first=false';
		}
	});
	$(document).mousemove(function(e) {
		var xx = e.pageX - 800,
			yy = e.pageY - 500;
		$('.strip .modal-box').css({
			'top':yy + 'px',
			'left':xx + 'px',
			'position':'absolute',
	 		'transition':'All 1s',
	 		' -webkit-transition':'All 1s',
	 		'-moz-transition':'All 1s',
	 		' -o-transition':'All 1s'
	 	});

	});
	function move() {
		$('.main1').addClass('active1');
    	$('.main2').addClass('active2');
    	$('.main3').addClass('active3');
    	$('.main4').addClass('active4');
    	$('.main5').addClass('active5');
    	$('.main6').addClass('active6');
    	$('.main7').addClass('active7');
    	$('.main8').addClass('active8');
    	$('.main9').addClass('active1');
    	$('.main10').addClass('active2');
    	$('.main11').addClass('active3');
    	$('.main12').addClass('active4');
    	$('.main13').addClass('active5');
    	$('.main14').addClass('active6');
    	$('.main15').addClass('active7');
    	$('.main16').addClass('active8');
    	$('.main17').addClass('active1');
    	$('.main18').addClass('active2');
    	$('.main19').addClass('active3');
    	$('.main20').addClass('active4');
    	$('.main21').addClass('active5');
    	$('.main22').addClass('active6');
    	$('.main23').addClass('active7');
    	$('.main24').addClass('active8');
    	$('.main25').addClass('active7');
    	$('.main26').addClass('active8');
	}

	function addStyle() {
		$('.main1').addClass('style1');
    	$('.main2').addClass('style2');
    	$('.main3').addClass('style3');
    	$('.main4').addClass('style4');
    	$('.main5').addClass('style5');
    	$('.main6').addClass('style6');
    	$('.main7').addClass('style7');
    	$('.main8').addClass('style8');
    	$('.main9').addClass('style1');
    	$('.main10').addClass('style2');
    	$('.main11').addClass('style3');
    	$('.main12').addClass('style4');
    	$('.main13').addClass('style5');
    	$('.main14').addClass('style6');
    	$('.main15').addClass('style7');
    	$('.main16').addClass('style8');
    	$('.main17').addClass('style1');
    	$('.main18').addClass('style2');
    	$('.main19').addClass('style3');
    	$('.main20').addClass('style4');
    	$('.main21').addClass('style5');
    	$('.main22').addClass('style6');
    	$('.main23').addClass('style7');
    	$('.main24').addClass('style8');
    	$('.main25').addClass('style7');
    	$('.main26').addClass('style8');

	}
	function showText(obj, p) {
		$('.c1').data('content', 'SLEEP');
		$('.c2').data('content', 'CREATIVE WORK');
		$('.c3').data('content', 'DAY JOB/ADMIN');
		$('.c4').data('content', 'FOOD/LEISURE');
		$('.c5').data('content', 'EXERCISE');
		$('.c6').data('content', 'OTHER');
		var color = obj.data('color'),
			$parent = $('.' + p ),
			colorClass = '.' + color,
			arr = $parent.find(colorClass),
			sum = 0,
			content = obj.data('content');
		$.each(arr, function(index, value) {
			var part = $(value).data('part'),
				percent = parseInt(part, 10) * 0.01,
				period = Number((percent * 24).toFixed(2));
			sum += period;
		});
		if (sum) {
			var html = '<p class="note">' + content + ', ' + sum.toFixed(2) + 'h';
			$parent.find('.name').append(html);
		}
	
		
	}
	function AllText(obj) {
		showText(obj, 'main1');
		showText(obj, 'main2');
		showText(obj, 'main3');
		showText(obj, 'main4');
		showText(obj, 'main5');
		showText(obj, 'main6');
		showText(obj, 'main7');
		showText(obj, 'main8');
		showText(obj, 'main9');
		showText(obj, 'main10');
		showText(obj, 'main11');
		showText(obj, 'main12');
		showText(obj, 'main13');
		showText(obj, 'main14');
		showText(obj, 'main15');
		showText(obj, 'main16');
		showText(obj, 'main17');
		showText(obj, 'main18');
		showText(obj, 'main19');
		showText(obj, 'main20');
		showText(obj, 'main21');
		showText(obj, 'main22');
		showText(obj, 'main23');
		showText(obj, 'main24');
		showText(obj, 'main25');
		showText(obj, 'main26');
	}
	function hideOther(obj) {		
		$('.c1').addClass('dispear');
		$('.c2').addClass('dispear');
		$('.c3').addClass('dispear');
		$('.c4').addClass('dispear');
		$('.c5').addClass('dispear');
		$('.c6').addClass('dispear');
		obj.removeClass('dispear');	
	}
	function removeOther(obj) {
		$('.c1').addClass('less');
		$('.c2').addClass('less');
		$('.c3').addClass('less');
		$('.c4').addClass('less');
		$('.c5').addClass('less');
		$('.c6').addClass('less');
		obj.removeClass('less');	
	}
	function showAnimate(obj) {
		hideOther(obj);
		obj.addClass('large');
		setTimeout(function() { 
			obj.addClass('small');
		}, 1000);
		
		removeOther(obj);

	}
	function showReturn() {
		$('.return').removeClass('point').attr('cursor', 'pointer').removeClass('noshow');
	}
	function allAnimate(obj) {
		showAnimate($(obj));
		setTimeout(function(){
			showReturn();
			AllText($(obj));
		}, 1000);
		
	}
   
});