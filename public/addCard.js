const container = document.querySelector('.row-cols-1');
console.log(container);
container.addEventListener('click', async (event) => {
  if (event.target.classList.contains('btn-add')) {
    console.log(event.target.dataset.id);
    const response = await fetch('/add/card', {
      method: 'POST',
      body: JSON.stringify({
        cardId: event.target.dataset.id,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  }
});
