document.getElementById('urlForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var url = document.getElementById('urlInput').value;
    var archiveUrl = 'https://web.archive.org/save/' + url;
    document.getElementById('result').innerHTML = 'Fetching archive...';

    fetch(archiveUrl)
        .then(response => {
            if (response.ok) {
                return response.text();
            }
            throw new Error('Network response was not ok.');
        })
        .then(data => {
            document.getElementById('result').innerHTML = '<a href="' + data + '" target="_blank">View Archived Page</a>';
        })
        .catch(error => {
            document.getElementById('result').innerHTML = 'Error: ' + error.message;
        });
});
