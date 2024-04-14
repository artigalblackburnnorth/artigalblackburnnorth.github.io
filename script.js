document.addEventListener("DOMContentLoaded", function() {
    // Fetch data from JSON file
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            console.log("Data fetched successfully:", data);
            // Display thumbnails on the main page
            const gallery = document.getElementById('gallery');
            if (!data || data.length === 0) {
                console.error('No data found or empty data array');
                return;
            }
            data.forEach(painting => {
                const thumbnail = document.createElement('div');
                thumbnail.classList.add('thumbnail');
                thumbnail.innerHTML = `
                    <img src="img/${painting.directory}/image1.jpeg" alt="${painting.name}">
                    <p>${painting.name}</p>
                    <p>Price: ${painting.price}</p>
                `;
                thumbnail.addEventListener('click', function() {
                    // When a thumbnail is clicked, navigate to its details page
                    window.location.href = `paintings.html?painting=${encodeURIComponent(painting.directory)}`;
                });
                gallery.appendChild(thumbnail);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
77