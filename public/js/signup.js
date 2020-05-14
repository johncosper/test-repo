/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
$(document).ready(function() {
  // Getting references to our form and input
  const signUpForm = $('form.signup');
  const emailInput = $('input#email-input');
  const passwordInput = $('input#password-input');
  const heroInput = $('input#hero-input');

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on('submit', function(event) {
    event.preventDefault();
    const userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
    };

    const heroData = {
      name: heroInput.val().trim(),
    };

    if (!heroData.name) {
      return;
    }

    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password);
    emailInput.val('');
    passwordInput.val('');

    signUpHero(heroData.name);
    heroInput.val('');
  });
  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password) {
    $.post('/api/signup', {
      email: email,
      password: password,
    })
        .then(function(data) {
          console.log(email);
          window.location.replace('/members');
        // If there's an error, handle it by throwing up a bootstrap alert
        })
        .catch(handleLoginErr);
  }

  function signUpHero(name) {
    $.post('/api/signup', {
      name: name,
    })
        .then(function(data) {
          console.log(name);
          window.location.replace('/members');
        // If there's an error, handle it by throwing up a bootstrap alert
        })
        .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    console.log(err);
  }
});
