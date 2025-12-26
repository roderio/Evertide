document.addEventListener('DOMContentLoaded', () => {
    // Add loaded class to body to fade in
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 10); // Small delay to ensure transition triggers

    // Intercept links
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            // Check if it's a valid internal link
            if (href && 
                !href.startsWith('#') && 
                !href.startsWith('mailto:') && 
                !href.startsWith('tel:') && 
                link.target !== '_blank') {
                
                e.preventDefault();
                
                // Remove loaded class to fade out
                document.body.classList.remove('loaded');

                // Wait for animation to finish before navigating
                setTimeout(() => {
                    window.location.href = href;
                }, 500); // Matches CSS transition duration
            }
        });
    });
});
