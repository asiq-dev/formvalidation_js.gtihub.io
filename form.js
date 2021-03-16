<script type="text/javascript">
	function validate () {
		var name=document.getElementById('name').value.trim();
		var phone=document.getElementById('phone').value.trim();
		var email=document.getElementById('email').value.trim();
		var textarea=document.getElementById('textarea').value.trim();
		var password=document.getElementById('password').value.trim();
		var r_password=document.getElementById('r_password').value.trim();

		if (name=='' || phone=='' || email=='' || textarea=='' || password=='' || r_password=='') {
			if (name=='') {
				document.getElementById('e_name').innerHTML='Name Field is Mendatory' 
			}else {
				document.getElementById('e_name').innerHTML=''
			}

			if (phone=='') {
				document.getElementById('e_phone').innerHTML='Phone Field is Mendatory'
			}else {
				document.getElementById('e_phone').innerHTML=''
			}

			if (email=='') {
				document.getElementById('e_email').innerHTML='Email Field is Mendatory'

			}else {
				var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
				if(email.match(mailformat)){
					document.getElementById('e_email').innerHTML=''
				}else{
					document.getElementById('e_email').innerHTML='Please insert valid email'
				}
			}
			if (textarea=='') {
				document.getElementById('e_textarea').innerHTML='Textarea Field is Mendatory'

			}else {
				document.getElementById('e_textarea').innerHTML=''
			}
			if (password=='') {
				document.getElementById('e_password').innerHTML='Password Field is Mendatory'

			}else {
				document.getElementById('e_password').innerHTML=''
			}
			if (r_password=='') {
				document.getElementById('e_r_password').innerHTML='Re-Password Field is Mendatory'

			}else {
				document.getElementById('e_r_password').innerHTML=''
			}
			return false;
		} else{

		     document.getElementById('e_name').innerHTML=''
			 if(isNaN(phone)){
					document.getElementById('e_phone').innerHTML='Phone Should be Number only!'
				}else{
					document.getElementById('e_phone').innerHTML='';
				}

			T_len=textarea.length;
				if (T_len>20) {
					  document.getElementById('e_textarea').innerHTML=''
					}else{
					document.getElementById('e_textarea').innerHTML='Messege Must be over than 20 Character';
					}
             p_len=password.length;
             if (p_len>5) {
             	document.getElementById('e_password').innerHTML='';
             }else{
             	document.getElementById('e_password').innerHTML='Password  must contain 6 Character';
             }
             if (password===r_password) {
             	document.getElementById('e_r_password').innerHTML='';
             }else{
             	document.getElementById('e_r_password').innerHTML='Password does not match';
             }

			var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if(email.match(mailformat)){
		return true
		}else{
			document.getElementById('e_email').innerHTML='Please insert valid email'
			return false
		}
		}
		return true

	}
function chk_pass(m){
	l=m.length;
	if (l>5) {
		document.getElementById('e_password').innerHTML='';
	}else{
		document.getElementById('e_password').innerHTML='Password Minimum 6 Character';
	}
}
</script>