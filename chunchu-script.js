// Chunchu's Universe Theme - Enhanced Outer Space JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initializeChunchuPage();
    addFloatingAsteroids();
    addAdventureInteractions();
    addTypingEffect();
    addUniverseParallax();
    addShootingStars();
    addPlanetFormations();
    addPhotoGalleryInteractions();
});

// Initialize Chunchu's page with enhanced animations
function initializeChunchuPage() {
    // Add entrance animations with staggered timing
    const elements = document.querySelectorAll('.hero-content, .adventure-card, .message-card, .wish-card, .photo-item');
    
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            element.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// Add floating asteroids with enhanced physics
function addFloatingAsteroids() {
    const asteroidsContainer = document.querySelector('.floating-asteroids');
    
    setInterval(() => {
        const asteroid = document.createElement('div');
        asteroid.className = 'asteroid';
        asteroid.style.left = Math.random() * 100 + '%';
        asteroid.style.animationDuration = (Math.random() * 4 + 8) + 's';
        asteroid.style.animationDelay = Math.random() * 2 + 's';
        asteroidsContainer.appendChild(asteroid);
        
        // Add rotation effect
        asteroid.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        setTimeout(() => {
            asteroid.remove();
        }, 12000);
    }, 3000);
}

// Add adventure card interactions with enhanced modals
function addAdventureInteractions() {
    const adventureCards = document.querySelectorAll('.adventure-card');
    
    adventureCards.forEach(card => {
        card.addEventListener('click', function() {
            const adventureId = this.getAttribute('data-adventure');
            showAdventureDetails(adventureId);
        });
        
        // Enhanced hover effects
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.05)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'none';
        });
    });
}

// Show adventure details
function showAdventureDetails(adventureId) {
    const adventures = {
        1: {
            title: "Stellar Moments",
            description: "Remember those times when Chunchu's brilliance lit up our darkest days? His positive energy is like a supernova - bright, powerful, and impossible to ignore. He has this amazing ability to turn any situation around with his cosmic wisdom and infectious laughter.",
            details: "Chunchu's optimism is truly stellar. He reminds us that even in the darkest nights, the stars still shine.",
            location: "Cosmic Realm",
            date: "Shining Bright"
        },
        2: {
            title: "Meteor Showers",
            description: "Those unexpected moments of pure magic and wonder that Chunchu brings to our lives. Like a meteor shower, his surprises are always spectacular and leave us in awe. His spontaneity and creativity make every day feel like a cosmic adventure.",
            details: "Chunchu's unexpected acts of kindness and humor are like shooting stars - rare, beautiful, and unforgettable.",
            location: "Magical Universe",
            date: "Magical Times"
        },
        3: {
            title: "Orbital Friendships",
            description: "How Chunchu connects everyone in perfect harmony, just like planets orbiting around a star. He has this incredible ability to bring people together and create bonds that are as strong as gravity. His friendship is the gravitational force that keeps our group united.",
            details: "Chunchu's social skills are out of this world. He makes everyone feel like they belong in his cosmic circle.",
            location: "Friendship Galaxy",
            date: "Perfect Balance"
        },
        4: {
            title: "Galactic Laughter",
            description: "His cosmic sense of humor that reaches across galaxies. Chunchu's jokes and funny moments are like cosmic rays - they travel through space and time, bringing joy to everyone they touch. His laughter is truly universal and infectious.",
            details: "Chunchu's humor is as vast as the universe itself. He can make anyone laugh, no matter the situation.",
            location: "Laughter Nebula",
            date: "Universal Joy"
        }
    };
    
    const adventure = adventures[adventureId];
    if (adventure) {
        showAdventureModal(adventure);
    }
}

// Show adventure modal with enhanced design
function showAdventureModal(adventure) {
    const modal = document.createElement('div');
    modal.className = 'adventure-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3><i class="fas fa-rocket"></i> ${adventure.title}</h3>
                <button class="close-btn" onclick="this.parentElement.parentElement.parentElement.remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <p class="adventure-description">${adventure.description}</p>
                <div class="adventure-details">
                    <div class="detail-item">
                        <h4><i class="fas fa-info-circle"></i> The Story</h4>
                        <p>${adventure.details}</p>
                    </div>
                    <div class="detail-item">
                        <h4><i class="fas fa-map-marker-alt"></i> Location</h4>
                        <p>${adventure.location}</p>
                    </div>
                    <div class="detail-item">
                        <h4><i class="fas fa-calendar"></i> When</h4>
                        <p>${adventure.date}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add modal styles
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        animation: fadeIn 0.4s ease;
    `;
    
    const modalContent = modal.querySelector('.modal-content');
    modalContent.style.cssText = `
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.9));
        border-radius: 20px;
        padding: 2rem;
        max-width: 600px;
        width: 90%;
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.3);
        animation: slideIn 0.4s ease;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    `;
    
    document.body.appendChild(modal);
    
    // Close modal on background click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Add photo gallery interactions
function addPhotoGalleryInteractions() {
    const photoItems = document.querySelectorAll('.photo-item');
    
    photoItems.forEach(item => {
        item.addEventListener('click', function() {
            const photoId = this.getAttribute('data-photo');
            showPhotoModal(photoId);
        });
        
        // Add hover effects
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });
}

// Show photo modal
function showPhotoModal(photoId) {
    const photoTitles = {
        1: "Stargazing Night", 2: "Space Adventure", 3: "Galaxy View", 4: "Planet Visit",
        5: "Cosmic Dance", 6: "Nebula Dreams", 7: "Black Hole Mystery", 8: "Comet Trail",
        9: "Solar Flare", 10: "Aurora Lights", 11: "Constellation Map", 12: "Space Station",
        13: "Moon Landing", 14: "Mars Rover", 15: "Jupiter Storm", 16: "Saturn Rings",
        17: "Uranus Orbit", 18: "Neptune Waves", 19: "Pluto Heart", 20: "Andromeda Galaxy",
        21: "Milky Way", 22: "Supernova", 23: "Pulsar", 24: "Quasar", 25: "Dark Matter",
        26: "Wormhole", 27: "Time Dilation", 28: "Space-Time", 29: "Gravity Well", 30: "Cosmic Ray",
        31: "Solar Wind", 32: "Magnetic Field", 33: "Plasma Storm", 34: "Ion Trail", 35: "Quantum Leap",
        36: "String Theory", 37: "Multiverse", 38: "Parallel World", 39: "Dimension Shift", 40: "Reality Warp",
        41: "Space Portal", 42: "Time Machine", 43: "Teleportation", 44: "Hologram", 45: "Energy Field",
        46: "Force Shield", 47: "Laser Beam", 48: "Photon Burst", 49: "Neutron Star", 50: "Cosmic Harmony"
    };
    
    const photoTitle = photoTitles[photoId] || "Cosmic Photo";
    
    const modal = document.createElement('div');
    modal.className = 'photo-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3><i class="fas fa-camera"></i> ${photoTitle}</h3>
                <button class="close-btn" onclick="this.parentElement.parentElement.parentElement.remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="photo-placeholder-large">
                    <i class="fas fa-camera"></i>
                    <p>Photo: ${photoTitle}</p>
                    <small>Click to add your own cosmic photo here!</small>
                </div>
            </div>
        </div>
    `;
    
    // Add modal styles
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        animation: fadeIn 0.3s ease;
    `;
    
    const modalContent = modal.querySelector('.modal-content');
    modalContent.style.cssText = `
        background: rgba(255, 255, 255, 0.95);
        border-radius: 20px;
        padding: 2rem;
        max-width: 600px;
        width: 90%;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.3);
        animation: slideIn 0.3s ease;
    `;
    
    const photoPlaceholder = modal.querySelector('.photo-placeholder-large');
    photoPlaceholder.style.cssText = `
        width: 100%;
        height: 300px;
        background: linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2));
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #666;
        font-size: 3rem;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.3);
        border-radius: 15px;
    `;
    
    document.body.appendChild(modal);
    
    // Close modal on background click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Add typing effect to hero text
function addTypingEffect() {
    const heroText = document.querySelector('.hero-text');
    const originalText = heroText.textContent;
    heroText.textContent = '';
    
    let i = 0;
    function typeWriter() {
        if (i < originalText.length) {
            heroText.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    
    setTimeout(typeWriter, 1500);
}

// Add universe parallax effect
function addUniverseParallax() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const universeBg = document.querySelector('.universe-bg');
        const stars = document.querySelectorAll('.stars, .twinkling');
        
        if (universeBg) {
            universeBg.style.transform = `translateY(${scrolled * 0.3}px) rotate(${scrolled * 0.05}deg)`;
        }
        
        stars.forEach((star, index) => {
            const speed = 0.2 + (index * 0.1);
            star.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Add shooting stars effect
function addShootingStars() {
    const shootingStarsContainer = document.createElement('div');
    shootingStarsContainer.className = 'shooting-stars-enhanced';
    shootingStarsContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
    `;
    document.body.appendChild(shootingStarsContainer);
    
    setInterval(() => {
        const shootingStar = document.createElement('div');
        shootingStar.className = 'shooting-star-enhanced';
        shootingStar.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: #fff;
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: shootingStarEnhanced 3s linear infinite;
        `;
        shootingStarsContainer.appendChild(shootingStar);
        
        setTimeout(() => {
            shootingStar.remove();
        }, 3000);
    }, 5000);
}

// Add planet formations animation
function addPlanetFormations() {
    const planetFormations = document.createElement('div');
    planetFormations.className = 'planet-formations';
    planetFormations.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
    `;
    document.body.appendChild(planetFormations);
    
    for (let i = 0; i < 3; i++) {
        const planet = document.createElement('div');
        planet.style.cssText = `
            position: absolute;
            top: ${20 + i * 30}%;
            right: ${10 + i * 20}%;
            width: ${30 + i * 10}px;
            height: ${30 + i * 10}px;
            background: linear-gradient(45deg, ${i === 0 ? '#ff6b6b' : i === 1 ? '#4ecdc4' : '#a55eea'}, ${i === 0 ? '#ff8e8e' : i === 1 ? '#44a08d' : '#26de81'});
            border-radius: 50%;
            animation: planetFormation ${4 + i}s ease-in-out infinite;
        `;
        planetFormations.appendChild(planet);
    }
}

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

// Add CSS animations
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
    
    @keyframes shootingStarEnhanced {
        0% { transform: translateX(0) translateY(0); opacity: 1; }
        100% { transform: translateX(200px) translateY(200px); opacity: 0; }
    }
    
    @keyframes planetFormation {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-15px) rotate(180deg); }
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