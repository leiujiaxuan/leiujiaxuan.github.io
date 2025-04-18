document.addEventListener('DOMContentLoaded', () => {
  const learnMoreBtn = document.getElementById('learnMoreBtn');
  const videoSection = document.querySelector('.video-section');
  const logoLink = document.getElementById('logoLink');
  const checkbox = document.getElementById('checkbox');

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

  if (checkbox) {
    checkbox.addEventListener('change', function () {
      const header = document.querySelector('header');
      const nav = document.querySelector('nav');
      if (this.checked) {
        header.style.height = '100%';
        nav.style.display = 'flex';
      } else {
        header.style.height = 'auto';
        nav.style.display = 'none';
      }
    });
  }
});
