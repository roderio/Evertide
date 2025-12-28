document.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 10);


    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');


            if (href &&
                !href.startsWith('#') &&
                !href.startsWith('mailto:') &&
                !href.startsWith('tel:') &&
                link.target !== '_blank') {

                e.preventDefault();


                document.body.classList.remove('loaded');


                setTimeout(() => {
                    window.location.href = href;
                }, 500);
            }
        });
    });
});
