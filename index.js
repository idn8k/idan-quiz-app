const bookmarkBtn = document.querySelector('[data-js="bookmark-btn"]');

bookmarkBtn.addEventListener('click', () => {
   toggleBookmarkBtn();
});

function toggleBookmarkBtn() {
   if (!bookmarkBtn.classList.contains('active')) {
      bookmarkBtn.setAttribute('src', '../assets/card-Bookmark-filled.svg');
      bookmarkBtn.classList.add('active');
   } else {
      bookmarkBtn.classList.remove('active');
      bookmarkBtn.setAttribute('src', '../assets/card-Bookmark.svg');
   }
}

const showAnswerBtn = document.querySelector('[data-js="show-answer"]');
const answerText = document.querySelector('[data-js="answer-text"]');

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
