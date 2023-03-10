// get the form element
const form = document.querySelector('form');

// add event listener for form submission
form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent the default form submission behavior

  // get form data
  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const phone = form.elements.phone.value;
  const foodItem = form.elements['food-item'].value;
  const quantity = form.elements.quantity.value;
  const date = form.elements.date.value;
  const time = form.elements.time.value;

  // validate form data
  if (!name || !email || !phone || !foodItem || !quantity || !date || !time) {
    alert('Please fill in all fields');
    return;
  }

  // submit form data to server-side script
  const formData = new FormData(form);
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: formData,
    userId: 1,
  })
  .then(response => {
    if (response.ok) {
      alert('Booking successful');
      form.reset(); // reset the form after successful submission
    } else {
      alert('Booking failed');
    }
  })
  .catch(error => {
    alert('An error occurred while booking');
    console.error(error);
  });
});