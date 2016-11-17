
//保存数据   name = value  day
function setCookie(name,value,expiresDay) {
	var date = new Date();
	date.setDate(date.getDate() + expiresDay);
	document.cookie = name + "=" 
			+ encodeURIComponent(value) + ";expires=" + date;
}

//读取数据  name   --->  返回指定的name 对应的值
////username="张三"; userpasswd=12345; userpasswd=12345;
function getCookie(name){
	//清除 cookie空格
	var cookieString = document.cookie.replace(/ /g,"");
	var cookieArray = cookieString.split(";");
	
	for(var i = 0; i < cookieArray.length;i++) {
		var array = cookieArray[i].split("=");
		if(array[0] == name) {
			return decodeURIComponent(array[1]);
		}
	}
	
	return null;
}

//删除数据   name 
function removeCookie(name){
	var date = new Date();
	document.cookie = name + "=" 
			+ "" + ";expires=" + date;
}

