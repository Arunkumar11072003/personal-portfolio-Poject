// Basic contact form validation
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for reaching out, ' + name + '! I will get back to you soon.');
    } else {
        alert('Please fill in all fields.');
    }
});
