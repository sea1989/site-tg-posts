const reactions = document.querySelectorAll('.emoji-reaction');

reactions.forEach(reaction => {
  reaction.addEventListener('click', e => {
    const count = e.currentTarget.querySelector('.count');
    count.innerHTML = parseInt(count.innerHTML) + 1;
  });
});