document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.gallery img');
    const metadataDiv = document.getElementById('metadata');

    images.forEach(img => {
        img.addEventListener('click', function () {
            const metadata = img.getAttribute('data-metadata');
            metadataDiv.innerHTML = `<p>${metadata}</p>`;
        });
    });
});
