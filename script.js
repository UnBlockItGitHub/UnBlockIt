document.addEventListener("DOMContentLoaded", function() {
    // Account Registration Form
    document.getElementById("registerForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Collect form data
        var formData = new FormData(this);

        // Send form data to register.php using AJAX
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "register.php", true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                // Display success message or handle response
                alert(xhr.responseText);
            }
        };
        xhr.send(formData);
    });

    // URL Fetching Form
    document.getElementById('urlForm').addEventListener('submit', function(event) {
        event.preventDefault();
        var url = document.getElementById('urlInput').value;
        var archiveUrl = 'https://web.archive.org/web/' + url;

        document.getElementById('result').innerHTML = 'Getting Unblocked Version Unblocking...';

        document.getElementById('result').innerHTML = '<a href="' + archiveUrl + '" target="_blank">View Archived Page</a>';
    });
});
