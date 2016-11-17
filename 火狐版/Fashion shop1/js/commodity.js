$(function(){
	$('.c_verticalNav').find('li').hover(function(){
		$(this).css('background','#a70000')
		$(this).find('img').css('display','block')
	},function(){
		$(this).css('background','#d32402')
		$(this).find('img').css('display','none')
	})
	
	$('.c_cmy').hover(function(){
		$('.c_verticalNav').toggle();
	})
	$('.c_nav_show1').hover(function(){
  		$(this).show();
  		$('.c_verticalNav').show();
  	},function(){
  		$('.c_verticalNav').hide();
  		$(this).hide();
  	})
	
	$('.c_verticalNav').hover(function(){
		$('.c_verticalNav').toggle();
		
	})
	$('.c_verticalNav li').hover(function(){
  		var n = $(this).index();
  		$('.c_nav_show').find('.c_nav_show1').eq(n).toggle();
  		
  	})
	//小导航切换
	$('.c_c_border').find('.c_c_inf').eq(0).show()
	$('.c_c_nav li').click(function(){
		$('.c_c_nav li').css({'border-bottom':'1px solid red','border-top':'none','color':'#999999'})
		$(this).css({'border-bottom':'none','border-top':'2px solid red','color':'#d32402'});
		var n = $(this).index();
		$('.c_c_border').find('.c_c_inf').eq(n).show().siblings().hide();
		
	})
	//隔行换色
	//所有偶数 从0开始
	$('.c_c_inf li:even').css({'background':'#faf3f0','font-weight':'bolder'})
	$('.long_show').css('background','#aa7d5c');
	
//	$('.c_c_nav li').click(function(){
//		
//	})
	
	
	var data=['江西','江苏','安徽','山东','甘肃','浙江','湖北','湖南','吉林','天津','上海','重庆','河北','山西','辽宁','北京','黑龙江','福建','河南','广东','海南','四川','贵州','云南','陕西','青海','内蒙古','广西','宁夏']
		
		for (var i = 0; i < data.length; i++) {
			$('.p_show ul').append('<li>'+data[i]+'</li>')
		}
	$('.p_show li').hover(function(){
		$(this).css('background','blue').siblings().css('background','white')
	})
	
	$('.p_show li').click(function(){
		var n = $(this).text();
		$('.c_p_p1').text(n);
		
		$('.p_show').hide();
		$('.p_show1').show();
		$('.c_p_p1').css({'border':'1px solid #DDDDDD','color':'#cccccc'});
		$('.c_p_p2').css({'border':'1px solid red','border-bottom':'none','color':'red'})
	})
	
	$('.c_add').hover(function(){
		$('.c_province').show()
		$('.c_cha').show();
	},function(){
		$('.c_province').hide()
		$('.c_cha').hide();
	})
	
	$('.c_province').hover(function(){
		$(this).show();
		$('.c_cha').show();
	},function(){
		$(this).hide();
		$('.c_cha').hide();
	})
	
	
	$('.c_cha').click(function(){
		$(this).hide();
		$('.c_province').hide()
		
	})
	var name=['南昌市','抚州市','赣州市','吉安市','景德镇','九江市','萍乡市','上饶市','新余市','宜春市','鹰潭市']
	 for (var i = 0; i < name.length; i++) {
	 	$('.p_show1 ul').append('<li>'+name[i]+'</li>')
	 }
	 
	$('.p_show1 li').click(function(){
		var n = $(this).text();
		$('.c_p_p2').text(n);
		$('.c_province').hide();
		var m = $('.c_p_p1').text();
		$('.c_p_p3').text(m);
		$('.c_p_p4').text(n);
	})
	
	$('.p_show1 li').hover(function(){
		$(this).css('background','blue').siblings().css('background','white')
	})
		$('.c_p_p1').click(function(){
			$('.p_show').show()
			$('.p_show1').hide()
			$('.c_p_p1').css({'border':'1px solid red','border-bottom':'none','color':'red'})
			$('.c_p_p2').css({'border':'1px solid #DDDDDD','color':'#cccccc'});
		})
		$('.c_p_p2').click(function(){
			$('.p_show').hide()
			$('.p_show1').show()
			$('.c_p_p2').css({'border':'1px solid red','border-bottom':'none','color':'red'})
			$('.c_p_p1').css({'border':'1px solid #DDDDDD','color':'#cccccc'});
		})
		
		$('.paopao').click(function(){
			$('.tk').css('display','block');
		})
		
		$('.share_t').scroll(function(){
			
		})
		
		var share=['微信','微博','QQ好友','QQ空间','复制网址','收藏夹','打印','邮件','人人网','开心网','印象比记','领英','飞信','豆瓣','Twitter',
		'Facebook','一键分享','猜你喜欢','易信','花瓣网','腾讯微博','Google+','阿里巴巴','朋友网','麦库笔记','百度搜藏','Gmail邮箱','有道云笔记',
		'天涯社区','百度贴吧','轻笔记','凤凰微博','饭否','明道','豆瓣9点','谷歌','谷歌Buzz','有道书签','QQ书签','MSN','Pinterest','堆糖','摇篮微博',
		'百度空间','Hotmail邮箱','雪球','和讯','139邮箱','189邮箱','翼友圈','人民微博','新华微博','谷歌翻译','推他','猫扑推客','美丽说','蘑菇街',
		'赶牛网','Poco网','雷猴网','和讯微博','游戏江湖','法律微博','Tumblr','Reddit','Instapaper','Pocket','财迷','WO+分享','挖客网','创业邦'
		,'救救地球','抽屉网','迪克网','一集网','Pdf在线转换','友好打印','W3c验证','Bit.y','Digg','Mail.ru','Diigo','FriendFeed','Myspace',
		'Mixx','NetLog','Netvibes','Phonefavs','Ping.fm']
		for (var i = 0; i < share.length; i++) {
	 		$('.share_t ul').append('<li><a>'+share[i]+'</a></li>')
	 	}
		$('.share_t li').hover(function(){
			$(this).css('background','#f2f2f2').siblings().css('background','white')
		},function(){
			$(this).css('background','white')
		})
		
		
		$(".share_w input").keyup(function(){
			if($(this).val()!=""){
				$(".share_t ul").children("li").hide().filter("li:contains("+$(this).val()+")").show();
			}else{
				$(".share_t ul").children("li").show();
			}
		});
		
		$(".share_t li").click(function(){
			$("#text").val($(this).text());
		});
		
		$('.share_w_top span').click(function(){
			$('.tk').css('display','none');
		})
		
		var t = $('.tk').outerHeight()
		var w = $('.tk').outerWidth()
		
		var top = ($(window).height()-t)/2;
		var left = ($(window).width()-w)/2;
		
		$('.tk').css({'top':top,'left':left});
		$(window).on('scroll resize',function(){
			var top = ($(window).height()-t)/2+$(window).scrollTop();
		    var left = ($(window).width()-w)/2+$(window).scrollLeft();
		    $('.tk').css({'top':top,'left':left});
		})
		
		
		//产品轮播图
		var l=0;
		var w_img = $('.c_gujian img').width();
		var clone1 = $('.c_gujian li').first().clone();
		$('.c_gujian ul').append(clone1)
		var size=$('.c_gujian li').size();
		$('.c_small_img li').first().addClass('on').siblings().removeClass('on');
		$('.c_right').click(function(){
			l++;
			if(l==size){
				
				$('.c_gujian ul').css({'left':'0'});
				l=1;
				
			}	
				
				$('.c_gujian ul').stop().animate({'left':-w_img*l});
				if(l==size-1){
					$('.c_small_img li').eq(0).addClass('on').siblings().removeClass('on');
					$('#img1').attr('src','img/dachuang'+1+'.jpg')
				}else{
					$('.c_small_img li').eq(l).addClass('on').siblings().removeClass('on');
					$('#img1').attr('src','img/dachuang'+(l+1)+'.jpg')
				}
				
			
		})
		
		$('.c_left').click(function(){
			l--;
			
			
			if(l==-1){
				$('.c_gujian ul').css({'left':-w_img*(size-1)});
				l=size-2;
			}
				$('.c_gujian ul').stop().animate({'left':-w_img*l});
				$('.c_small_img li').eq(l).addClass('on').siblings().removeClass('on');
				$('#img1').attr('src','img/dachuang'+(l+1)+'.jpg')
		})
		$('.c_small_img li').click(function(){
			l=$(this).index();
			$('.c_gujian ul').stop().animate({left:-w_img*l});
			$(this).addClass('on').siblings().removeClass('on');
		})
		
		$('.c_small_img li').click(function(){
			var n = $(this).index();
			$('#img1').attr('src','img/dachuang'+(n+1)+'.jpg')
		})
		
		$('.c_o_btn2').click(function(){
			
			$.cookie('src',$('#img1').attr('src'),{expires:7});
			$.cookie('bt',$('#l_name').text(),{expires:7});
			$.cookie('bh',$('#c_shu').text(),{expires:7});
			$.cookie('money',$('.c_span2').text(),{expires:7});
			$('.num').text(1);
			alert('成功')
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


window.onload = function(){
	var oDiv = document.getElementsByClassName('c_gujian')[0];
	var oShow = document.getElementById('c_show');
	var oSpan=document.getElementById('c_c_span');
	var oImg=document.getElementById('img1'); 
	var oImgparent =document.getElementsByClassName('fdj')[0];
	
		oShow.onmouseover=function(){ 
			oSpan.style.display='block'; 
			oImg.parentNode.style.display='block'; 
		}; 
		oShow.onmouseout=function(){ 
			oSpan.style.display='none'; 
			oImg.parentNode.style.display='none'; 
		}; 
		oShow.onmousemove=function(ev){ 
			var oEvent=ev||event; 
			var x=oEvent.clientX-oDiv.offsetLeft-oSpan.offsetWidth-50; 
			var y=oEvent.clientY-oDiv.offsetTop-oSpan.offsetHeight/4; 

		if(x<0){ 
			x=0; 
		}else if(x>oShow.offsetWidth-oSpan.offsetWidth){ 
			x=oShow.offsetWidth-oSpan.offsetWidth; 
		} 
		if(y<0){ 
			y=0; 
		}else if(y>oShow.offsetHeight-oSpan.offsetHeight){ 
			y=oShow.offsetHeight-oSpan.offsetHeight 
		} 

		oSpan.style.left=x+'px'; 
		oSpan.style.top=y+'px'; 
		var percentX=x/(oShow.offsetWidth-oSpan.offsetWidth); 
		var percentY=y/(oShow.offsetHeight-oSpan.offsetHeight); 

		oImg.style.left=-percentX*(oImg.offsetWidth-oImgparent.offsetWidth)+'px'; 
		oImg.style.top=-percentY*(oImg.offsetHeight-oImgparent.offsetHeight)+'px'; 
	}; 
	
	
	
}
