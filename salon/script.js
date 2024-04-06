document.getElementById('purchaseForm').onsubmit = function(event) {
    event.preventDefault(); // Prevent form from submitting traditionally
    alert('Your data submitted successfully! Click OK to continue.');
    window.location.href = 'payment.html'; // Redirect to homepage
};
function handleSearchSubmit(event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    // Redirect to 'payment.html'
    window.location.href = 'index.html';
}
