// scroll fungsi
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// jQuery doc
$(document).ready(function() {
    
    // contact form submit 
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        alert('Terima kasih! Pesan Anda telah dikirim.');
        this.reset();
    });

    // effect on scroll
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
            $('.hero').css('opacity', 1 - (scroll / 500));
        }
    });

    // button click animation
    $('.btn-custom').on('click', function() {
        $(this).addClass('btn-clicked');
        setTimeout(() => {
            $(this).removeClass('btn-clicked');
        }, 300);
    });


    $('<style>.btn-clicked { transform: scale(0.95) !important; }</style>').appendTo('head');

    // social icon
    $('.social-icons a').hover(
        function() {
            $(this).css('transform', 'translateY(-5px) scale(1.1)');
        },
        function() {
            $(this).css('transform', 'translateY(0) scale(1)');
        }
    );

    // project card klik efek
    $('.project-card').on('click', function() {
        $(this).css('transform', 'scale(0.95)');
        setTimeout(() => {
            $(this).css('transform', '');
        }, 200);
    });

});