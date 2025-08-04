// Manoj (Panda) Enhanced Creative Animation Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initializeManojPage();
    addFloatingBrushes();
    addCreativeInteractions();
    addTypingEffect();
    addBambooParallax();
    addPaintSplashes();
    addCanvasAnimations();
    addPhotoGalleryInteractions();
});

// Initialize Manoj's creative page
function initializeManojPage() {
    // Add entrance animations with creative timing
    const elements = document.querySelectorAll('.hero-content, .creative-card, .message-card, .wish-card, .photo-item');
    
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'scale(0.8) rotate(10deg)';
        
        setTimeout(() => {
            element.style.transition = 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            element.style.opacity = '1';
            element.style.transform = 'scale(1) rotate(0deg)';
        }, index * 200);
    });
}

// Add floating brushes with enhanced physics
function addFloatingBrushes() {
    const brushesContainer = document.querySelector('.floating-brushes');
    
    setInterval(() => {
        const brush = document.createElement('div');
        brush.className = 'brush';
        brush.style.left = Math.random() * 100 + '%';
        brush.style.animationDuration = (Math.random() * 4 + 8) + 's';
        brush.style.animationDelay = Math.random() * 2 + 's';
        brushesContainer.appendChild(brush);
        
        // Add rotation effect
        brush.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        setTimeout(() => {
            brush.remove();
        }, 12000);
    }, 3000);
}

// Add creative card interactions with enhanced modals
function addCreativeInteractions() {
    const creativeCards = document.querySelectorAll('.creative-card');
    
    creativeCards.forEach(card => {
        card.addEventListener('click', function() {
            const creativeId = this.getAttribute('data-creative');
            showCreativeDetails(creativeId);
        });
        
        // Enhanced hover effects
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.05) rotate(2deg)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1) rotate(0deg)';
            this.style.boxShadow = 'none';
        });
    });
}

// Show creative details
function showCreativeDetails(creativeId) {
    const creatives = {
        1: {
            title: "Digital Art",
            description: "Your digital art skills are absolutely mind-blowing! You have this incredible ability to bring imagination to life through pixels and code. Every piece you create tells a story and evokes emotions.",
            details: "Your attention to detail and creative vision make every digital artwork a masterpiece. You understand color theory, composition, and digital tools like a true artist.",
            medium: "Digital Canvas",
            style: "Contemporary Digital"
        },
        2: {
            title: "Music Creation",
            description: "When you create music, it's like magic flowing from your fingertips. You have this natural rhythm and melody that captures the essence of emotions and stories.",
            details: "Your musical compositions are not just sounds - they're experiences that transport listeners to different worlds and emotions.",
            medium: "Digital Audio",
            style: "Contemporary Fusion"
        },
        3: {
            title: "Innovation",
            description: "You approach every challenge with a creative mindset that turns problems into opportunities. Your innovative thinking has solved countless issues in unique and elegant ways.",
            details: "Your ability to think outside the box and find creative solutions makes you an invaluable problem solver and innovator.",
            medium: "Creative Problem Solving",
            style: "Innovative Design"
        },
        4: {
            title: "Storytelling",
            description: "You don't just create art; you tell stories. Whether through visual art, music, or words, you have this gift for narrative that captivates and inspires.",
            details: "Your storytelling ability connects people, evokes emotions, and creates lasting impressions that stay with everyone who experiences your work.",
            medium: "Multi-Media",
            style: "Narrative Art"
        }
    };
    
    const creative = creatives[creativeId];
    if (creative) {
        showCreativeModal(creative);
    }
}

// Show creative modal with enhanced design
function showCreativeModal(creative) {
    const modal = document.createElement('div');
    modal.className = 'creative-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3><i class="fas fa-palette"></i> ${creative.title}</h3>
                <button class="close-btn" onclick="this.parentElement.parentElement.parentElement.remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <p class="creative-description">${creative.description}</p>
                <div class="creative-details">
                    <div class="detail-item">
                        <h4><i class="fas fa-info-circle"></i> The Process</h4>
                        <p>${creative.details}</p>
                    </div>
                    <div class="detail-item">
                        <h4><i class="fas fa-paint-brush"></i> Medium</h4>
                        <p>${creative.medium}</p>
                    </div>
                    <div class="detail-item">
                        <h4><i class="fas fa-star"></i> Style</h4>
                        <p>${creative.style}</p>
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
        1: "Art Studio", 2: "Music Session", 3: "Creative Workshop", 4: "Design Project",
        5: "Art Exhibition", 6: "Studio Time", 7: "Creative Process", 8: "Art Gallery",
        9: "Music Studio", 10: "Design Meeting", 11: "Creative Brainstorm", 12: "Art Installation",
        13: "Digital Design", 14: "Creative Collaboration", 15: "Art Workshop", 16: "Music Performance",
        17: "Creative Presentation", 18: "Design Review", 19: "Art Creation", 20: "Creative Session",
        21: "Studio Setup", 22: "Art Materials", 23: "Creative Tools", 24: "Design Tools",
        25: "Music Equipment", 26: "Art Supplies", 27: "Creative Space", 28: "Studio Environment",
        29: "Art Corner", 30: "Creative Corner", 31: "Design Corner", 32: "Music Corner",
        33: "Art Display", 34: "Creative Display", 35: "Design Display", 36: "Music Display",
        37: "Art Collection", 38: "Creative Collection", 39: "Design Collection", 40: "Music Collection",
        41: "Art Portfolio", 42: "Creative Portfolio", 43: "Design Portfolio", 44: "Music Portfolio",
        45: "Art Showcase", 46: "Creative Showcase", 47: "Design Showcase", 48: "Music Showcase",
        49: "Art Exhibition", 50: "Creative Exhibition"
    };
    
    const photoTitle = photoTitles[photoId] || "Creative Photo";
    
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

// Add bamboo parallax effect
function addBambooParallax() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const bambooBg = document.querySelector('.bamboo-bg');
        const bamboo = document.querySelectorAll('.bamboo');
        
        if (bambooBg) {
            bambooBg.style.transform = `translateY(${scrolled * 0.2}px) scale(${1 + scrolled * 0.0001})`;
        }
        
        bamboo.forEach((bambooStalk, index) => {
            const speed = 0.1 + (index * 0.05);
            bambooStalk.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.01}deg)`;
        });
    });
}

// Add paint splashes effect
function addPaintSplashes() {
    const paintSplashesContainer = document.createElement('div');
    paintSplashesContainer.className = 'paint-splashes';
    paintSplashesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
    `;
    document.body.appendChild(paintSplashesContainer);
    
    setInterval(() => {
        const splash = document.createElement('div');
        splash.className = 'paint-splash';
        const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        splash.style.cssText = `
            position: absolute;
            width: ${Math.random() * 20 + 10}px;
            height: ${Math.random() * 20 + 10}px;
            background: ${randomColor};
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: paintSplash 4s ease-in-out infinite;
            opacity: 0.6;
        `;
        paintSplashesContainer.appendChild(splash);
        
        setTimeout(() => {
            splash.remove();
        }, 4000);
    }, 8000);
}

// Add canvas animations
function addCanvasAnimations() {
    const canvas = document.createElement('canvas');
    canvas.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 0;
        opacity: 0.3;
    `;
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 2;
            this.vy = (Math.random() - 0.5) * 2;
            this.size = Math.random() * 3 + 1;
            this.color = `hsl(${Math.random() * 360}, 50%, 50%)`;
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }
        
        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    for (let i = 0; i < 50; i++) {
        particles.push(new Particle());
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
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
    
    @keyframes paintSplash {
        0% { transform: scale(0) rotate(0deg); opacity: 0; }
        50% { transform: scale(1) rotate(180deg); opacity: 0.6; }
        100% { transform: scale(0) rotate(360deg); opacity: 0; }
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
    
    .creative-description {
        font-size: 1.1rem;
        line-height: 1.8;
        margin-bottom: 2rem;
        color: #2c3e50;
    }
    
    .creative-details {
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
        .creative-details {
            grid-template-columns: 1fr;
        }
        
        .modal-content {
            padding: 1.5rem;
        }
    }
`;
document.head.appendChild(style); 