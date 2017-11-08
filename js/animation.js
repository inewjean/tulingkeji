//"有料"模块的无缝滑动
//1.左右箭头，控制向左右滑动一个元素
//2.点击原点滑至最左/最右端


$(document).ready(function(){
	//
	var wrap=$('.examples-slider-wrap'),
		items=$('.examples-slider-wrap .item'),
		btn=$('.examples-display .circle-btn div'),
		curNum=0,
		pre_btn=$('.examples-display .prev'),
		next_btn=$('.examples-display .next'),
		stp_wid=items.eq(0).width()*-1+'px';//数字

	//console.log(stp_wid);
	next_btn.click(function(){
		wrap.animate({marginLeft:stp_wid},800,function(){
			setTimeout(function(){
				$('.examples-slider-wrap .item:first').appendTo($('.examples-slider-wrap'));
				wrap.css('marginLeft',0);
			},50);
			
		});

		if(curNum==4){
			curNum=0;
		}else{
			curNum++;
		}
		btn.removeClass('active');
		btn.eq(curNum).addClass('active');
	});

	pre_btn.click(function(){
		wrap.css('marginLeft',stp_wid);
		$('.examples-slider-wrap .item:last').prependTo($('.examples-slider-wrap'));
		wrap.animate({marginLeft:0},800);

		if(curNum==0){
			curNum=4;
		}else{
			curNum--;
		}
		btn.removeClass('active');
		btn.eq(curNum).addClass('active');
	});

/*
	btn.click(function(){
		var index=$(this).index();
		//console.log(index);
		if(index > curNum){
			var timeGap=800/(index-curNum);
			animateNextOne(index,timeGap);
		}else if(index < curNum){
			var timeGap=800/(curNum-index);
			animatePrevOne(index,timeGap);
		}

	});

	function animateNextOne(index,timeGap){
		if(index==curNum){
			return false;
		}
		$('.examples-slider-wrap').animate({marginLeft:stp_wid},timeGap,function(){
			$('.examples-slider-wrap .item:first').appendTo($('.examples-slider-wrap'));
			$('.examples-slider-wrap').css('marginLeft',0);
			curNum++;
			animateNextOne(index);
		});
	}

	function animatePrevOne(index,timeGap){
		if(index==curNum){
			return false;
		}
		$('.examples-slider-wrap').css('marginLeft',stp_wid);
		$('.examples-slider-wrap .item:last').prependTo($('.examples-slider-wrap'));
		$('.examples-slider-wrap').animate({marginLeft:0},timeGap,function(){
			curNum--;
			animatePrevOne(index);
		});
	}

*/


	//点击导航按钮缓慢滚动
	$("nav a").click(function(event){
        event.preventDefault();
        $("html,body").animate({scrollTop:$(this.hash).offset().top}, 600);
    });

    //移动端导航栏唤出
    var menuTab=0;
    $('.mobile-menu').click(function(){
    	// 
    	if(menuTab==0){
    		$('nav').animate({right:0},'slow');
    		$('.mobile-menu .fa-bars').hide();
    		$('.mobile-menu .fa-close').show();
    		menuTab=1;
    	}else{
    		$('nav').animate({right:'-80%'},'slow');
    		$('.mobile-menu .fa-close').hide();
    		$('.mobile-menu .fa-bars').show();
    		menuTab=0;
    	}
    });

});