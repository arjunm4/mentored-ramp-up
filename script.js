document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('carousel');
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    const carouselItems = document.querySelectorAll('.carousel-item');
    
    let isScrolling = false;
    
    // Click functionality for carousel items
    carouselItems.forEach((item, index) => {
        item.addEventListener('click', function(e) {
            // Add click animation
            item.style.transform = 'scale(0.95)';
            setTimeout(() => {
                item.style.transform = '';
            }, 150);
            
            // Navigate to tier list page with album parameter
            const imageAlt = item.querySelector('.carousel-image').alt;
            const albumName = imageAlt.toLowerCase().replace(/\s+/g, '_');
            window.location.href = `tier-list.html?album=${albumName}`;
        });
    });
    
    // Smooth scroll to center items when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
            }
        });
    }, {
        threshold: 0.3
    });
    
    carouselItems.forEach(item => {
        item.style.opacity = '0.7';
        item.style.transition = 'opacity 0.3s ease';
        observer.observe(item);
    });
    
});
