// Friend passwords and data
const friendsData = {
    friend1: {
        password: 'goat',
        name: 'Goat',
        realName: 'Lohan',
        page: 'lohan.html'
    },
    friend2: {
        password: 'panda',
        name: 'Panda',
        realName: 'Manoj',
        page: 'manoj.html'
    },
    friend3: {
        password: 'mady',
        
        realName: 'Madhumitha',
        page: 'madhumitha.html'
    },
    friend4: {
        password: 'chunchu',
        name: 'Chunchu',
        realName: 'Chunchu',
        page: 'chunchu.html'
    },
    friend5: {
        password: 'childu',
        name: 'Childu',
        realName: 'Chandana',
        page: 'chandana.html'
    },
    friend6: {
        password: 'keru',
        name: 'Keru',
        realName: 'Manasa',
        page: 'manasa.html'
    },
    friend7: {
        password: 'puku',
        name: 'Puku',
        realName: 'Manikandan',
        page: 'manikandan.html'
    },
    friend8: {
        password: 'bigshow',
        name: 'Bigshow',
        realName: 'Kiran',
        page: 'kiran.html'
    },
    friend9: {
        password: 'nikitha',
        name: 'Nikitha',
        realName: 'Nikitha',
        page: 'nikitha.html'
    },
    friend10: {
        password: 'gubey',
        name: 'Gubey',
        realName: 'Lahari',
        page: 'lahari.html'
    },
    friend11: {
        password: 'alex',
        name: 'Alex',
        realName: 'Alex',
        page: 'alex.html'
    },
    friend12: {
        password: 'emma',
        name: 'Emma',
        realName: 'Emma',
        page: 'emma.html'
    },
    friend13: {
        password: 'mike',
        name: 'Mike',
        realName: 'Mike',
        page: 'mike.html'
    },
    friend14: {
        password: 'sarah',
        name: 'Sarah',
        realName: 'Sarah',
        page: 'sarah.html'
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeCards();
    addFloatingHearts();
});

// Initialize friend cards
function initializeCards() {
    const friendCards = document.querySelectorAll('.friend-card');
    
    friendCards.forEach(card => {
        const friendId = card.getAttribute('data-friend');
        const unlockBtn = card.querySelector('.unlock-btn');
        const passwordInput = card.querySelector('.password-input');
        
        // Special case for Nikitha
        if (friendId === 'friend9') {
            unlockBtn.addEventListener('click', () => {
                showNikithaMessage();
            });
            if (passwordInput) passwordInput.style.display = 'none';
            return;
        }

        // Handle unlock button click
        unlockBtn.addEventListener('click', () => {
            const password = passwordInput.value.toLowerCase().trim();
            const friendData = friendsData[friendId];
            
            if (password === friendData.password) {
                showSuccessMessage(friendData.name);
                setTimeout(() => {
                    window.location.href = friendData.page;
                }, 2000);
            } else {
                showErrorMessage();
                passwordInput.value = '';
            }
        });
        
        // Handle Enter key
        passwordInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                unlockBtn.click();
            }
        });
    });
}

// Show success message
function showSuccessMessage(friendName) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-animation';
    successDiv.innerHTML = `
        <i class="fas fa-heart" style="font-size: 3rem; color: #ff6b6b; margin-bottom: 1rem;"></i>
        <h3>Welcome ${friendName}!</h3>
        <p>Unlocking your special memories...</p>
    `;
    document.body.appendChild(successDiv);
    
    setTimeout(() => {
        successDiv.remove();
    }, 3000);
}

// Show error message
function showErrorMessage() {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'success-animation';
    errorDiv.style.background = 'rgba(255, 107, 107, 0.9)';
    errorDiv.innerHTML = `
        <i class="fas fa-times-circle" style="font-size: 3rem; margin-bottom: 1rem;"></i>
        <h3>Incorrect Password</h3>
        <p>Please try again!</p>
    `;
    document.body.appendChild(errorDiv);
    
    setTimeout(() => {
        errorDiv.remove();
    }, 2000);
}

// Add floating hearts animation
function addFloatingHearts() {
    const heartsContainer = document.querySelector('.floating-hearts');
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
        heartsContainer.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 6000);
    }, 2000);
}

// Add card hover effects
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.friend-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

// Add typing effect to title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing effect for subtitle
document.addEventListener('DOMContentLoaded', function() {
    const subtitle = document.querySelector('.subtitle');
    const originalText = subtitle.textContent;
    typeWriter(subtitle, originalText, 50);
});

// Add parallax effect to stars
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const stars = document.querySelector('.stars');
    stars.style.transform = `translateY(${scrolled * 0.5}px)`;
});

// Add confetti effect for successful login
function createConfetti() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';
        confetti.style.borderRadius = '50%';
        
        document.body.appendChild(confetti);
        
        const animation = confetti.animate([
            { transform: 'translateY(0px) rotate(0deg)', opacity: 1 },
            { transform: `translateY(${window.innerHeight + 100}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
        ], {
            duration: Math.random() * 3000 + 2000,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });
        
        animation.onfinish = () => confetti.remove();
    }
}

// Enhanced success message with confetti
function showSuccessMessage(friendName) {
    createConfetti();
    
    const successDiv = document.createElement('div');
    successDiv.className = 'success-animation';
    successDiv.innerHTML = `
        <i class="fas fa-heart" style="font-size: 3rem; color: #ff6b6b; margin-bottom: 1rem; animation: pulse 1s infinite;"></i>
        <h3>Welcome ${friendName}!</h3>
        <p>Unlocking your special memories...</p>
    `;
    document.body.appendChild(successDiv);
    
    setTimeout(() => {
        successDiv.remove();
    }, 3000);
} 

function showNikithaMessage() {
    const msgDiv = document.createElement('div');
    msgDiv.className = 'success-animation';
    msgDiv.innerHTML = `
        <i class="fas fa-user-secret" style="font-size: 3rem; color: #feca57; margin-bottom: 1rem;"></i>
        <h3>Oops! Sneaky, aren't you?</h3>
        <p>This page is off-limits! Nikitha is no longer a part of my life.
        <br>Y are u soo obsessed with her??🙄<br>
        Instead of peeking here, go check your own special memories!<br>
        Who knows what surprises await you there? 😉</p>
    `;
    document.body.appendChild(msgDiv);
    setTimeout(() => {
        msgDiv.remove();
    }, 4000);
} 