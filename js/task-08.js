const loginFormEl = document.querySelector('.login-form');

const onFormSumbit = event => {
  event.preventDefault();
  const formEl = event.currentTarget.elements;
  const email = formEl.email.value;
  const password = formEl.password.value;

  if (email && password) {
    const data = { email, password };

    console.log(data);
    loginFormEl.reset();
    return;
  }
  alert('Усі поля мають бути заповнені.');
};

loginFormEl.addEventListener('submit', onFormSumbit);