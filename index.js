const bookmarkBtn = document.querySelector('[data-js="bookmark-btn"]');

bookmarkBtn.addEventListener('click', () => {
   if (!bookmarkBtn.classList.contains('active')) {
      bookmarkBtn.setAttribute('src', '../assets/card-Bookmark-filled.svg');
      bookmarkBtn.classList.add('active');
   } else {
      bookmarkBtn.classList.remove('active');
      bookmarkBtn.setAttribute('src', '../assets/card-Bookmark.svg');
   }
});
