const navDialog = document.getElementById('nav-dialog');
function handleMenu() {
    navDialog.classList.toggle('hidden');
}
const initialTranslateLTR = -48 * 4;
const initialTranslateRTL = -36 * 4;

function setupScrollEffect(element, isLTR, speed) {
    function scrollHandler() {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;

        if (isInView) {
            const translateX = (window.innerHeight - rect.top) * speed;
            let totalTranslate = 0;
            if (isLTR) {
                totalTranslate = translateX + initialTranslateLTR;
            } else {
                totalTranslate = -(translateX + initialTranslateRTL);
            }
            element.style.transform = `translateX(${totalTranslate}px)`;
        }
    }

    // Attach the scroll event listener
    window.addEventListener('scroll', scrollHandler);

    // Run the scroll handler initially to set the initial position
    scrollHandler();
}

// Ensure the elements exist before setting up the observer
const line4 = document.getElementById('line4');

if (line4) {
    setupScrollEffect(line4, true, 0.9);
}


// FAQa

const dtElements = document.querySelectorAll('dt'); 
dtElements.forEach(element => {
    element.addEventListener('click', () => {
        const ddId = element.getAttribute('aria-controls');
        const ddElement = document.querySelectorAll('i'); 
        const ddArrowIcon = ddElement.querySelectorAll('i'); 
    })
})
