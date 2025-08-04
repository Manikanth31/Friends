// Basic JavaScript for friend pages
document.addEventListener('DOMContentLoaded', function() {
    // Add entrance animations
    const elements = document.querySelectorAll('.hero-section, .memories-section, .message-section, .wishes-section');
    elements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.2}s`;
    });

    // Add memory card interactions
    const memoryCards = document.querySelectorAll('.memory-card');
    memoryCards.forEach(card => {
        card.addEventListener('click', function() {
            showMemoryModal(this);
        });
    });
});

// Go back function
function goBack() {
    window.location.href = 'index.html';
}

// Show memory modal
function showMemoryModal(card) {
    const title = card.querySelector('h4').textContent;
    const description = card.querySelector('p').textContent;
    
    const modal = document.createElement('div');
    modal.className = 'memory-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    `;
    
    modal.innerHTML = `
        <div style="
            background: white;
            padding: 2rem;
            border-radius: 15px;
            max-width: 500px;
            position: relative;
        ">
            <span style="
                position: absolute;
                top: 10px;
                right: 15px;
                font-size: 2rem;
                cursor: pointer;
            ">&times;</span>
            <h3 style="margin-bottom: 1rem;">${title}</h3>
            <p style="line-height: 1.6;">${description}</p>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close modal functionality
    modal.querySelector('span').addEventListener('click', () => {
        modal.remove();
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
} 