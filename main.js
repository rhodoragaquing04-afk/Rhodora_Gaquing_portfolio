// Add this to your main.js
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.activity-img').forEach(img => {
        observer.observe(img);
    });

    // Also observe sections for smooth entry
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
});