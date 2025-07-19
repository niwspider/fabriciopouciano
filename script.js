document.addEventListener('DOMContentLoaded', () => {
  // Formulário
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Mensagem enviada com sucesso!');
    });
  }

  // FAQ
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

  // Slider de depoimentos
  const slider = document.querySelector('.depoimentos-slider');
  const dots = document.querySelectorAll('.slider-dots .dot');
  const depoimentoItems = document.querySelectorAll('.depoimento-item');

  const scrollToSlide = (index) => {
    if (!slider) return;
    const slideWidth = depoimentoItems[0].offsetWidth + 20; // 20px é o gap
    slider.scrollTo({
      left: index * slideWidth,
      behavior: 'smooth'
    });
  };

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      scrollToSlide(index);
    });
  });

  if (slider) {
    slider.addEventListener('scroll', () => {
      const slideWidth = depoimentoItems[0].offsetWidth + 20;
      const index = Math.round(slider.scrollLeft / slideWidth);
      dots.forEach(dot => dot.classList.remove('active'));
      if (dots[index]) {
        dots[index].classList.add('active');
      }
    });
  }

  // Botão próximo/voltar (se existir)
  const nextBtn = document.querySelector('.next-arrow');
  const prevBtn = document.querySelector('.prev-arrow');
  const scrollAmount = 320;

  if (nextBtn && slider) {
    nextBtn.addEventListener('click', () => {
      slider.scrollLeft += scrollAmount;
    });
  }

  if (prevBtn && slider) {
    prevBtn.addEventListener('click', () => {
      slider.scrollLeft -= scrollAmount;
    });
  }

  // Mostrar botão de voltar ao topo
  const heroSection = document.querySelector('.hero');
  const scrollTopButton = document.querySelector('.scroll-to-top');

  window.addEventListener('scroll', () => {
    if (heroSection && scrollTopButton) {
      if (window.scrollY > heroSection.offsetHeight) {
        scrollTopButton.classList.add('show');
      } else {
        scrollTopButton.classList.remove('show');
      }
    }
  });
});

// Slider dos comentários com Swiper
const swiperComentarios = new Swiper('.depoimentos-comentarios', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    600: {
      slidesPerView: 2
    },
    900: {
      slidesPerView: 3
    }
  }
});