const form = document.querySelector('form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const responce = await fetch('/newCard', {
    method: 'POST',
    body: JSON.stringify({
      title: event.target.name.value,
      url: event.target.photo.value,
      price: event.target.price.value,
      condition: event.target.condition.value,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const result = await responce.text();
  window.location.assign('/home');
});
