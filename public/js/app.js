document.getElementById('fetchDog').addEventListener('click', fetchRandomDog);

function fetchRandomDog() {
    const dogContainer = document.getElementById('dogContainer');
    dogContainer.innerHTML = '<p>Loading...</p>';
    
    // Using The Dog API
    fetch('https://api.thedogapi.com/v1/images/search')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data && data[0] && data[0].url) {
                const greetings = [
                    "Awesome dog!",
                    "What a cute pup!",
                    "Best dog ever!",
                    "Look at this good boy!",
                    "Perfect companion!"
                ];
                const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
                
                dogContainer.innerHTML = `
                    <h2>${randomGreeting}</h2>
                    <img src="${data[0].url}" alt="Random dog">
                `;
            } else {
                throw new Error('No dog image found');
            }
        })
        .catch(error => {
            console.error('Error fetching dog:', error);
            dogContainer.innerHTML = `<p>Error: ${error.message}</p>`;
        });
}