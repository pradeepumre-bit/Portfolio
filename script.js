// Smooth Scroll Animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade Animation
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const position = section.getBoundingClientRect().top;

        if(position < window.innerHeight - 100){
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
});

sections.forEach(section=>{
    section.style.opacity="0";
    section.style.transform="translateY(40px)";
    section.style.transition="0.8s";
});