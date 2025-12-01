const form = document.getElementById('newsletter-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const feedbackDiv = document.getElementById('feedback');

// form.addEventListener('submit', function(event) {
//     event.preventDefault();
//     feedbackDiv.innerHTML = '';

//     const name = nameInput.value.trim();
//     const email = emailInput.value.trim();
//     let valid = true;

//     if (name === '') {
//         valid = false;
//         const nameError = document.createElement('p');
//         nameError.textContent = 'Name is required.';
//         feedbackDiv.appendChild(nameError);
//     }

//     const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
//     if (!email.match(emailPattern)) {
//         valid = false;
//         const emailError = document.createElement('p');
//         emailError.textContent = 'Please enter a valid email address.';
//         feedbackDiv.appendChild(emailError);
//     }

//     if (valid) {
//         const successMessage = document.createElement('p');
//         successMessage.textContent = 'Form submitted successfully!';
//         feedbackDiv.appendChild(successMessage);
//         form.reset();
//     }
// }); 

form.addEventListener("submit", function(event){
    event.preventDefault();
    feedbackDiv.innerHTML = '';
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    let valid = true;

    if (name === ''){
        valid = false;
        const nameError = document.createElement('p');
        nameError.textContent = 'Name is required.';
        feedbackDiv.appendChild(nameError);
    }

    if (valid){
        const successMessage = document.createElement('p');
        successMessage.textContent = 'Form submitted successfully!';
        feedbackDiv.appendChild(successMessage);
        form.reset();
    }
    


})


