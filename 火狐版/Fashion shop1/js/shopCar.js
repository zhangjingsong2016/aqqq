$(function(){
	var n = $('#s_thead').find('td');
	$(n).css('height','45px')
	$(n).eq(0).css({'width':'120px'})
	$(n).eq(1).css({'width':'300px'})
	$(n).eq(2).css({'width':'90px'})
	$(n).eq(3).css({'width':'130px'})
	$(n).eq(4).css({'width':'100px'})
	$(n).eq(5).css({'width':'120px'})
	$(n).eq(6).css({'width':'45px'})
	
	
	
	var m = $('.s_tbody2').find('td');
	$(m).css('height','107px');
	$(m).eq(0).css({'width':'420px'})
	$(m).eq(1).css({'width':'90px'})
	$(m).eq(2).css({'width':'130px'})
	$(m).eq(3).css({'width':'100px'})
	$(m).eq(4).css({'width':'120px'})
	$(m).eq(5).css({'width':'40px'})
	
	
	
	$('#s_img').append('<img src="'+$.cookie('src')+'" />');
	$('#s_h').append('<a href="#">'+$.cookie('bt')+'</a>')
	$('#bh').append('<i>'+$.cookie('bh')+'</i>')
	$('#money').append('<i>'+$.cookie('money')+'</i>')
	$('#money3').append('<span>'+$.cookie('money')+'</span>')
	
	var t = $('#money3').text();
	var q=parseInt($.cookie('money'));
	var num=1;
	if(t=q){
		$('#s_s').val(1);
	}
	$('#s_zj').text(t);
	$('#s_zj2').text(t);
	$('.jia').click(function(){
			num++;
			
			$('#s_s').val(num);
			$('#money3').text('');
			var m = parseInt($.cookie('money'));
			q+=m
			$('#money3').append(q);
			$('#s_zj').text($('#money3').text());
			$('#s_zj2').text($('#money3').text());
	})
	
	$('.jian').click(function(){
		if($('#s_s').val()==1){
			$('#s_s').val(1);
			$('#money3').text(parseInt($.cookie('money')));
			$('#s_zj').text(parseInt($.cookie('money')));
			$('#s_zj2').text(parseInt($.cookie('money')));
		}else{
			num--;
			$('#s_s').val(num);
			var u = parseInt($('#money3').text());
			u-=parseInt($.cookie('money'));
			$('#money3').text(u);
			$('#s_zj').text($('#money3').text());
			$('#s_zj2').text($('#money3').text());
		}
	})
	
	$('#dele').click(function(){
		$.cookie("src",null);
		$.cookie("bt",1);
		$.cookie("bh",null);
		$.cookie("money",null);
		$(this).parents('.s_tbody2').hide();
		$('#s_tfoot').hide();
		$('.js_inf').hide();
		$('.s_tbody').show();
	})
	
	
	if($.cookie("bt") ==1){
		$('.s_tbody2').hide();
		$('#s_tfoot').hide();
		$('.js_inf').hide();
		$('.s_tbody').show();
	}
	if($.cookie("bt") !=1){
		$('.s_tbody2').show();
		$('#s_tfoot').show();
		$('.js_inf').show();
		$('.s_tbody').hide();
		
	} 
	if($.cookie("bt") ==undefined){
		$('.s_tbody2').hide();
		$('#s_tfoot').hide();
		$('.js_inf').hide();
		$('.s_tbody').show();
		
	} 
	$('#qk').click(function(){
		$.cookie("src",null);
		$.cookie("bt",1);
		$.cookie("bh",null);
		$.cookie("money",null);
		$('.s_tbody2').hide();
		$('#s_tfoot').hide();
		$('.js_inf').hide();
		$('.s_tbody').show();
	})
	
})
window.onload =function(){

}
