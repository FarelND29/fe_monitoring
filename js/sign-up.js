function signup() {
  const fullname = document.getElementById('fullname').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmpass = document.getElementById('confirmpass').value;

  // Make a POST request to your signup endpoint with the user data
  fetch('https://farel-app.herokuapp.com/sign-up', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fullname: fullname,
      email: email,
      password: password,
      confirmpass: confirmpass,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.message);
      if (data.status === 200) {
        // Signup success
        // Display signup success message using SweetAlert
        Swal.fire({
          icon: 'success',
          title: 'Sign Up Successful',
          text: 'You have successfully signed up!',
        }).then(() => {
          // Reload window
          window.location.href = 'sign-in.html';
        });
      } else {
        // Display signup error message using SweetAlert
        Swal.fire({
          icon: 'error',
          title: data.message,
          text: data.error,
        });
      }
    })
    .catch((error) => {
      console.log('Error:', error);
      // Display error message using SweetAlert
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An error occurred while signing up. Please try again later.',
      });
    });
}
