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


// Toggle photos visibility
function togglePhotos() {
    const hiddenPhotos = document.querySelectorAll('.hidden-photo');
    const seeMoreBtn = document.querySelector('.see-more-btn');
    const btnText = seeMoreBtn.querySelector('span');
    const btnIcon = seeMoreBtn.querySelector('i');
    
    if (hiddenPhotos[0].classList.contains('show')) {
        // Hide photos
        hiddenPhotos.forEach(photo => {
            photo.classList.remove('show');
        });
        btnText.textContent = 'See More Photos';
        btnIcon.className = 'fas fa-images';
    } else {
        // Show photos
        hiddenPhotos.forEach((photo, index) => {
            setTimeout(() => {
                photo.classList.add('show');
            }, index * 50); // Stagger the animation
        });
        btnText.textContent = 'Show Less';
        btnIcon.className = 'fas fa-chevron-up';
    }
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

const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes slideIn {
        from { transform: translateY(-50px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
    
    @keyframes shootingStar {
        0% { transform: translateX(0) translateY(0); opacity: 1; }
        100% { transform: translateX(200px) translateY(200px); opacity: 0; }
    }
    
    @keyframes rockFormation {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-10px) rotate(5deg); }
    }
    
    .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
        padding-bottom: 1rem;
        border-bottom: 2px solid rgba(0, 0, 0, 0.1);
    }
    
    .modal-header h3 {
        color: #2c3e50;
        font-size: 1.5rem;
        margin: 0;
    }
    
    .close-btn {
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: #666;
        padding: 0.5rem;
        border-radius: 50%;
        transition: all 0.3s ease;
    }
    
    .close-btn:hover {
        background: rgba(0, 0, 0, 0.1);
        color: #333;
    }
    
    .adventure-description {
        font-size: 1.1rem;
        line-height: 1.8;
        margin-bottom: 2rem;
        color: #2c3e50;
    }
    
    .adventure-details {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1.5rem;
    }
    
    .detail-item h4 {
        color: #34495e;
        margin-bottom: 0.5rem;
        font-size: 1rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .detail-item p {
        color: #666;
        line-height: 1.6;
        margin: 0;
    }
    
    .photo-placeholder-large p {
        margin: 1rem 0 0.5rem;
        font-size: 1.2rem;
        color: #333;
    }
    
    .photo-placeholder-large small {
        color: #999;
        font-size: 0.9rem;
    }
    
    @media (max-width: 768px) {
        .adventure-details {
            grid-template-columns: 1fr;
        }
        
        .modal-content {
            padding: 1.5rem;
        }
    }
`;
document.head.appendChild(style); 