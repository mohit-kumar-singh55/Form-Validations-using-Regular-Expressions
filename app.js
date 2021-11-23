console.log("Welcome!");

const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validUser = false;
let validEmail = false;
let validPhone = false;
$('#success').hide();
$('#failure').hide();

name.addEventListener('blur',()=>{
    // validate your name here

    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/
    let str = name.value;

    if(regex.test(str)){
        console.log('Your name is valid');
        name.classList.remove('is-invalid');
        validUser = true;
    }
    else{
        console.log("Your name is not valid");
        name.classList.add('is-invalid');
        validUser = false;
    }
})

email.addEventListener('blur',()=>{
    // validate your email here

    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/
    let str = email.value;

    if(regex.test(str)){
        console.log('Your email is valid');
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else{
        console.log("Your email is not valid");
        email.classList.add('is-invalid');
        validEmail = false;
    }
})

phone.addEventListener('blur',()=>{
    // validate your phone here

    let regex = /^([0-9]){10}$/
    let str = phone.value;

    if(regex.test(str)){
        console.log('Your phone is valid');
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else{
        console.log("Your phone is not valid");
        phone.classList.add('is-invalid');
        validPhone = false;
    }
})

let submit = document.getElementById("submit");

submit.addEventListener('click',(e)=>{
    e.preventDefault();

    // submit your form here
    if(validUser && validEmail && validPhone){
        console.log("OK");
        let success = document.getElementById('success');
        let failure = document.getElementById('failure');
        success.classList.add('show');
        // failure.classList.remove('show');
        // $('#failure').alert('close');
        $('#failure').hide();
        $('#success').show();
    }
    else{
        console.log("NO");
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        // success.classList.remove('show');
        // $('#success').alert('hide');
        $('#success').hide();
        $('#failure').show();
    }
})