const form = document.querySelector('.feedback-form');
const storageKey = 'feedback-form-state';
const email = form.elements.email;
const message = form.elements.message;

const storedFormData = JSON.parse(localStorage.getItem(storageKey)) || {
  email: '',
  message: '',
};

email.value = storedFormData.email;
message.value = storedFormData.message;

form.addEventListener('submit', formSubmitHandler);

function formSubmitHandler(event) {
  event.preventDefault();
  if (email.value == '' || message.value == '') {
    return alert('All form fields must be filled in');
  }
  const formData = {
    email: email.value.trim(),
    message: message.value.trim(),
  };
  saveFormData(formData);
  console.log(formData);
  form.reset();
  localStorage.removeItem(storageKey);
}

form.addEventListener('input', formInputHandler);

function formInputHandler(event) {
  const formData = {
    email: email.value.trim(),
    message: message.value.trim(),
  };

  saveFormData(formData);
}

function saveFormData(formData) {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
