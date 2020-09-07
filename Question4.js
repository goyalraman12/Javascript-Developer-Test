<script>
	function validateForm() {
		var x = document.forms["myForm"]["firstname"].value;
		var y = document.forms["myForm"]["checkme"].value;
		if (x == "" || x == null || y == null || y== false) {
			alert("Some Field is missing, Please fill again");
			return false;
		}
	}
</script>