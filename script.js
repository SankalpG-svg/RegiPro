const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const formData = {
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        experience: form.experience.value
      };

      // Send form data to backend
      fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(data => {
        if (data.message) {
          alert(data.message); // Success message
        } else {
          alert('Something went wrong!');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Failed to submit form');
      });
    });