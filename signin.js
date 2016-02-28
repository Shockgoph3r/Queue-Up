$(document).ready(function(){
	var firebase = new Firebase('https://queueue.firebaseio.com/');

	function checkLogin(username, password){
		var ref=firebase.child(username);
		ref.once("value",function(snapshot){
			var ret = snapshot.val() == password;
			// console.log(ret);
			return ret;
		});

		return false;
	}

	$("#signup").click(function(e){
		e.preventDefault();
		checkLogin("sfsf","sfsf");
	})
})