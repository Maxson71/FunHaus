"use strict"
new Swiper('.image-slider', {
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
    },
    watchOverflow: true,
    spaceBetween: 32,
    slidesPerView: 'auto',
});

function toggleClass(element, className) {
    if (!element || !className) {
        return;
    }

    let classString = element.className;

    if (classString) {
        let nameIndex = classString.indexOf(className);

        if (nameIndex === -1) {
            classString += ' ' + className;
        } else {
            classString = classString.substr(0, nameIndex - 1) + classString.substr(nameIndex + className.length);
        }

        element.className = classString;
    } else {
        element.className = className;
    }
}

function closeAllQuestions() {
    let openQuestions = document.getElementsByClassName("open-questions");

    while (openQuestions.length > 0) {
        toggleClass(openQuestions[0], "open-questions");
    }

    let openParagraphQuestions = document.getElementsByClassName("open-paragraph-questions");

    while (openParagraphQuestions.length > 0) {
        toggleClass(openParagraphQuestions[0], "open-paragraph-questions");
    }
}

document.getElementById('btn-menu-responsive').addEventListener('click', function () {
    toggleClass(this, 'close');
});

document.getElementById('what-questions').addEventListener('click', function () {
    // Перевірка, чи елемент вже має клас "open-questions"
    let isOpen = this.classList.contains("open-questions");

    closeAllQuestions();

    // Якщо відкрито, то не відкриваємо знову
    if (!isOpen) {
        toggleClass(this, 'open-questions');
        toggleClass(document.getElementById('what-paragraph'), 'open-paragraph-questions');
    }
});

document.getElementById('how-questions').addEventListener('click', function () {
    let isOpen = this.classList.contains("open-questions");

    closeAllQuestions();

    if (!isOpen) {
        toggleClass(this, 'open-questions');
        toggleClass(document.getElementById('how-paragraph'), 'open-paragraph-questions');
    }
});

document.getElementById('where-questions').addEventListener('click', function () {
    let isOpen = this.classList.contains("open-questions");

    closeAllQuestions();

    if (!isOpen) {
        toggleClass(this, 'open-questions');
        toggleClass(document.getElementById('where-paragraph'), 'open-paragraph-questions');
    }
});

document.getElementById('when-questions').addEventListener('click', function () {
    let isOpen = this.classList.contains("open-questions");

    closeAllQuestions();

    if (!isOpen) {
        toggleClass(this, 'open-questions');
        toggleClass(document.getElementById('when-paragraph'), 'open-paragraph-questions');
    }
});