const form = document.getElementById('form-id');
let data = {
  name: '',
  email: '',
  message: '',
};

window.onload = () => {
  if (localStorage.getItem('data')) {
    data = JSON.parse(localStorage.getItem('data'));
    form.name.value = data.name;
    form.email.value = data.email;
    form.messages.value = data.message;
  }
};
form.addEventListener('submit', () => {
  data.name = form.name.value;
  data.email = form.email.value;
  data.message = form.messages.value;
  localStorage.setItem('data', JSON.stringify(data));
});

form.addEventListener('reset', () => {
  window.localStorage.clear();
});