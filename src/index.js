console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

document.addEventListener("DOMContentLoaded", () => {
    // Fetch and Display Dog Images
    
    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            const images = data.message; // Array of image URLs
            const imageContainer = document.getElementById("dog-image-container");

            images.forEach(imageUrl => {
                const img = document.createElement("img");
                img.src = imageUrl;
                img.alt = "Cute dog";
                imageContainer.appendChild(img);
            });
        })
        .catch(error => {
            console.error("Error fetching dog images:", error);
        });

    //  Fetch and Display Dog Breeds

    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            const breeds = Object.keys(data.message); // Array of breed names
            const breedList = document.getElementById("dog-breeds");

            breeds.forEach(breedName => {
                const li = document.createElement("li");
                li.textContent = breedName;
                breedList.appendChild(li);
            });
        })
        .catch(error => {
            console.error("Error fetching dog breeds:", error);
        });

    // Change Font Color on Click

    const breedList = document.getElementById("dog-breeds");

    breedList.addEventListener("click", event => {
        if (event.target.tagName === "LI") {
            event.target.style.color = "blue"; // Change color to your preference
        }
    });

    // Filter Breeds by Letter

    const breedDropdown = document.getElementById("breed-dropdown");

    breedDropdown.addEventListener("change", event => {
        const selectedLetter = event.target.value.toLowerCase();
        const breedItems = breedList.getElementsByTagName("li");

        for (let i = 0; i < breedItems.length; i++) {
            const breedName = breedItems[i].textContent.toLowerCase();
            if (breedName.startsWith(selectedLetter)) {
                breedItems[i].style.display = "list-item";
            } else {
                breedItems[i].style.display = "none";
            }
        }
    });
});