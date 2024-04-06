document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional manner
    alert('Your payment details is submitted successfully! Enjoy your Shopping.');
    window.location.href = 'index.html'; // Redirect to the homepage
});
function handleSearchSubmit(event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    // Redirect to 'shop.html'
    window.location.href = 'index.html';
}
