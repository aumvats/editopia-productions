$(document).ready(function() {
    // First Section Animations
    $('.logo-container').stop(true).animate({ left: '30px' }, 1000);
    $('h1').stop(true).animate({ opacity: '1' }, 1500);
    $('.rectangle1').stop(true).animate({ left: '100%' }, 3000);
    
    // Second Section Scroll Effects
    var $window = $(window),
        winHeight = $window.height(),
        sections = [].slice.apply(document.querySelectorAll('.cd-section')),
        move = function(section) {
            var offset = $window.scrollTop() - $(section).offset().top;
            if (offset >= -winHeight && offset <= 0) {
                section.style.opacity = 1;
                section.style.transform = 'translateY(0) scale(1)';
            } else if (offset > 0 && offset <= winHeight) {
                section.style.opacity = 1 - (offset / winHeight);
                section.style.transform = 'translateY(0) scale(' + (1 - (offset * 0.3 / winHeight)) + ')';
            }
        };

    window.addEventListener("scroll", function() {
        sections.forEach(function(section) {
            move(section);
        });
    });

    // Contact Section Code
    const form = document.querySelector('.contact-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically send the form data to a server
            // For this example, we'll just show an alert
            alert('Thank you for your message! We will get back to you soon.');
            form.reset();
        });
    }

    // Add animation to social icons
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-5px) rotate(10deg)';
        });
        icon.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0) rotate(0)';
        });
    });

    // Client Showcase Animation
    $('.client-row').hover(
        function() {
            $(this).css('animation-play-state', 'paused');
        },
        function() {
            $(this).css('animation-play-state', 'running');
        }
    );

    // Optional: Dynamically load client images
   

   

    // Optional: Infinite scroll effect for client showcase
    function duplicateClients() {
        $('.client-row').each(function() {
            var $row = $(this);
            var $clients = $row.find('.client');
            $clients.clone().appendTo($row);
        });
    }

    duplicateClients();

    // Adjust animation duration based on number of clients
    function adjustAnimationDuration() {
        $('.client-row').each(function() {
            var $row = $(this);
            var clientCount = $row.find('.client').length;
            var duration = clientCount * 2; // 2 seconds per client
            $row.css('animation-duration', duration + 's');
        });
    }

    adjustAnimationDuration();

    // Optional: Responsive adjustments
    function adjustClientShowcase() {
        var windowWidth = $(window).width();
        var clientWidth = 150; // Width of each client circle
        var gap = 20; // Gap between clients
        var visibleClients = Math.floor(windowWidth / (clientWidth + gap));

        $('.client-row').each(function() {
            var $row = $(this);
            var $clients = $row.find('.client');
            if ($clients.length > visibleClients) {
                $row.width((clientWidth + gap) * $clients.length);
            } else {
                $row.width('100%');
            }
        });
    }

    adjustClientShowcase();
    $(window).resize(adjustClientShowcase);

    // New subtle parallax effect
    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
        $('.hero').css('background-position-y', -(scrollTop * 0.2) + 'px');
    });

     // Smooth scroll for CTA button
     $('.cta-button').on('click', function(e) {
        e.preventDefault();
        var target = $($(this).attr('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
    
});

