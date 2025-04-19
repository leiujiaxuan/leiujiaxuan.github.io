document.addEventListener('DOMContentLoaded', () => {
  const learnMoreBtn = document.getElementById('learnMoreBtn');
  const videoSection = document.querySelector('.video-section');
  const logoLink = document.getElementById('logoLink');
  const cookiePopup = document.getElementById('cookiePopup');
  const acceptCookiesBtn = document.getElementById('acceptCookies');

  if (learnMoreBtn && videoSection) {
    learnMoreBtn.addEventListener('click', () => {
      videoSection.scrollIntoView({ behavior: 'smooth' });
    });
  }

  if (logoLink) {
    logoLink.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  function setCookie(name, value, days) {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  if (!getCookie('cookieConsent')) {
    cookiePopup.style.display = 'block';
  }

  if (acceptCookiesBtn) {
    acceptCookiesBtn.addEventListener('click', () => {
      setCookie('cookieConsent', 'accepted', 365);
      cookiePopup.style.display = 'none';
    });
  }
});

const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', function () {
  const header = document.querySelector('header');
  const nav = document.querySelector('nav');
  console.log("hi");
  if (this.checked) {
    header.style.height = '100%';
    nav.style.display = 'flex';
  } else {
    header.style.height = 'auto';
    nav.style.display = 'none';
  }
});
  console.log("hi");

