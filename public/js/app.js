document.getElementById('fetchDog').addEventListener('click', fetchRandomDog);

function fetchRandomDog() {
    const dogContainer = document.getElementById('dogContainer');
    dogContainer.innerHTML = '<p>Loading...</p>';
    
    // Using our backend route
    fetch('/dogs/random')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data && data.url) {
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
                    <img src="${data.url}" alt="Random dog">
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