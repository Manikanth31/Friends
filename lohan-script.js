// Lohan (Goat) Enhanced Earth Animation Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initializeLohanPage();
    addFloatingRocks();
    addAdventureInteractions();
    addTypingEffect();
    addEarthParallax();
    addShootingStars();
    addRockFormations();
    addPhotoGalleryInteractions();
});

// Initialize Lohan's page with enhanced animations
function initializeLohanPage() {
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

// Add floating rocks with enhanced physics
function addFloatingRocks() {
    const rocksContainer = document.querySelector('.floating-rocks');
    
    setInterval(() => {
        const rock = document.createElement('div');
        rock.className = 'rock';
        rock.style.left = Math.random() * 100 + '%';
        rock.style.animationDuration = (Math.random() * 4 + 6) + 's';
        rock.style.animationDelay = Math.random() * 2 + 's';
        rocksContainer.appendChild(rock);
        
        // Add rotation effect
        rock.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        setTimeout(() => {
            rock.remove();
        }, 10000);
    }, 2500);
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
            title: "Mountain Conquests",
            description: "Remember that epic hike where we climbed the highest peak? You were leading the way with such determination, and when we finally reached the summit, the view was absolutely breathtaking. Your energy never faltered, even when the path got tough.",
            details: "You showed everyone what true perseverance looks like. Every step was a testament to your unbreakable spirit.",
            location: "Mountain Peak",
            date: "Epic Journey"
        },
        2: {
            title: "Campfire Stories",
            description: "Those magical nights under the stars, sharing stories and dreams around the campfire. Your laughter echoed through the mountains, and your stories kept everyone captivated until the early hours.",
            details: "You have a way of making every moment feel like an adventure, turning simple campfire nights into unforgettable memories.",
            location: "Mountain Camp",
            date: "Night Adventures"
        },
        3: {
            title: "Victory Moments",
            description: "Every challenge you've faced, you've conquered with style and determination. Whether it's academic challenges, personal goals, or helping others, you always find a way to succeed.",
            details: "Your victories inspire everyone around you. You're proof that with determination, anything is possible.",
            location: "Life's Mountains",
            date: "Champion Spirit"
        },
        4: {
            title: "Laughter Sessions",
            description: "Your sense of humor is absolutely legendary! Those moments when you'd crack a joke and have everyone rolling on the floor laughing. Your positive energy is contagious.",
            details: "You have the amazing ability to turn any situation into a fun adventure with your wit and charm.",
            location: "Everywhere",
            date: "Joy Bringer"
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
                <h3><i class="fas fa-globe-americas"></i> ${adventure.title}</h3>
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
// // Add photo gallery interactions
// function addPhotoGalleryInteractions() {
//     const photoItems = document.querySelectorAll('.photo-item');
    
//     photoItems.forEach(item => {
//         item.addEventListener('click', function() {
//             const photoId = this.getAttribute('data-photo');
//             showPhotoModal(photoId);
//         });
        
//         // Add hover effects
//         item.addEventListener('mouseenter', function() {
//             this.style.transform = 'scale(1.05)';
//             this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
//         });
        
//         item.addEventListener('mouseleave', function() {
//             this.style.transform = 'scale(1)';
//             this.style.boxShadow = 'none';
//         });
//     });
// }

// Show photo modal
function showPhotoModal(photoId) {
    const photoTitles = {
        1: "Mountain Hiking", 2: "Camping Trip", 3: "Beach Day", 4: "City Adventure",
        5: "Forest Walk", 6: "Sunset View", 7: "River Crossing", 8: "Desert Trek",
        9: "Waterfall Visit", 10: "Lake Fishing", 11: "Rock Climbing", 12: "Valley Exploration",
        13: "Cave Adventure", 14: "Island Hopping", 15: "Volcano Hike", 16: "Glacier Walk",
        17: "Jungle Safari", 18: "Desert Camping", 19: "Mountain Biking", 20: "River Rafting",
        21: "Paragliding", 22: "Scuba Diving", 23: "Hot Air Balloon", 24: "Zip Lining",
        25: "Bungee Jumping", 26: "Skydiving", 27: "Rock Climbing", 28: "Ice Climbing",
        29: "Snowboarding", 30: "Skiing", 31: "Surfing", 32: "Kayaking", 33: "Canoeing",
        34: "Horseback Riding", 35: "Camel Trek", 36: "Elephant Safari", 37: "Whale Watching",
        38: "Dolphin Swimming", 39: "Shark Diving", 40: "Snorkeling", 41: "Deep Sea Fishing",
        42: "Lighthouse Visit", 43: "Castle Exploration", 44: "Ancient Ruins", 45: "Temple Visit",
        46: "Monument Tour", 47: "Museum Visit", 48: "Art Gallery", 49: "Concert Night", 50: "Festival Celebration"
    };
    
    const photoTitle = photoTitles[photoId] || "Adventure Photo";
    
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
                    <small>Click to add your own photo here!</small>
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
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));
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

// Add earth parallax effect
function addEarthParallax() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const earthBg = document.querySelector('.earth-bg');
        const clouds = document.querySelectorAll('.cloud');
        
        if (earthBg) {
            earthBg.style.transform = `translateY(${scrolled * 0.3}px) rotate(${scrolled * 0.1}deg)`;
        }
        
        clouds.forEach((cloud, index) => {
            const speed = 0.2 + (index * 0.1);
            cloud.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Add shooting stars effect
function addShootingStars() {
    const shootingStarsContainer = document.createElement('div');
    shootingStarsContainer.className = 'shooting-stars';
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
        shootingStar.className = 'shooting-star';
        shootingStar.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: #fff;
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: shootingStar 3s linear infinite;
        `;
        shootingStarsContainer.appendChild(shootingStar);
        
        setTimeout(() => {
            shootingStar.remove();
        }, 3000);
    }, 5000);
}

// Add rock formations animation
function addRockFormations() {
    const rockFormations = document.createElement('div');
    rockFormations.className = 'rock-formations';
    rockFormations.style.cssText = `
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100px;
        pointer-events: none;
        z-index: 1;
    `;
    document.body.appendChild(rockFormations);
    
    for (let i = 0; i < 5; i++) {
        const rock = document.createElement('div');
        rock.style.cssText = `
            position: absolute;
            bottom: 0;
            left: ${i * 20}%;
            width: 60px;
            height: 40px;
            background: linear-gradient(45deg, #8B4513, #A0522D);
            border-radius: 50% 50% 0 0;
            animation: rockFormation ${3 + i}s ease-in-out infinite;
        `;
        rockFormations.appendChild(rock);
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