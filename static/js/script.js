document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var fileInput1 = document.getElementById('imageUpload1');
    var fileInput2 = document.getElementById('imageUpload2');

    // Check if both file inputs have a selected file
    if (!fileInput1.files[0] || !fileInput2.files[0]) {
        alert('Please select two image files.');
        return;
    }

    var formData = new FormData();
    formData.append('image1', fileInput1.files[0]);
    formData.append('image2', fileInput2.files[0]);

    fetch('/match', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        var resultContainer = document.getElementById('resultContainer');
        resultContainer.style.display = 'block';
        var resultText = document.getElementById('resultText');
        resultText.textContent = data.match ? 'Faces Match!' : 'Faces Do Not Match!';
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
