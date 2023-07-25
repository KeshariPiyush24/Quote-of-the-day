async function fetchNewImage() {
    try {
        const photoCount = 10;

        // Make a request to the Pexels API endpoint
        const API_KEY = "K1Q7dPTkynpvpPwxxyl2gb329OQA4660be9q8SR1XECyZLZGFWrHsh7U";
        const response = await fetch(`https://api.pexels.com/v1/search?query=nature&per_page=${photoCount}`, {
            headers: {
                "Authorization": `${API_KEY}`, // Include "Bearer" and a space before the API key
                "Content-Type": "application/json"
            }
        });

        // Check the response status code
        if (response.ok) {
            // Get the JSON object from the response
            const data = await response.json();

            // Get any random image URL
            const randomIndex = Math.floor(Math.random() * photoCount);
            const imageURL = data["photos"][randomIndex]["src"]["original"];
            const photographer = data["photos"][randomIndex]["photographer"];

            // Set the background image of the body
            const bodyElement = document.querySelector("body");
            bodyElement.style.backgroundImage = `url(${imageURL})`;
        } else {
            console.error("Error fetching image:", response.status, response.statusText);
        }
    } catch (error) {
        console.error("Error:", error.message);
    }
}


fetchNewImage();