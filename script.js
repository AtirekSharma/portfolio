
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
        rect.bottom >= 0
    );
}


function animateSections() {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        if (isInViewport(section) && !section.classList.contains('active')) {
            section.classList.add('active');
            
           
            const progressBars = section.querySelectorAll('.progress');
            progressBars.forEach(progress => {
                const width = progress.getAttribute('data-width');
                setTimeout(() => {
                    progress.style.width = `${width}%`;
                }, 300);
            });
        }
    });
}


document.addEventListener('DOMContentLoaded', function() {
   
    animateSections();
    
    
    window.addEventListener('scroll', function() {
        animateSections();
        updateActiveNavLink();
    });
    
    
    setupSmoothScrolling();
    setupContactForm();
    
    
    setTimeout(animateSections, 100);
});
