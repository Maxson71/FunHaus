//var text = document.getElementById("text");

function toggleClass(element, className) {
    if (!element || !className) {
        return;
    }

    var classString = element.className;
    var nameIndex = classString.indexOf(className);


    if (nameIndex === -1) {
        classString += ' ' + className;
    } else {
        classString = classString.substr(0, nameIndex - 1) + classString.substr(nameIndex + className.length);
    }
    element.className = classString;
}

document.getElementById('btn-menu-responsive').addEventListener('click', function () {
    toggleClass(this, 'close');
    //text.innerHTML == "Close" ? text.innerHTML = "Menu" : text.innerHTML = "Close";
});

var open_question = 0;

function closeQuestions() {
    if (open_question === 1) {
        toggleClass(document.getElementById('what-questions'), 'open-questions');
        toggleClass(document.getElementById('what-paragraph'), 'open-paragraph-questions');
    } else if (open_question === 2) {
        toggleClass(document.getElementById('how-questions'), 'open-questions');
        toggleClass(document.getElementById('how-paragraph'), 'open-paragraph-questions');
    } else if (open_question === 3) {
        toggleClass(document.getElementById('where-questions'), 'open-questions');
        toggleClass(document.getElementById('where-paragraph'), 'open-paragraph-questions');
    } else if (open_question === 4) {
        toggleClass(document.getElementById('when-questions'), 'open-questions');
        toggleClass(document.getElementById('when-paragraph'), 'open-paragraph-questions');
    }
}

document.getElementById('what-questions-div').addEventListener('click', function () {
    if (open_question !== 1) {
        closeQuestions()
    }
    toggleClass(document.getElementById('what-questions'), 'open-questions');
    toggleClass(document.getElementById('what-paragraph'), 'open-paragraph-questions');
    open_question = 1;
});
document.getElementById('how-questions-div').addEventListener('click', function () {
    if (open_question !== 2) {
        closeQuestions()
    }
    toggleClass(document.getElementById('how-questions'), 'open-questions');
    toggleClass(document.getElementById('how-paragraph'), 'open-paragraph-questions');
    open_question = 2;
});
document.getElementById('where-questions-div').addEventListener('click', function () {
    if (open_question !== 3) {
        closeQuestions()
    }
    toggleClass(document.getElementById('where-questions'), 'open-questions');
    toggleClass(document.getElementById('where-paragraph'), 'open-paragraph-questions');
    open_question = 3;
});
document.getElementById('when-questions-div').addEventListener('click', function () {
    if (open_question !== 4) {
        closeQuestions()
    }
    toggleClass(document.getElementById('when-questions'), 'open-questions');
    toggleClass(document.getElementById('when-paragraph'), 'open-paragraph-questions');
    open_question = 4;
});