 // CATALOGO
   const swipers = document.querySelectorAll('.swiper');

        swipers.forEach((swiperEl) => {
        new Swiper(swiperEl, {
            spaceBetween: 10,
            slidesPerView: 3.1,

            breakpoints: {
            768: {
                slidesPerView: 4.1
            },

            1024: {
                 slidesPerView: 7.1
            }

            },

            pagination: {
                el: swiperEl.querySelector('.swiper-pagination'),
                type: 'bullets',
            },

            navigation: {
                nextEl: swiperEl.querySelector('.swiper-button-next'),
                prevEl: swiperEl.querySelector('.swiper-button-prev'),
            }
        });
        });

        // ANIMAÇÃO ROLAGEM
        const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            }
        });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
        });