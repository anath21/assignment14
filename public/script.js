window.onload = function() {
    fetch('/api/crafts')
    .then(response => response.json())
    .then(data => {
        const galleryContainer = document.getElementById('galleryContainer');
        data.forEach(craft => {
            const craftCard = document.createElement('div');
            craftCard.classList.add('craft-card'); 
            const craftImage = document.createElement('img');
            craftImage.src = `/images/${craft.image}`;
            craftImage.classList.add('craft-image'); 
            craftImage.onclick = () => displayCraftDetails(craft);
            craftCard.appendChild(craftImage);
            galleryContainer.appendChild(craftCard);
        });
    })
    .catch(error => console.error('Error fetching crafts:', error));

    const modal = document.getElementById("myModal");
    const closeModal = document.getElementsByClassName("close")[0];

    closeModal.onclick = function() {
        modal.style.display = "none";
    };

    const displayCraftDetails = (craft) => {
        const modalContent = document.getElementById('modalContent');
        modalContent.innerHTML = `
            <h2>${craft.name}</h2>
            <img src="/images/${craft.image}" alt="${craft.name}" class="modal-image">
            <p>${craft.description}</p>
            <h3>Supplies:</h3>
            <ul>
            ${craft.supplies.map(supply => `<li>${supply}</li>`).join('')}
            </ul>
        `;
        modal.style.display = "block";
    }
}
