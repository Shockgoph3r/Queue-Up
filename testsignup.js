$(document).ready(function(){
	var firebase = new Firebase('https://queueue.firebaseio.com/');

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
		// });
	})

	$("#signin").click(function(e){
		e.preventDefault();
		// firebase.once("value",function(snapshot){
			// console.log("ihf");
			var username = $("#un").val();
			var password = $("#pw").val();
			// console.log(username+"___"+password);
			// var ref = firebase.child(username);
			// console.log("sdfih");
			// ref.set(password);
			// console.log("hihi");
		// });
		checkLogin(username,password); //USE THIS TO ACTUALLY SIGN IN!!!!! :OOOOOOO
	})

	function checkLogin(username, password){
		var ref=firebase.child(username);
		ref.once("value",function(snapshot){
			var ret = snapshot.val() == password;
			// console.log(ret);
			return ret;
		});

		return false;
	}
})