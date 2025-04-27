function scrollToSection(buttonId, sectionId) {
    const button = document.getElementById(buttonId);
    const section = document.getElementById(sectionId);

    button.addEventListener("click", function() {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });

        setTimeout(() => {
            section.classList.add('visible');

            setTimeout(() => {
                section.classList.remove('visible');
            }, 600);
        }, 600);
    });
}

scrollToSection("music-button", "music");
scrollToSection("sport-button", "sport");
scrollToSection("comedy-button", "comedy");
scrollToSection("music-button-nav", "music");
scrollToSection("sport-button-nav", "sport");
scrollToSection("comedy-button-nav", "comedy");
