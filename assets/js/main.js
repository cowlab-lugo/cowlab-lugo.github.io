$(function(){

    $(window).mousemove(function( event ) {

        let center = centerCalc(event.pageX, event.pageY);
        $('#back-shape polygon').attr('points', '0,0 400,0 ' + center.x + ',' + center.y + ' 200,800 0,800');

        $('#back-shape-2 polygon').attr('points', '0,0  0,0 ' + center.x + ',' + center.y + ' 600,800  0,800 ');

    });

    // Gallery lightbox
    $('.gallery a').click(function(e) {

        e.preventDefault();

        var image_href = $(this).attr("href");

        var lightbox =
        '<div id="lightbox">' +
            '<div>' +
                '<img src="' + image_href +'" />' +
            '</div>' +
        '</div>';

        $('body').append(lightbox);

    });

    $('body').on('click', '#lightbox', function() {
        $('#lightbox').remove();
    });
});


function centerCalc(mouseX, mouseY){

    let innerWidth = $(window).innerWidth();
    let innerHeight = $(window).innerHeight();

    let xCenter = (mouseX*600 / innerWidth);
    let yCenter = (mouseY*800 / innerHeight);

    return {x:xCenter, y:yCenter}
}

