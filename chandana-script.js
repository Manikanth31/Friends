// Chandana's Cosmic Journey - Moon Rotating Earth Theme JavaScript
document.addEventListener('DOMContentLoaded', function() {
    initializeChandanaPage();
    addFloatingAsteroids();
    addMemoryInteractions();
    addTypingEffect();
    addCosmicEffects();
    addOrbitalAnimations();
    addPhotoGalleryInteractions();
});

// Initialize Chandana's page with entrance animations
function initializeChandanaPage() {
    const elements = document.querySelectorAll('.chandana-header, .hero-section, .memories-section, .gallery-section, .message-section, .wishes-section');
    
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.8s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// Add floating asteroids animation
function addFloatingAsteroids() {
    const asteroidsContainer = document.querySelector('.floating-asteroids');
    
    for (let i = 0; i < 8; i++) {
        const asteroid = document.createElement('div');
        asteroid.style.cssText = `
            position: absolute;
            width: ${Math.random() * 6 + 2}px;
            height: ${Math.random() * 6 + 2}px;
            background: #ccc;
            border-radius: 50%;
            animation: asteroidFloat ${Math.random() * 10 + 10}s linear infinite;
            animation-delay: ${Math.random() * 5}s;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
        `;
        asteroidsContainer.appendChild(asteroid);
    }
}

// Add memory card interactions
function addMemoryInteractions() {
    const memoryCards = document.querySelectorAll('.memory-card');
    
    memoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const memoryId = this.getAttribute('data-memory');
            showMemoryDetails(memoryId);
        });
        
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.05)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Show memory details modal
function showMemoryDetails(memoryId) {
    const memories = {
        1: {
            title: 'Space Adventures',
            description: 'Exploring the vast universe together, discovering new galaxies and cosmic wonders.',
            details: 'From stargazing nights to space documentaries, every moment with you feels like a journey through the cosmos.'
        },
        2: {
            title: 'Satellite Dreams',
            description: 'Reaching for the stars and beyond, dreaming of interstellar travel.',
            details: 'Your dreams are as vast as the universe itself, and your determination to reach them is truly inspiring.'
        },
        3: {
            title: 'Meteor Showers',
            description: 'Witnessing cosmic wonders together under the starlit sky.',
            details: 'Those magical nights watching shooting stars and making wishes that felt like they could reach the moon.'
        },
        4: {
            title: 'Galactic Bonds',
            description: 'Friendship that spans the universe and transcends time and space.',
            details: 'Our friendship is like the gravitational pull between celestial bodies - constant, reliable, and beautiful.'
        }
    };
    
    const memory = memories[memoryId];
    if (!memory) return;
    
    const modal = document.createElement('div');
    modal.className = 'memory-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>${memory.title}</h3>
                <button class="close-btn" onclick="this.parentElement.parentElement.parentElement.remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <p class="memory-description">${memory.description}</p>
                <p class="memory-details">${memory.details}</p>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add modal styles
    const style = document.createElement('style');
    style.textContent = `
        .memory-modal {
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
            animation: modalFadeIn 0.3s ease;
        }
        .modal-content {
            background: linear-gradient(135deg, rgba(15, 52, 96, 0.9), rgba(83, 52, 131, 0.9));
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 15px;
            padding: 2rem;
            max-width: 500px;
            width: 90%;
            backdrop-filter: blur(10px);
            animation: modalSlideIn 0.3s ease;
        }
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            padding-bottom: 1rem;
        }
        .modal-header h3 {
            color: #f0f0f0;
            margin: 0;
            font-family: 'Orbitron', monospace;
        }
        .close-btn {
            background: none;
            border: none;
            color: #ccc;
            font-size: 1.2rem;
            cursor: pointer;
            padding: 0.5rem;
            border-radius: 50%;
            transition: all 0.3s ease;
        }
        .close-btn:hover {
            background: rgba(255, 255, 255, 0.1);
            color: #f0f0f0;
        }
        .memory-description {
            color: #4a90e2;
            font-weight: 600;
            margin-bottom: 1rem;
        }
        .memory-details {
            color: #ccc;
            line-height: 1.6;
        }
        @keyframes modalFadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes modalSlideIn {
            from { transform: scale(0.8) translateY(-20px); opacity: 0; }
            to { transform: scale(1) translateY(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
}

// Add typing effect to hero text
function addTypingEffect() {
    const heroText = document.querySelector('.hero-text');
    if (!heroText) return;
    
    const text = heroText.textContent;
    heroText.textContent = '';
    heroText.style.borderRight = '2px solid #4a90e2';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            heroText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        } else {
            heroText.style.borderRight = 'none';
        }
    };
    
    setTimeout(typeWriter, 1000);
}

// Add cosmic effects
function addCosmicEffects() {
    // Add parallax effect to stars
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const stars = document.querySelector('.stars');
        const twinkling = document.querySelector('.twinkling');
        
        if (stars) stars.style.transform = `translateY(${scrolled * 0.5}px)`;
        if (twinkling) twinkling.style.transform = `translateY(${scrolled * 0.3}px)`;
    });
    
    // Add shooting stars periodically
    setInterval(() => {
        createShootingStar();
    }, 8000);
}

// Create shooting star effect
function createShootingStar() {
    const shootingStar = document.createElement('div');
    shootingStar.style.cssText = `
        position: fixed;
        width: 2px;
        height: 2px;
        background: white;
        border-radius: 50%;
        box-shadow: 0 0 4px white, 0 0 8px white, 0 0 12px white;
        top: ${Math.random() * 50}%;
        left: ${Math.random() * 100}%;
        z-index: 10;
        pointer-events: none;
        animation: shootingStarMove 2s linear forwards;
    `;
    
    document.body.appendChild(shootingStar);
    
    setTimeout(() => {
        shootingStar.remove();
    }, 2000);
}

// Add orbital animations
function addOrbitalAnimations() {
    // Add additional orbital elements
    const earthOrbit = document.querySelector('.earth-orbit');
    if (earthOrbit) {
        // Add orbital rings
        for (let i = 1; i <= 3; i++) {
            const ring = document.createElement('div');
            ring.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: ${300 + i * 50}px;
                height: ${300 + i * 50}px;
                border: 1px solid rgba(74, 144, 226, 0.1);
                border-radius: 50%;
                animation: ringRotate ${15 + i * 5}s linear infinite;
            `;
            earthOrbit.appendChild(ring);
        }
    }
}

// Add photo gallery interactions
function addPhotoGalleryInteractions() {
    const photoItems = document.querySelectorAll('.photo-item');
    
    photoItems.forEach(item => {
        item.addEventListener('click', function() {
            const photoId = this.getAttribute('data-photo');
            showPhotoModal(photoId);
        });
        
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(2deg)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
}

// Show photo modal
function showPhotoModal(photoId) {
    const cosmicPhotos = {
        1: { title: 'Cosmic Memory 1', description: 'A beautiful moment captured in the vastness of space' },
        2: { title: 'Stellar Moment 2', description: 'Shining bright like the stars in the night sky' },
        3: { title: 'Orbital Memory 3', description: 'Circling around each other like planets in orbit' },
        4: { title: 'Satellite Day 4', description: 'Reaching new heights and exploring the unknown' },
        5: { title: 'Meteor Night 5', description: 'Witnessing the magic of shooting stars together' },
        6: { title: 'Galactic Memory 6', description: 'A friendship that spans across galaxies' },
        7: { title: 'Rocket Launch 7', description: 'Taking off towards our dreams and aspirations' },
        8: { title: 'Space Walk 8', description: 'Walking through life together in zero gravity' },
        9: { title: 'Solar System 9', description: 'Exploring the wonders of our cosmic neighborhood' },
        10: { title: 'Comet Trail 10', description: 'Leaving beautiful trails in each other\'s lives' }
    };
    
    const photo = cosmicPhotos[photoId] || { title: `Cosmic Memory ${photoId}`, description: 'A beautiful cosmic moment captured in time' };
    
    const modal = document.createElement('div');
    modal.className = 'photo-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>${photo.title}</h3>
                <button class="close-btn" onclick="this.parentElement.parentElement.parentElement.remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="photo-display">
                    <i class="fas fa-moon" style="font-size: 4rem; color: #4a90e2; margin-bottom: 1rem;"></i>
                    <p>${photo.description}</p>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add modal styles if not already present
    if (!document.querySelector('#photo-modal-styles')) {
        const style = document.createElement('style');
        style.id = 'photo-modal-styles';
        style.textContent = `
            .photo-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.9);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 1000;
                animation: modalFadeIn 0.3s ease;
            }
            .photo-modal .modal-content {
                background: linear-gradient(135deg, rgba(15, 52, 96, 0.95), rgba(83, 52, 131, 0.95));
                border: 1px solid rgba(255, 255, 255, 0.2);
                border-radius: 15px;
                padding: 2rem;
                max-width: 600px;
                width: 90%;
                backdrop-filter: blur(10px);
                animation: modalSlideIn 0.3s ease;
            }
            .photo-display {
                text-align: center;
                color: #ccc;
            }
            .photo-display p {
                font-size: 1.1rem;
                line-height: 1.6;
                margin-top: 1rem;
            }
        `;
        document.head.appendChild(style);
    }
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

// Go back to main page
function goBack() {
    window.location.href = 'index.html';
}

// Add shooting star animation styles
const shootingStarStyle = document.createElement('style');
shootingStarStyle.textContent = `
    @keyframes shootingStarMove {
        0% {
            transform: translateX(0) translateY(0) rotate(45deg);
            opacity: 1;
        }
        100% {
            transform: translateX(300px) translateY(300px) rotate(45deg);
            opacity: 0;
        }
    }
    @keyframes ringRotate {
        0% { transform: translate(-50%, -50%) rotate(0deg); }
        100% { transform: translate(-50%, -50%) rotate(360deg); }
    }
`;
document.head.appendChild(shootingStarStyle); 