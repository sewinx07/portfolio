
        // Mobile menu toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (!mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                    }
                }
            });
        });
        
        // Portfolio filtering
        const filterButtons = document.querySelectorAll('.filter-btn');
        const portfolioItems = document.querySelectorAll('.project-card');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Update active button
                filterButtons.forEach(btn => {
                    btn.classList.remove('bg-indigo-600', 'text-white');
                    btn.classList.add('bg-gray-200');
                });
                button.classList.remove('bg-gray-200');
                button.classList.add('bg-indigo-600', 'text-white');
                
                const filterValue = button.getAttribute('data-filter');
                
                portfolioItems.forEach(item => {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
        
        // Testimonial slider
        const testimonialTrack = document.querySelector('.testimonial-track');
        const testimonialSlides = document.querySelectorAll('.testimonial-slide');
        const prevButton = document.querySelector('.testimonial-prev');
        const nextButton = document.querySelector('.testimonial-next');
        const dots = document.querySelectorAll('.testimonial-dot');
        
        let currentIndex = 0;
        const slideWidth = 100; // percentage
        
        function updateSlider() {
            // Calculate the transform value based on screen size
            let transformValue;
            if (window.innerWidth >= 1024) { // lg breakpoint
                transformValue = -currentIndex * (slideWidth / 3);
            } else if (window.innerWidth >= 768) { // md breakpoint
                transformValue = -currentIndex * (slideWidth / 2);
            } else {
                transformValue = -currentIndex * slideWidth;
            }
            
            testimonialTrack.style.transform = `translateX(${transformValue}%)`;
            
            // Update dots
            dots.forEach((dot, index) => {
                dot.classList.toggle('bg-indigo-600', index === currentIndex);
                dot.classList.toggle('bg-indigo-200', index !== currentIndex);
            });
        }
        
        if (prevButton && nextButton) {
            prevButton.addEventListener('click', () => {
                currentIndex = Math.max(currentIndex - 1, 0);
                updateSlider();
            });
            
            nextButton.addEventListener('click', () => {
                const maxIndex = Math.min(testimonialSlides.length - 1, 2);
                currentIndex = Math.min(currentIndex + 1, maxIndex);
                updateSlider();
            });
        }
        
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateSlider();
            });
        });
        
        // Handle window resize for responsive slider
        window.addEventListener('resize', updateSlider);
        
        // Contact form handling
        const contactForm = document.getElementById('contact-form');
        const formMessage = document.getElementById('form-message');
        
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Simple form validation
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const message = document.getElementById('message').value;
                
                if (!name || !email || !message) {
                    formMessage.textContent = 'Please fill in all required fields.';
                    formMessage.classList.remove('hidden', 'text-green-600');
                    formMessage.classList.add('text-red-600');
                } else {
                    // This is a demo form - in a real application, you would send the data to a server
                    formMessage.textContent = 'Thank you! Your message has been sent successfully.';
                    formMessage.classList.remove('hidden', 'text-red-600');
                    formMessage.classList.add('text-green-600');
                    contactForm.reset();
                    
                    // Hide the success message after 5 seconds
                    setTimeout(() => {
                        formMessage.classList.add('hidden');
                    }, 5000);
                }
            });
        }
        
        // Scroll to top button
        const scrollTopButton = document.getElementById('scroll-top');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollTopButton.classList.add('visible');
            } else {
                scrollTopButton.classList.remove('visible');
            }
        });
        
        scrollTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9460907eb2fe7784',t:'MTc0ODI5NzAyNi4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();

