document.addEventListener('DOMContentLoaded', function() {
    // Initialize Swiper only if the swiper-container exists on the current page
    if (document.querySelector('.swiper-container')) {
        const swiper = new Swiper('.swiper-container', {
            // Optional parameters
            loop: true,
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
});