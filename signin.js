$(document).ready(function(){
	var firebase = new Firebase('https://queueue.firebaseio.com/');

	function checkLogin(username, password){
		var ref=firebase.child(username);
		ref.once("value",function(snapshot){
			return snapshot.val() == password;
		});
		return false;
	}

	$("#signup").click(function(e){
		e.preventDefault();
		checkLogin("sfsf","sfsf");
	})
})