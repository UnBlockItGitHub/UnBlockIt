document.getElementById('urlForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var url = document.getElementById('urlInput').value;
    var archiveUrl = 'https://web.archive.org/web/' + url;

    document.getElementById('result').innerHTML = 'Getting Unblocked Version Unblocking...';

    document.getElementById('result').innerHTML = '<a href="' + archiveUrl + '" target="_blank">View Archived Page</a>';
});
