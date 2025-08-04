// Madhumitha (Mady) Enhanced Sunshine Animation Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initializeMadhumithaPage();
    addFloatingSunbeams();
    addWarmInteractions();
    addTypingEffect();
    addSunshineRays();
    addFlowerPetals();
    addWarmGlow();
});

// Initialize Madhumitha's warm page
function initializeMadhumithaPage() {
    // Add entrance animations with warm timing
    const elements = document.querySelectorAll('.hero-content, .warm-card, .sunshine-item, .wish-card');
    
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'scale(0.9) translateY(30px)';
        
        setTimeout(() => {
            element.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            element.style.opacity = '1';
            element.style.transform = 'scale(1) translateY(0)';
        }, index * 350);
    });
}

// Add floating sunbeams
function addFloatingSunbeams() {
    const sunbeamsContainer = document.querySelector('.floating-sunbeams');
    
    setInterval(() => {
        const sunbeam = document.createElement('div');
        sunbeam.className = 'sunbeam';
        sunbeam.style.left = Math.random() * 100 + '%';
        sunbeam.style.animationDuration = (Math.random() * 4 + 6) + 's';
        sunbeam.style.animationDelay = Math.random() * 2 + 's';
        sunbeam.style.transform = `rotate(${Math.random() * 360}deg)`;
        sunbeamsContainer.appendChild(sunbeam);
        
        setTimeout(() => {
            sunbeam.remove();
        }, 10000);
    }, 3000);
}

// Add warm card interactions
function addWarmInteractions() {
    const warmCards = document.querySelectorAll('.warm-card');
    
    warmCards.forEach(card => {
        card.addEventListener('click', function() {
            const warmId = this.getAttribute('data-warm');
            showWarmDetails(warmId);
        });
        
        // Enhanced hover effects with warm glow
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.05)';
            this.style.boxShadow = '0 20px 40px rgba(255, 193, 7, 0.3)';
            this.style.filter = 'brightness(1.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'none';
            this.style.filter = 'none';
        });
    });
}

// Show warm details
function showWarmDetails(warmId) {
    const warms = {
        1: {
            title: "Sunshine Personality",
            description: "Your warm personality brightens up every room you enter! Your smile is like sunshine breaking through clouds, and your positive energy is absolutely contagious. You have a way of making everyone feel special and loved.",
            details: "Your warmth and kindness create a safe space where people feel comfortable being themselves. You're like a human ray of sunshine!",
            quality: "Radiant Energy",
            impact: "Heart Warming"
        },
        2: {
            title: "Nurturing Spirit",
            description: "You have such a caring and nurturing nature. Whether it's offering a listening ear, giving thoughtful advice, or simply being there for someone, you always know exactly what people need.",
            details: "Your empathy and understanding make you the person everyone turns to when they need support. You're a true friend in every sense.",
            quality: "Compassionate Care",
            impact: "Soul Soothing"
        },
        3: {
            title: "Joyful Moments",
            description: "You have an incredible ability to find joy in the simplest things and share that joy with others. Your laughter is infectious, and your enthusiasm for life is absolutely inspiring.",
            details: "You remind everyone around you to appreciate the little moments and find happiness in everyday life. You're a true joy-bringer!",
            quality: "Pure Joy",
            impact: "Life Enriching"
        },
        4: {
            title: "Warm Connections",
            description: "You build the most beautiful and meaningful relationships. Your genuine interest in others and your ability to connect on a deep level make you someone people cherish and adore.",
            details: "Your friendships are built on trust, love, and mutual respect. You're the kind of friend everyone dreams of having.",
            quality: "Deep Bonds",
            impact: "Relationship Building"
        }
    };
    
    const warm = warms[warmId];
    if (warm) {
        showWarmModal(warm);
    }
}

// Show warm modal
function showWarmModal(warm) {
    const modal = document.createElement('div');
    modal.className = 'warm-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3><i class="fas fa-sun"></i> ${warm.title}</h3>
                <button class="close-btn" onclick="this.parentElement.parentElement.parentElement.remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <p class="warm-description">${warm.description}</p>
                <div class="warm-details">
                    <div class="detail-item">
                        <h4><i class="fas fa-heart"></i> The Essence</h4>
                        <p>${warm.details}</p>
                    </div>
                    <div class="detail-item">
                        <h4><i class="fas fa-star"></i> Quality</h4>
                        <p>${warm.quality}</p>
                    </div>
                    <div class="detail-item">
                        <h4><i class="fas fa-magic"></i> Impact</h4>
                        <p>${warm.impact}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add modal styles with warm design
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, rgba(255, 193, 7, 0.9), rgba(255, 152, 0, 0.9));
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        animation: fadeIn 0.5s ease;
    `;
    
    const modalContent = modal.querySelector('.modal-content');
    modalContent.style.cssText = `
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.9));
        border-radius: 25px;
        padding: 2.5rem;
        max-width: 650px;
        width: 90%;
        backdrop-filter: blur(25px);
        border: 2px solid rgba(255, 193, 7, 0.4);
        animation: slideIn 0.5s ease;
        box-shadow: 0 25px 80px rgba(255, 193, 7, 0.3);
        position: relative;
        overflow: hidden;
    `;
    
    // Add warm background elements
    const bgElement = document.createElement('div');
    bgElement.style.cssText = `
        position: absolute;
        top: -50%;
        right: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle, #ffeb3b, #ffc107, #ff9800);
        opacity: 0.1;
        animation: warmGlow 15s ease-in-out infinite;
        z-index: -1;
    `;
    modalContent.appendChild(bgElement);
    
    document.body.appendChild(modal);
    
    // Close modal on background click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Add typing effect with warm timing
function addTypingEffect() {
    const heroText = document.querySelector('.hero-text');
    const originalText = heroText.textContent;
    heroText.textContent = '';
    
    let i = 0;
    function typeWriter() {
        if (i < originalText.length) {
            heroText.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 55);
        }
    }
    
    setTimeout(typeWriter, 1800);
}

// Add sunshine rays effect
function addSunshineRays() {
    const raysContainer = document.createElement('div');
    raysContainer.className = 'sunshine-rays';
    raysContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
    `;
    document.body.appendChild(raysContainer);
    
    // Create multiple rays
    for (let i = 0; i < 8; i++) {
        const ray = document.createElement('div');
        ray.style.cssText = `
            position: absolute;
            width: 2px;
            height: 200px;
            background: linear-gradient(to bottom, rgba(255, 193, 7, 0.8), transparent);
            top: -100px;
            left: ${12.5 + i * 12.5}%;
            transform: rotate(${i * 45}deg);
            transform-origin: bottom center;
            animation: rayRotate 20s linear infinite;
            animation-delay: ${i * 2}s;
        `;
        raysContainer.appendChild(ray);
    }
}

// Add flower petals effect
function addFlowerPetals() {
    const petalsContainer = document.createElement('div');
    petalsContainer.className = 'flower-petals';
    petalsContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
    `;
    document.body.appendChild(petalsContainer);
    
    setInterval(() => {
        const petal = document.createElement('div');
        const colors = ['#ffeb3b', '#ffc107', '#ff9800', '#ff5722'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        petal.style.cssText = `
            position: absolute;
            width: 20px;
            height: 20px;
            background: ${randomColor};
            border-radius: 50% 0 50% 50%;
            top: -20px;
            left: ${Math.random() * 100}%;
            animation: petalFall 6s linear forwards;
            transform: rotate(${Math.random() * 360}deg);
        `;
        petalsContainer.appendChild(petal);
        
        setTimeout(() => {
            petal.remove();
        }, 6000);
    }, 2000);
}

// Add warm glow effect
function addWarmGlow() {
    const glowContainer = document.createElement('div');
    glowContainer.className = 'warm-glow';
    glowContainer.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 300px;
        height: 300px;
        background: radial-gradient(circle, rgba(255, 193, 7, 0.3), transparent);
        border-radius: 50%;
        pointer-events: none;
        z-index: 1;
        animation: warmPulse 4s ease-in-out infinite;
    `;
    document.body.appendChild(glowContainer);
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
        from { transform: translateY(-50px) scale(0.9); opacity: 0; }
        to { transform: translateY(0) scale(1); opacity: 1; }
    }
    
    @keyframes warmGlow {
        0%, 100% { transform: rotate(0deg) scale(1); }
        50% { transform: rotate(180deg) scale(1.2); }
    }
    
    @keyframes rayRotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    
    @keyframes petalFall {
        0% { transform: translateY(0px) rotate(0deg); opacity: 1; }
        100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
    }
    
    @keyframes warmPulse {
        0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.3; }
        50% { transform: translate(-50%, -50%) scale(1.5); opacity: 0.6; }
    }
    
    .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;
        padding-bottom: 1rem;
        border-bottom: 3px solid rgba(255, 193, 7, 0.3);
    }
    
    .modal-header h3 {
        color: #2c3e50;
        font-size: 1.8rem;
        margin: 0;
        font-weight: 700;
    }
    
    .close-btn {
        background: none;
        border: none;
        font-size: 1.8rem;
        cursor: pointer;
        color: #666;
        padding: 0.5rem;
        border-radius: 50%;
        transition: all 0.3s ease;
    }
    
    .close-btn:hover {
        background: rgba(255, 193, 7, 0.2);
        color: #333;
        transform: rotate(90deg) scale(1.1);
    }
    
    .warm-description {
        font-size: 1.2rem;
        line-height: 1.9;
        margin-bottom: 2.5rem;
        color: #2c3e50;
        font-weight: 400;
    }
    
    .warm-details {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 2rem;
    }
    
    .detail-item h4 {
        color: #34495e;
        margin-bottom: 0.8rem;
        font-size: 1.1rem;
        display: flex;
        align-items: center;
        gap: 0.8rem;
        font-weight: 600;
    }
    
    .detail-item p {
        color: #666;
        line-height: 1.7;
        margin: 0;
        font-size: 1rem;
    }
    
    .sunbeam {
        position: absolute;
        width: 4px;
        height: 60px;
        background: linear-gradient(to bottom, rgba(255, 193, 7, 0.8), transparent);
        border-radius: 2px;
        animation: sunbeamFloat 10s ease-in-out infinite;
    }
    
    @keyframes sunbeamFloat {
        0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.8; }
        50% { transform: translateY(-40px) rotate(180deg); opacity: 0.4; }
    }
    
    @media (max-width: 768px) {
        .warm-details {
            grid-template-columns: 1fr;
        }
        
        .modal-content {
            padding: 2rem;
        }
        
        .sunshine-rays {
            display: none;
        }
    }
`;
document.head.appendChild(style); 