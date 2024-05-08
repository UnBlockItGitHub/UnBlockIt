document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded. Script running...');

    var activateButton = document.getElementById('activateButton');
    var registerForm = document.getElementById('registerForm');
    var urlFormContainer = document.getElementById('urlFormContainer');

    if (!activateButton || !registerForm || !urlFormContainer) {
        console.error('One or more required elements not found.');
        return; // Exit function if required elements are missing
    }

    console.log('All required elements found. Attaching event listeners...');

    // Activate Session
    activateButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        var activationCode = document.getElementById('activationCode').value;
        // Here you can add logic to check the activation code and decide whether to show the URL Fetching Form or not
        if (activationCode === 'your_activation_code') {
            registerForm.style.display = 'none';
            urlFormContainer.style.display = 'block';
            console.log('Session activated successfully.');
        } else {
            alert('Invalid activation code. Please try again.');
            console.warn('Invalid activation code entered.');
        }
    });

    // URL Fetching Form
    var urlForm = document.getElementById('urlForm');
    if (urlForm) {
        urlForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission behavior

            var urlInput = document.getElementById('urlInput');
            var resultContainer = document.getElementById('result');

            if (!urlInput || !resultContainer) {
                console.error('URL input or result container not found.');
                return; // Exit function if required elements are missing
            }

            var url = urlInput.value;
            var archiveUrl = 'https://web.archive.org/web/' + url;

            resultContainer.innerHTML = 'Getting Unblocked Version...';

            // Simulating fetching data from an archive URL
            setTimeout(function() {
                resultContainer.innerHTML = '<a href="' + archiveUrl + '" target="_blank">View Archived Page</a>';
                console.log('Fetched unblocked version successfully.');
            }, 2000); // Simulating a delay for demonstration purposes (2 seconds)
        });
    } else {
        console.error('URL Fetching Form not found.');
    }

    console.log('Event listeners attached successfully.');
});
