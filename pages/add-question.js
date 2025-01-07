const form = document.querySelector('[data-js="form"]');
const questionText = document.querySelector('[data-js="question-text"]');
const answerText = document.querySelector('[data-js="answer-text"]');
const tagText = document.querySelector('[data-js="tag-text"]');
const questionCard = document.querySelector('[data-js="question-card"]');
const showAnswerBtn = document.querySelector('[data-js="show-answer"]');

const wordCounter = document.querySelector('[data-js="word-counter"]');
const wordCounterTag = document.querySelector('[data-js="word-counter-tag"]');

form.addEventListener('submit', (e) => {
   e.preventDefault();

   const formData = new FormData(e.target);
   const data = Object.fromEntries(formData);

   createElement(data);
});

function createElement(data) {
   questionText.textContent = data.question;
   answerText.textContent = data.answer;
   tagText.textContent = '#' + data.tag;

   form.classList.add('hide-element');
   questionCard.classList.remove('hide-element');

   form.reset();
   question.focus();
}

showAnswerBtn.addEventListener('click', () => {
   toggleAnswer();
});

function toggleAnswer() {
   if (answerText.classList.contains('hidden')) {
      answerText.classList.remove('hidden');
      showAnswerBtn.textContent = 'Hide answer';
   } else {
      answerText.classList.add('hidden');
      showAnswerBtn.textContent = 'Show answer';
   }
}
