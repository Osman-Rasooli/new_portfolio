

// Background Image position manipulator - AboutMe section
var pos = document.documentElement;

pos.addEventListener('mousemove', e => {
    // console.log(e.clientX, e.clientY);
    pos.style.setProperty('--x', e.clientX + "px");
    pos.style.setProperty('--y', e.clientY + "px");
})

// Contact Form
$(function() {
    $('#contact').on('submit', function(e) {
      e.preventDefault();
      console.log('Submitted')
      
        $.ajax({
        method: 'POST',
        url: 'https://formsubmit.co/ajax/f15594cc77de132498c67c3791dc8773',
        dataType: 'json',
        accepts: 'application/json',
        data: {
            Name: $('#name').val(),
            Email: $('#email').val(),
            Subject: $('#subject').val()
        },
        success: (data) => {
            console.log('sent')
            // $('.overlay').toggleClass('.visible');
            $('.overlay').css({"visibility":"visible", "opacity":"1"});
            setTimeout(() => {
                $('.overlay').css({"visibility":"hidden", "opacity":"0"});
            }, 4000);
        },
        error: (err) => console.log(err)
    });
  
    })
  })