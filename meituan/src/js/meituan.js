window.onload=function(){
	var the_s = 564321;
	setInterval(promote,1000);
	function promote() {
	    var d = Math.floor((the_s / 3600) / 24);
	    var g = Math.floor((the_s - d * 24 * 3600) / 3600);
	    var e = Math.floor((the_s - d * 24 * 3600 - g * 3600) / 60);
	    var f = (the_s - g * 3600) % 60;
	    document.getElementById("time1").innerHTML = g;
	    document.getElementById("time2").innerHTML = e;
	    document.getElementById("time3").innerHTML = f;
	    the_s--;
	}
}
$(function(){
	var swiper = new Swiper('.swiper-container', {
		        pagination: '.swiper-pagination',
		        paginationClickable: true,
		        spaceBetween: 30,
		    });
		    
		    $(function(){
			
			var $datalist = $('#datalist');
			var $ul = $datalist.children('ul');
			var index = 0;

			
			$(window).on('scroll',function(){
				
				var scrollTop = $(window).scrollTop();
				
				
				var docHeight = $(document).height();

				
				var winHeight = $(window).height();
				
				
				if(scrollTop >= docHeight - winHeight){
					index++;
					
					$('#loading').show();
					ajax(showImg);

				}
				
	
			});
			
			function ajax (callback) {
				
				var i = (index == 1) ? index : index * 15;
				if(i>20){
					$('#loading').css('display','none');
					return;
				}
				$.ajax({
						url:'http://diviner.jd.com/diviner?p=610009&uuid=12396477&lid='+i+'&lim=15&cb=tempGuessLikeCallback',
						dataType:'jsonp',
						jsonp: 'callback',
						jsonpCallback: 'tempGuessLikeCallback',
						scriptCharset: 'gb2312',

						success:function(res){
							var data = res.data;
							
							var _html = '';
							$.each(data,function(idx,obj){
								
								_html += '<li><div class="p-img"><a href="' + obj.clk +'"><img src="images/load.jpg" data-lazy-img="http://img13.360buyimg.com/n1/s200x200_'+ obj.img +'"></a></div><div class="p-name"><a href="">' + unescape(obj.t) + '</a></div><div class="p-price"><b>' + obj.jp + '</b></div></li>';
							});
							$('<ul/>').addClass('list-'+index).html(_html).appendTo($datalist);
							
							
							if (typeof callback == 'function') {
								callback();
								
							}
							
						}
					});
			}
			
			
			function showImg () {
				$('.list-' + index + ' img').each(function (){
					$(this).animate({opacity:0.3}, 500, function() {
						$(this).attr('src', $(this).attr('data-lazy-img')).animate({opacity: 1}, 1000);
					});
				})
			}
		});
		
		$(".fh").click(function () {
	        var speed=200;
	        $('body,html').animate({ scrollTop: 0 }, speed);
	        return false;
   		});
 		
   		$(window).scroll(function(event){
   			var height = $(this).scrollTop();
   			if(height>700){
   				$(".fh").show();
   			}else{
   				$(".fh").hide();
   			}
   		})

	    
	          
	   
		
})