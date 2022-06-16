const form = document.querySelector('form');
console.log(form);

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  await fetch('/newCard', {
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
  window.location.assign('/home');
});
