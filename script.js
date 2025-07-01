// script.js - interações básicas

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Mensagem enviada com sucesso!');
    });
});

document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    button.classList.toggle("active");
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      document.querySelectorAll(".faq-answer").forEach(a => a.style.maxHeight = null);
      document.querySelectorAll(".faq-question").forEach(b => b.classList.remove("active"));
      answer.style.maxHeight = answer.scrollHeight + "px";
      button.classList.add("active");
    }
  });
});

const slider = document.getElementById('slider');
const nextBtn = document.querySelector('.next-arrow');
const prevBtn = document.querySelector('.prev-arrow');
const scrollAmount = 320; // valor igual ao tamanho do card + margem

  nextBtn.addEventListener('click', () => {
    slider.scrollLeft += scrollAmount;
  });

  prevBtn.addEventListener('click', () => {
    slider.scrollLeft -= scrollAmount;
  });


  document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('#depoimentos');
    const iframe = document.querySelector('#video-depoimento-1');
    let hasPlayed = false;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasPlayed) {
          const originalSrc = iframe.src;
          iframe.src = originalSrc + "?autoplay=1";
          hasPlayed = true;
          observer.unobserve(section);
        }
      });
    }, {
      threshold: 0.5, // 50% da seção visível
    });

    observer.observe(section);
  });