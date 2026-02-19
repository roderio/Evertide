// DOM Load Event
document.addEventListener('DOMContentLoaded', () => {
    // Initial Fade In
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 10);
    // Link Click Handling
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            // Check for Valid Internal Link
            if (href &&
                !href.startsWith('#') &&
                !href.startsWith('mailto:') &&
                !href.startsWith('tel:') &&
                link.target !== '_blank') {
                e.preventDefault();
                // Trigger Fade Out
                document.body.classList.remove('loaded');
                // Navigate After Delay
                setTimeout(() => {
                    window.location.href = href;
                }, 500);
            }
        });
    });
});
