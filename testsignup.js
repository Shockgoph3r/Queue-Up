$(document).ready(function(){
	var firebase = new Firebase('https://queueue.firebaseio.com/');

	$("#signup").click(function(e){
		e.preventDefault();
		firebase.once("value",function(snapshot){
			// console.log("ihf");
			var username = $("#un").val();
			var password = $("#pw").val();
			console.log(username+"___"+password);
			var ref = firebase.child(username);
			// console.log("sdfih");
			ref.set(password);
			// console.log("hihi");
		});
	})
})