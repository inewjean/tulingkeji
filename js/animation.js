
$(document).ready(function(){
	
//"有料"模块 滚动动画
	//1.左右箭头，控制向左/右滑动一个图片
	//2.点击原点
	var wrap=$('.examples-slider-wrap'),
		items=$('.examples-slider-wrap .item'),
		btn=$('.examples-display .circle-btn div'),
		curNum=0,
		pre_btn=$('.examples-display .prev'),
		next_btn=$('.examples-display .next'),
		stp_wid=items.eq(0).width()*-1+'px';

	next_btn.click(function(){
		if(!wrap.is(':animated')){
			wrap.animate({marginLeft:stp_wid},800,function(){
				$('.examples-slider-wrap .item:first').appendTo($('.examples-slider-wrap'));
				wrap.css('marginLeft',0);
			});
			if(curNum==4){
				curNum=0;
			}else{
				curNum++;
			}
			btn.removeClass('active');
			btn.eq(curNum).addClass('active');

		}
	});

	pre_btn.click(function(){
		
		if(!wrap.is(':animated')){
		$('.examples-slider-wrap .item:last').prependTo($('.examples-slider-wrap'));
		wrap.css('marginLeft',stp_wid);

		wrap.animate({marginLeft:0},800);

		if(curNum==0){
			curNum=4;
		}else{
			curNum--;
		}
		btn.removeClass('active');
		btn.eq(curNum).addClass('active');
		}
	});

/* 待完善
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

	//移动端左右滑屏
	var startx, starty;
    
    function getAngle(angx, angy) {
        return Math.atan2(angy, angx) * 180 / Math.PI;
    };
 
    function getDirection(startx, starty, endx, endy) {
        var angx = endx - startx;
        var angy = endy - starty;
        var result = 0;
 
        if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
            return result;
        }
 
        var angle = getAngle(angx, angy);
        if (angle >= -135 && angle <= -45) {
            result = 1;
        } else if (angle > 45 && angle < 135) {
            result = 2;
        } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
            result = 3;
        } else if (angle >= -45 && angle <= 45) {
            result = 4;
        }
 
        return result;
    }
    //手指接触屏幕
   $('.examples-display').get(0).addEventListener("touchstart", function(e) {
        startx = e.touches[0].pageX;
        starty = e.touches[0].pageY;
    }, false);
    //手指离开屏幕
   $('.examples-display').get(0).addEventListener("touchend", function(e) {
        var endx, endy;
        endx = e.changedTouches[0].pageX;
        endy = e.changedTouches[0].pageY;
        var direction = getDirection(startx, starty, endx, endy);
        switch (direction) {
            case 0:
                //alert("未滑动！");
                break;
            case 1:
                //alert("向上！")
                break;
            case 2:
                //alert("向下！")
                break;
            case 3:
                //alert("向左！")
                next_btn.click();
                break;
            case 4:
                //alert("向右！")
                pre_btn.click();
                break;
            default:
        }
    }, false);

	
	//"关于我们"模块 交互动画
	$('#about dt').click(function(){
		var dtIndex=$(this).parent().index();
		//console.log(dtIndex);
		$('#about .preview-picture img').addClass('pic-hide');
		$('#about .preview-picture img').eq(dtIndex).removeClass('pic-hide');
		$('#about .preview-picture').removeClass('pic-hide');

		$('#about .preview-picture .fa-close').click(function(){
			$('#about .preview-picture').addClass('pic-hide');

		});

		$('#about .preview-control .fa').click(function(){
			
			if(dtIndex==0){
				dtIndex=1;
			}else{
				dtIndex=0;
			}
			$('#about .preview-picture img').addClass('pic-hide');
			$('#about .preview-picture img').eq(dtIndex).removeClass('pic-hide');
			
		});
		
	});

	//点击导航按钮缓慢滚动
	$("nav a").click(function(event){
        event.preventDefault();
        $("html,body").animate({scrollTop:$(this.hash).offset().top}, 600);
    });

	$(window).scroll(function(){
		var homeHeight=$('#home').height();
		
		if($(document).scrollTop()>homeHeight){
			$('.header').css('background-color','rgb(255,255,255)');
		}else{
			$('.header').css('background-color','transparent');
		}
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