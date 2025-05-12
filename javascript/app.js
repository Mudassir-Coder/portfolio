
const headerEl = document.getElementById('header')
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('nav-bar');

menuBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  menu.classList.toggle('active')
});

window.addEventListener('click', (e) => {
  if (menu.classList.contains('active')) {
    menu.classList.remove('active')
  }
})



console.log(headerEl);

window.addEventListener('scroll', () => {
  if (window.scrollY > 135) {
    headerEl.classList.add('active');
  } else {
    headerEl.classList.remove('active');
  }
})

/* Fading Contents */

ScrollReveal({
  reset: true,
  distance: '120px',
  duration: 2000,
  delay: 200
})

ScrollReveal().reveal('.hero-content,.hero-description,.languages,.about-description,.social-media,.section-heading');
ScrollReveal().reveal('.hero-title,.hero-img,.about-img,.form', { delay: 700, distance: '300px', origin: 'left' });
ScrollReveal().reveal('.section-heading');


/* Typing Animation */

const typed = new Typed('.animatedText', {
  strings: ['Frontend Developer', 'Blogger', 'Youtuber'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 200,
  loop: true
})








document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = {
    Name: document.getElementById("name").value,
    Email: document.getElementById("email").value,
    Message: document.getElementById("message").value,
    Number: document.getElementById("number").value,
    Subject: document.getElementById("subject").value
  };

  fetch("https://formspree.io/f/xyzwngdj", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  })
    .then(response => response.json())
    .then(data => {
      console.log("Success:", data);
      const mesgEl = document.getElementById('mesg').textContent = 'Your Message Sent Succesfully';
    })
    .catch(error => {
      console.error("Error:", error);
      mesgEl.textContent = "There was an error sending your message."
    });
});
