// HTML elements area started
const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const age = document.querySelector('#age');
const cnic = document.querySelector('#cnic')
const password = document.querySelector('#password');
// HTML elements area ended

// JS Regex area started
const usernameRegex = /^[a-zA-Z0-9_]{4,15}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
const cnicRegex = /^\d{5}-\d{7}-\d{1}$/;
const ageRegex = /^(1[89]|[2-5][0-9]|60)$/;
// JS Regex area ended

form.addEventListener('submit' , (event) => {
    event.preventDefault();

    if(usernameRegex.test(username.value)){
        console.log(username.value)
    }
    else{
        console.log('Give right username')
    }

    if(emailRegex.test(email.value)){
        console.log(email.value);
    }
    else{
        console.log('Give right email');
    }

    if(ageRegex.test(age.value)){
        console.log(age.value);
    }
    else{
        console.log('Give right age');
    }

    if(cnicRegex.test(cnic.value)){
        console.log(cnic.value);
    }
    else{
        console.log('Give right CNIC');
    }

    if(passwordRegex.test(password.value)){
        console.log(password.value);
    }
    else{
        console.log('Give right password');
    }
})
