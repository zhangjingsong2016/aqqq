window.onload =function(){
	var s_phone1 = document.getElementsByClassName("s_phone1")[0];
	var s_span1 = document.getElementById("s_span1");
	var s_password1 = document.getElementsByClassName("s_password1")[0];
	var s_span2 = document.getElementById("s_span2");
	var s_btn = document.getElementsByClassName("s_btn")[0]
	var s_a = document.getElementById("s_a");
	
	s_phone1.onblur=function(){
		
		s_span1.style.color = "red"
		var cont = s_phone1.value;
		var reg = /^1[34578]\d{9}$/;
		var rag = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		reg.test(cont);
		rag.test(cont);
		if(reg.test(cont) == true || rag.test(cont)== true){
			s_span1.innerHTML = "OK";
		}else{
			s_span1.innerHTML = "输入有误";
		}
	}
	
	s_password1.onblur=function(){
		s_span2.style.color = "red"
		var cont = s_password1.value;
		var reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{6,20}$/;
		reg.test(cont);
		if(reg.test(cont)){
			s_span2.innerHTML = "OK";
		}else{
			s_span2.innerHTML = "密码输入有误";
		}
	}

	
}
