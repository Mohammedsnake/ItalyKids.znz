// Example of adding an interactive message on load
document.addEventListener('DOMContentLoaded', () => {
    alert('Welcome to the official webpage of Italy Kids!');
  });
  function filterPlayers() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const playerCards = document.querySelectorAll('.player-card');
  
    playerCards.forEach(card => {
      const position = card.getAttribute('data-position').toLowerCase();
      if (position.includes(searchInput)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }
  document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    
    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        lightbox.style.position = 'fixed';
        lightbox.style.top = '0';
        lightbox.style.left = '0';
        lightbox.style.width = '100%';
        lightbox.style.height = '100%';
        lightbox.style.background = 'rgba(0, 0, 0, 0.8)';
        lightbox.style.display = 'flex';
        lightbox.style.alignItems = 'center';
        lightbox.style.justifyContent = 'center';
        lightbox.style.zIndex = '1000';
        document.body.appendChild(lightbox);
  
        const img = document.createElement('img');
        img.src = item.src;
        img.style.maxWidth = '80%';
        img.style.maxHeight = '80%';
        lightbox.appendChild(img);
  
        lightbox.addEventListener('click', () => {
          lightbox.remove();
        });
      });
    });
  });
  function sortTable(columnIndex) {
    const table = document.getElementById('match-table');
    const rows = Array.from(table.rows).slice(1); // Skip the header row
    const isAscending = table.getAttribute('data-sort') === 'asc';
    
    rows.sort((a, b) => {
      const cellA = a.cells[columnIndex].innerText.toLowerCase();
      const cellB = b.cells[columnIndex].innerText.toLowerCase();
      return isAscending 
        ? cellA.localeCompare(cellB)
        : cellB.localeCompare(cellA);
    });
    
    table.tBodies[0].append(...rows);
    table.setAttribute('data-sort', isAscending ? 'desc' : 'asc');
  }
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (!name || !email || !message) {
      alert('Please fill out all fields before submitting.');
      return;
    }
  
    // Simulate successful submission
    alert(`Thank you, ${name}! Your message has been sent.`);
    this.reset(); // Reset the form
  });
  