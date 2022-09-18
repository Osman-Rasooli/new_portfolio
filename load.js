var beforeload = (new Date()).getTime();

// Preloader
$(function() {
    var count = 0;
    $('body').toggleClass('preolaoder-scroll');
    // var loadTime = window.performance.timing.domContentLoadedEventEnd- window.performance.timing.navigationStart;

    // Finding Load Time
    var afterload = (new Date()).getTime();
     // now use the beforeload and afterload to calculate the seconds
    seconds = (afterload - beforeload) / 1000;
    // Place the seconds in the innerHTML to show the results
    console.log(seconds)

    var counter = setInterval(function() {
        if(count < 101) {
            $('.count').text(count + '%');
            $('.preloader').css('width', count + '%');
            count++;
        } else {
            clearInterval(counter);
            $('#preloader').slideUp(1500);
            $('.preloader').css('display', 'none');
            $('.count').css('display', 'none');
            $('body').toggleClass('preolaoder-scroll');

        }
    }, seconds)
});
