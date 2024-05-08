document.addEventListener('DOMContentLoaded', function() {
    // Activate Session
    document.getElementById('activateButton').addEventListener('click', function() {
        var activationCode = document.getElementById('activationCode').value;
        // Here you can add logic to check the activation code and decide whether to show the URL Fetching Form or not
        if (activationCode === '123') {
            document.getElementById('registerForm').style.display = 'none';
            document.getElementById('urlFormContainer').style.display = 'block';
        } else {
            alert('Invalid activation code. Please try again.');
        }
    });

    // URL Fetching Form
    document.getElementById('urlForm').addEventListener('submit', function(event) {
        event.preventDefault();
        var url = document.getElementById('urlInput').value;
        var archiveUrl = 'https://web.archive.org/web/' + url;

        document.getElementById('result').innerHTML = 'Getting Unblocked Version...';

        // Simulating fetching data from an archive URL
        setTimeout(function() {
            document.getElementById('result').innerHTML = '<a href="' + archiveUrl + '" target="_blank">View Archived Page</a>';
        }, 2000); // Simulating a delay for demonstration purposes (2 seconds)
    });
});
