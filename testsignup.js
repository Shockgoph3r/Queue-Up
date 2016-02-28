$(document).ready(function(){
	var firebase = new Firebase('https://queueue.firebaseio.com/');

	function checkLogin(username, password, textBack){
		var ref=firebase.child(username);
		ref.once("value",function(snapshot){
			var ret = snapshot.val() == password;
			// console.log(ret);
			textBack(ret);
		});
	}

	$("#signup").click(function(e){
		e.preventDefault();
		// firebase.once("value",function(snapshot){
			// console.log("ihf");
			var username = $("#un").val();
			var password = $("#pw").val();
			// console.log(username+"___"+password);
			var ref = firebase.child(username);
			// console.log("sdfih");
			ref.set(password);
			// console.log("hihi");
			alert("Your account was successfully created!");
			window.location.href = "buttons.html";
		// });
	})

	$("#signin").click(function(e){
		e.preventDefault();
			var username = $("#un").val();
			var password = $("#pw").val();
		checkLogin(username,password, function(answer) {

			if(answer){
				window.location.href = "buttons.html";
			}else{
				alert("The username/password combination is invalid :(");
			} 
		});
		//console.log("5"+check);
		//if(check){
		//	window.location.href = "buttons.html";
		//}else{
		//	alert("The username/password combination is invalid :(");
		//} //USE THIS TO ACTUALLY SIGN IN!!!!! :OOOOOOO
	})
})