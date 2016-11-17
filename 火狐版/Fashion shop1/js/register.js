window.onload = function(){
	var phone = document.getElementsByClassName("r_phone")[0];
	var y_phone = document.getElementById("y_phone");
	var vc = document.getElementById("vc");
	var i_inf = document.getElementsByClassName("i_inf")[0];
	var i_inf2 = document.getElementsByClassName("i_inf2")[0];
	var r_time = document.getElementById("r_time");
	var i_inf3 = document.getElementsByClassName("i_inf3")[0];
	var r_emal1 = document.getElementsByClassName("r_emal1")[0];
	var email = document.getElementById("email");
	var r_password = document.getElementsByClassName("r_password")[0];
	var pw = document.getElementById("pw");
	var r_password3 = document.getElementsByClassName("r_password3")[0];
	var pw2 = document.getElementById("pw2");
	phone.onblur=function(){
		y_phone.style.color = "red";
		var str = phone.value;
		var reg = /^1[34578]\d{9}$/;
		reg.test(str);
		if(reg.test(str) == false){
			y_phone.innerHTML = "请填写正确的手机号码";
			
		}else if(reg.test(str) == true){
			y_phone.innerHTML ="OK"
		}
	}
	
	vc.onclick=function(){
		if(y_phone.innerHTML == "OK"){
			var str0="";
			for(var i=0;i<4;i++){
				var isTrue = parseInt(Math.random()*100)%3;
				var num =0;
				if(isTrue == 0){
					num = parseInt(Math.random()*1000)%10+48;
				}else if(isTrue == 1){
					num = parseInt(Math.random()*1000)%26+97;
				}else{
					num = parseInt(Math.random()*1000)%26+65;
				}
				str0 = str0.concat(String.fromCharCode(num));
			}
			vc.innerHTML = str0;
			i_inf.onblur = function(){
				var ctt = i_inf.value;
				if(ctt !== str0){
					alert("验证码有误")
				}else{
					i_inf3.innerHTML="OK";
				}
			}
		}else{
			alert("请填写正确的手机号码");
		}
	}
	
	r_emal1.onblur =function(){
		email.style.color = "red";
		var str = r_emal1.value;
		var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		reg.test(str);
		if(reg.test(str)){
			email.innerHTML = "OK";
			
		}else{
			email.innerHTML = "邮箱填写有误";
			
		}
	}
	
	r_password.onblur =function(){
		pw.style.color = "red";
		var str = r_password.value;
		var reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{6,20}$/;//必须包含大小写
		reg.test(str);
		if(reg.test(str)){
			pw.innerHTML = "OK";
			r_password3.onblur=function(){
				var str1 = r_password.value;
				var str2 = r_password3.value;
				if(str1 === str2){
					pw2.innerHTML = "OK";
				}else{
					pw2.innerHTML = "密码填写有误";
				}
			}
			
		}else{
			pw.innerHTML = "密码填写有误";
			
		}
	}
	
		
}
