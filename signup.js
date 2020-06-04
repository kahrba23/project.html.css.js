
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const phonenumber = document.getElementById('phonenumber');
const address = document.getElementById('address');

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const phonenumberValue = phonenumber.value.trim();
    const addressValue = address.value.trim();
    const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
    if(firstnameValue === '') {
		setErrorFor(firstname, 'Firstname not entered');
    } 
    else {
		setSuccessFor(firstname);
    }
    if(lastnameValue === '') {
		setErrorFor(lastname, 'Lastname not entered');
    }
     else {
		setSuccessFor(lastname);
    }
    
    if(usernameValue === '') {
		setErrorFor(username, 'Username not entered');
    }
     else {
		setSuccessFor(username);
    }
    
	
	if(emailValue === '') {
		setErrorFor(email, 'Email not entered');
    } 
    else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
    } 
    else {
		setSuccessFor(email);
    }
    

	
	if(passwordValue === '') {
		setErrorFor(password, 'Password not entered');
	} 
	
      else if(passwordValue[0].search(/[A-Z]/)===-1)
    {
		setErrorFor(password,'Password must be start with uppercase charachter');
    }
    else if(passwordValue.search(/[0-9]/)===-1)
    {
        setErrorFor(password,'Password must have at least 1 digit');
    }
    else if (passwordValue.search(/[!\@\#\$\%\^\&\*\(\)\_\+\-\.\;\,\:]/)==-1)
    {
        setErrorFor(password,'Password must contain one special charachter');
    }
    else if (passwordValue.search(/[ ]/)!==-1)
    {
        setErrorFor(password,'Password must not contain space ');
    }
    else if (passwordValue.length<8)
    {
        setErrorFor(password,'The length of password must be 8 charachter');
    } 
    else if (passwordValue.length>8)
    {
        setErrorFor(password,'The length of password must be  8 charachter');
    } 
    
    else {
		setSuccessFor(password);
    }
    if(password2Value==='')
    {
        setErrorFor(password2, 'Password does not match');  
    }
    
    else{
        setSuccessFor(password2);
    }
    if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Password does not match');
    }
    
     
    
    if(phonenumberValue==='')
    {
        setErrorFor(phonenumber,'Phonenember must be entered');
    }
    
     if(phonenumberValue.length!==11)
    {
        setErrorFor(phonenumber,'The length of phonenumber must be  11 number '); 
    }
    else if(phonenumberValue.search(/[a-z]/)!==-1)
    {
        setErrorFor(phonenumber,'Phonenumber must consist of numbers only '); 
    }
    else if(phonenumberValue.search(/[A-Z]/)!==-1)
    {
        setErrorFor(phonenumber,'Phonenumber must consist of numbers only '); 
    }
    else if(phonenumberValue.search(/[!\@\#\$\%\^\&\*\(\)\_\+\-\.\;\,\:]/)!==-1)
    {
        setErrorFor(phonenumber,'Phonenumber must consist of numbers only '); 
    }
    else if(phonenumberValue.search(/[ ]/)!==-1)
    {
        setErrorFor(phonenumber,'Phonenumber must consist of numbers only '); 
    }
    
    else
    {
        setSuccessFor(phonenumber);
    }
    if(addressValue==='')
    {
        setErrorFor(address,'Address not entered'); 
    }
    else
    {
        setSuccessFor(address);  
    }
    

}

function setErrorFor(input, message) {
  
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control succes';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
