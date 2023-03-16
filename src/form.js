const emailId = document.getElementById('email');
const formId = document.getElementById('form-id');
const messageFail = document.getElementById('message-fail');
formId.addEventListener('submit', (e) => {
  if (emailId.value !== emailId.value.toLowerCase()) {
    e.preventDefault();
    messageFail.textContent = 'Please, input the email in lowercase!';
  } else {
    messageFail.textContent = '';
  }
});