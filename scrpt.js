document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name && email && message) {
      document.getElementById('statusMessage').textContent = `Terima kasih, ${name}. Pesan Anda telah dikirim!`;
      document.getElementById('statusMessage').style.color = 'green';
    } else {
      document.getElementById('statusMessage').textContent = `Harap isi semua bidang.`;
      document.getElementById('statusMessage').style.color = 'red';
    }
  });
  