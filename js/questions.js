

const questions = document.querySelectorAll('.block-all');


questions.forEach(function (question) {
    const answer = question.querySelector('.answer');
    const plusBtn = question.querySelector('.plus-button');
    const minusBtn = question.querySelector('.minus-button');
    plusBtn.addEventListener('click', function (e) {
        answer.classList.add('show');
        minusBtn.classList.add('show');
        plusBtn.classList.add('hide')
    })

    minusBtn.addEventListener('click', function (e) {
        answer.classList.remove('show');
        minusBtn.classList.remove('show');
        plusBtn.classList.remove('hide')
    })
})
