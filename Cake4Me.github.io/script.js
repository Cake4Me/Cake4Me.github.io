// Copy command to clipboard
function copyCommand(button) {
    const commandBox = button.previousElementSibling;
    const command = commandBox.innerText.trim();
    
    navigator.clipboard.writeText(command).then(() => {
        // Change button to show "Copied"
        const originalText = button.innerText;
        button.innerText = 'Copied!';
        button.classList.add('copied');
        
        // Reset button after 2 seconds
        setTimeout(() => {
            button.innerText = originalText;
            button.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
        alert('Failed to copy command');
    });
}

// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add keyboard support for copy - Ctrl/Cmd + C on hover
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
        const focused = document.activeElement;
        if (focused && focused.classList.contains('copy-btn')) {
            e.preventDefault();
            copyCommand(focused);
        }
    }
});

// Minecraft page scroll effect - parallax and zoom
if (document.body.classList.contains('minecraft-page')) {
    const bgOverlay = document.querySelector('.background-overlay');
    
    window.addEventListener('scroll', () => {
        const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        const scrollValue = window.scrollY * 0.5;
        
        // Create parallax effect with position and zoom
        const scale = 1 + (scrollPercentage / 500);
        const brightness = 0.5 - (scrollPercentage / 400);
        const contrast = 1.1 + (scrollPercentage / 200);
        
        // Update background position for parallax
        bgOverlay.style.backgroundPosition = `center calc(center + ${scrollValue * 0.3}px)`;
        bgOverlay.style.transform = `scale(${scale})`;
        bgOverlay.style.filter = `brightness(${Math.max(0.2, brightness)}) contrast(${contrast})`;
    });
}

