const form = document.querySelector('.fetch');
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const responce = await fetch('/city', {
    method: 'POST',
    body: JSON.stringify({ city: event.target.selector.value }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const result = await responce.text();
  const div = document.querySelector('.home-div');
  div.innerHTML = result;
});
