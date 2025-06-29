

window.addEventListener('load', () => {

  document.querySelector('.loader').style.display = 'none';
  document.querySelector('main').style.display = 'block'
  const headerEl = document.getElementById('header')
  const menuBtn = document.getElementById('menu-btn');
  const menu = document.getElementById('nav-bar');

  /* TOGGLING MENU */

  menuBtn.addEventListener('click', (e) => {
    menu.classList.toggle('active');
    e.stopPropagation();
  });

  window.addEventListener('click', (e) => {
    if (menu.classList.contains('active')) {
      menu.classList.remove('active')
    }
  })

  /* HEADER STYLES */

  window.addEventListener('scroll', () => {
    if (window.scrollY > 135) {
      headerEl.classList.add('active');
    } else {
      headerEl.classList.remove('active');
    }
  })

  /* TOGGLING THEME */

  const body = document.body;
  const themeToggleBtn = document.querySelector('.theme-toggle-btn');
  let themeActive = localStorage.getItem('theme');
  if (themeActive) {
    body.classList.add('light-theme');
    themeToggleBtn.classList.add('active')
  }
  themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-theme')
    if (body.classList.contains('light-theme')) {
      themeToggleBtn.classList.add('active');
      let themeActive = body.classList.add('light-theme')
      localStorage.setItem('theme', themeActive);
    } else {
      themeToggleBtn.classList.remove('active');
      localStorage.removeItem('theme', themeActive)
    }
  });

  /* About Buttons Functionality */

  const sections = {
    'tech-btn': 'technologies',
    'srvc-btn': 'services',
    'crt-btn': 'certificates',
    'prjct-btn': 'projects'
  }

  for (let btnId in sections) {
    document.getElementById(btnId).addEventListener('click', () => {
      for (let key in sections) {
        document.getElementById(sections[key]).style.display = 'none';
        document.getElementById(sections[key]).classList.remove('portfolio-btn-active');

      }
      console.log("Clicked:", btnId, "→ Show:", sections[btnId]);
      document.getElementById(sections[btnId]).style.display = 'grid';
      document.getElementById(sections[btnId]).classList.add('portfolio-btn-active')
    })
  }




  /* Fading Contents */

  ScrollReveal({
    reset: false,
    distance: '120px',
    duration: 2000,
    delay: 200
  })

  ScrollReveal().reveal('.hero-content,.hero-description,.languages,.about-description,.swiper,.social-media,.section-heading');
  ScrollReveal().reveal('.hero-title,.hero-img,.about-img,.contact-container,.portfolio-inner-container', { delay: 300, distance: '300px', origin: 'left' });
  ScrollReveal().reveal('.section-heading');


  /* Typing Animation */

  const typed = new Typed('.animatedText', {
    strings: ['FrontendDev', 'Blogger', 'Youtuber'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 200,
    loop: true
  })


  /* Swiper Js */


  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    autoplay: {
      delay: 3000, // 3 seconds per slide
      disableOnInteraction: false, // Keep autoplay running after user touches
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });


  /* Form Function */


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
        const mesgEl = document.getElementById('mesg').textContent = 'Your Message Sent Succesfully';
      })
      .catch(error => {
        mesgEl.textContent = "There was an error sending your message."
      });
  });

})


