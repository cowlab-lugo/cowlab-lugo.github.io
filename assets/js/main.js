$(function(){

    $(window).mousemove(function( event ) {

        let center = centerCalc(event.pageX, event.pageY);
        $('#back-shape polygon').attr('points', '0,0 400,0 ' + center.x + ',' + center.y + ' 200,800 0,800');

        $('#back-shape-2 polygon').attr('points', '0,0  0,0 ' + center.x + ',' + center.y + ' 600,800  0,800 ');

    });

});

function centerCalc(mouseX, mouseY){

    let innerWidth = $(window).innerWidth();
    let innerHeight = $(window).innerHeight();

    //let xCenter = (400 - (mouseX*400 / innerWidth)) / 1.5;
    //let yCenter = (800 - (mouseY*800 / innerHeight)) / 1.5;
    let xCenter = (mouseX*600 / innerWidth);
    let yCenter = (mouseY*800 / innerHeight);

    return {x:xCenter, y:yCenter}
}
