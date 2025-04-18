const questions = document.querySelectorAll('.accordion-question');
    const answers = document.querySelectorAll('.accordion-answer');
    const toggleAllBtn = document.getElementById('toggleAll');
    const sectionToggles = document.querySelectorAll('.section-toggle');

    let allExpanded = false;

    questions.forEach((question) => {
      question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
      });
    });

    toggleAllBtn.addEventListener('click', () => {
      allExpanded = !allExpanded;
      answers.forEach((answer) => {
        answer.style.display = allExpanded ? 'block' : 'none';
      });
      toggleAllBtn.textContent = allExpanded ? 'Minimize All' : 'Expand All';
    });

    sectionToggles.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const section = e.target.closest('.accordion-section');
        const sectionAnswers = section.querySelectorAll('.accordion-answer');
        const expanded = btn.textContent === 'Expand';

        sectionAnswers.forEach(ans => {
          ans.style.display = expanded ? 'block' : 'none';
        });

        btn.textContent = expanded ? 'Minimize' : 'Expand';
      });
    });