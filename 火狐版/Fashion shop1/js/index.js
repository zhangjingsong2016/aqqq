$(function(){
	//鼠标移动到我的风尚时是否出现列表
	$('.mydFs').hover(function(){
		$('.myFs').toggle()
	})
	//鼠标移动到列表时列表显示
	$('.myFs').hover(function(){
		$('.myFs').toggle()
	})
	//搜索框得到焦点时placeholder内容清空
	$('#sIput').focus(function(){
					
	})
	//竖导航hover是否换色显示图片
	$('.verticalNav').find('li').hover(function(){
		$(this).css('background','#a70000')
		$(this).find('img').css('display','block')
	},function(){
		$(this).css('background','#d32402')
		$(this).find('img').css('display','none')
	})
	//轮播图
	var curIndex = 0; //当前index
     //  alert(imgLen);
     // 定时器自动变换2.5秒每次
  	var autoChange = setInterval(function(){ 
    	if(curIndex < $(".imgList li").length-1){ 
     		 curIndex ++; 
    	}else{ 
      		curIndex = 0;
    	}
    	//调用变换处理函数
    	changeTo(curIndex); 
  	},2500);

  	$(".indexList").find("li").each(function(item){ 
	    $(this).hover(function(){ 
	      clearInterval(autoChange);
	      changeTo(item);
	      curIndex = item;
	    },function(){ 
	      autoChange = setInterval(function(){ 
	        if(curIndex < $(".imgList li").length-1){ 
	          curIndex ++; 
	        }else{ 
	          curIndex = 0;
	        }
	        //调用变换处理函数
	        changeTo(curIndex); 
	      },2500);
	    });
  	});
  	function changeTo(num){ 
    	$(".imgList").find("li").removeClass("imgOn").hide().eq(num).fadeIn().addClass("imgOn");
    	$(".indexList").find("li").removeClass("indexOn").eq(num).addClass("indexOn");
  	}
  	
  	
  	//小轮播
  	var i=0;
  	var clone = $('.list li').first().clone();
	$('.list').append(clone);
	var size = $('.list li').size();
  	$('.right2').click(function(){
		i++;
		if(i==size){
			$('.list').css('left','0px');
			i=1;
		}
		$('.list').stop().animate({left:-208*i})
	})
	$('.left2').click(function(){
		i--;
		if(i==-1){
			$('.list').css({'left':-(size-1)*208});
				i=size-2;
			}
			$('.list').stop().animate({left:-208*i})
	})
  	var t=setInterval(function(){
		i++;
		if(i==size){
			$('.list').css('left','0px');
			i=1;
		}
			$('.list').stop().animate({left:-208*i})
				
	},3000)
  	
  	
  	$('.show2').hover(function(){
		clearInterval(t);
	},function(){
			t=setInterval(function(){
			i++;
		if(i==size){
			$('.list').css('left','0px');
			i=1;
		}
			$('.list').stop().animate({left:-208*i})
					
		},800)
	})
  	
  	//轮播
  	var n=0;
  	var clone = $('.pic_show_box .pic_show1').first().clone(true);
  	$('.pic_show_box').append(clone);
  	var length = $('.pic_show_box .pic_show1').size();
  	
  	$('.right_2').click(function(){
		n++;
		if(n==length){
			$('.pic_show_box').css('left','0px');
			n=1;
		}
		$('.pic_show_box').stop().animate({left:-720*n})
	})
	
	$('.left_2').click(function(){
		n--;
		if(n==-1){
			$('.pic_show_box').css({'left':-(length-1)*720});
				n=length-2;
			}
			$('.pic_show_box').stop().animate({left:-720*n})
	})
  	
  	var b=setInterval(function(){
		n++;
		if(n==length){
			$('.pic_show_box').css('left','0px');
			n=1;
		}
			$('.pic_show_box').stop().animate({left:-720*n})
				
	},1000)
  	
  	
	$('.pic_show').hover(function(){
		clearInterval(b);
	},function(){
			b=setInterval(function(){
			n++;
		if(n==length){
			$('.pic_show_box').css('left','0px');
			n=1;
		}
			$('.pic_show_box').stop().animate({left:-720*n})
					
		},1000)
	})
  	
  	
  	//子导航点击事件
  	$('.things').click(function(){
  		$('.redtri').css('display','none');
  	})
  	
  	
  	$('.f1').css('color','#ff5500');
  	$('.f2').css('color','#000000');
  	$('.f3').css('color','#e7604c');
  	$('.f4').css('color','#019ade');
  	$('.f5').css('color','#e84c8b');
  	$('.f6').css('color','#3e9a35');
  	$('.f7').css('color','#0b59a1');
  	//竖导航滑动事件
  	$('.verticalNav li').hover(function(){
  		var n = $(this).index();
  		$('.nav_show').find('.nav_show1').eq(n).toggle();
  	})
  	$('.nav_show1').hover(function(){
  		$(this).toggle();
  	})
  	
  	if($.cookie("bt") !=1){
		$('.num').text(1);
	}
  	if($.cookie("bt") ==1){
		$('.num').text(0);
	}
  	if($.cookie("bt") ==undefined){
		$('.num').text(0);
	}
})
