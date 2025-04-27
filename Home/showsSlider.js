function initializeSlider(sectionId) {
    const nextSetButton = document.querySelector(`#${sectionId} .next-show-list-button`);
    const previousSetButton = document.querySelector(`#${sectionId} .previous-show-list-button`);
    const firstSetShows = document.querySelector(`#${sectionId} .first-set`);
    const secondSetShows = document.querySelector(`#${sectionId} .second-set`);
    const buffer = document.querySelector(`#${sectionId} .buffer`);

    let pressed = false;

    nextSetButton.addEventListener('click', function() {
        if (pressed) {
            return;
        }

        nextSetButton.disabled = true;
        previousSetButton.disabled = true;

        pressed = true;

        firstSetShows.classList.add('fade-out');
        firstSetShows.classList.remove('fade-in');
        buffer.style.display = "flex"

        setTimeout(function() {
            secondSetShows.classList.add('visible');
            buffer.style.display = "none"
        }, 800);

        temporarilyDisableButtons(800);
    });

    previousSetButton.addEventListener('click', function() {
        if (pressed == false) {
            return;
        }

        nextSetButton.disabled = true;
        previousSetButton.disabled = true;

        pressed = false;

        secondSetShows.classList.remove('visible');
        buffer.style.display = "flex"

        setTimeout(function() {
            firstSetShows.classList.add('fade-in');
            buffer.style.display = "none"
        }, 800);

        temporarilyDisableButtons(800);
    });
}

function temporarilyDisableButtons(duration) {
    const allButtons = document.querySelectorAll('.next-show-list-button, .previous-show-list-button');
    allButtons.forEach(button => button.disabled = true);

    setTimeout(() => {
        allButtons.forEach(button => button.disabled = false);
    }, duration);
}

initializeSlider('music');
initializeSlider('comedy');
initializeSlider('sport');