document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registrationForm');
    const firstName = document.getElementById('firstName');
    const middleName = document.getElementById('middleName');
    const lastName = document.getElementById('lastName');
    const course = document.getElementById('course');
    const mobile = document.getElementById('mobile');
    const gender = document.getElementsByName('gender');
    const address = document.getElementById('address');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    const firstNameError = document.getElementById('firstNameError');
    const middleNameError = document.getElementById('middleNameError');
    const lastNameError = document.getElementById('lastNameError');
    const courseError = document.getElementById('courseError');
    const mobileError = document.getElementById('mobileError');
    const genderError = document.getElementById('genderError');
    const addressError = document.getElementById('addressError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    registrationForm.addEventListener('submit', function (e) {
        let isValid = true;

        // Reset previous error messages
        firstNameError.textContent = '';
        middleNameError.textContent = '';
        lastNameError.textContent = '';
        courseError.textContent = '';
        mobileError.textContent = '';
        genderError.textContent = '';
        addressError.textContent = '';
        emailError.textContent = '';
        passwordError.textContent = '';
        confirmPasswordError.textContent = '';

        // Validate First Name
        if (!firstName.value.trim()) {
            firstNameError.textContent = 'First Name is required';
            isValid = false;
        }

        // Validate Last Name
        if (!lastName.value.trim()) {
            lastNameError.textContent = 'Last Name is required';
            isValid = false;
        }

        // Validate Course
        if (course.value === '') {
            courseError.textContent = 'Please select a course';
            isValid = false;
        }

        //