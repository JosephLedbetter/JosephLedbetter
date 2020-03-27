const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// show input error message when completed incorrectly outline red
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// successfull input outline green
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}


// validation for the legitimate email 
function checkEmail(input) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){ 
        showSuccess(input)
    } else {
        showError(input, 'Email is not valid');
    }
}

// checking all required fields and looping through arrays
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input)
        }  
    });
}

// checking length of the inputs following...
function checkLength(input, min, max){
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be atleast ${min} characters`)
    } else if (input.value.length > max){
        showError(input, `${getFieldName(input)} must be smaller than ${max} characters`)
    } else {
        showSuccess(input);
    }
}

// **** Function checking that passwords match
function checkPassword(input1, input2){
if (input1.value !== input2.value){
    showError(input2, 'Passwords do not match')
    }
};


function getFieldName (input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// eventlistener 
form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(`username: ${username.value}`);
    console.log(`email: ${email.value}`);
    console.log(`password: ${password.value}`);
    console.log(`password2: ${password2.value}`);

    // inputting separate functions to listener to complete validation other than 'if/else'

 checkRequired([username, email, password, password2]);
 checkLength(username, 3, 15);
 checkLength(password, 6, 20);
 checkEmail(email);
 checkPassword(password, password2);
});



    // console.log(`Username: ${username.value}`);
    // // if(username.value === ''){
    // //     showError(username, "Username required");
    // // }else {
    // //     showSuccess(username);
    // // }

    // // console.log(`Email: ${email.value}`);
    // // if (email.value === ''){
    // //     showError(email, "Email required");
    // // }
    // // else if(!isValidEmail(email.value)){
    // //     showError(email, "Not a valid email")
    // // }
    // //  else {
    // //      showSuccess(email)
    // // }

    // // console.log(`Password: ${password.value}`);
    // // if (password.value === ''){
    // //     showError(password, "Password invalid");
    // // } else {
    // //     showSuccess(password)
    // // }

    // // console.log(`Confirmed Password: ${password.value}`);
    // // if (password.value === ''){
    // //     showError(password2, "Password invalid");
    // // } else {
    // //     showSuccess(password2)
    // // }
