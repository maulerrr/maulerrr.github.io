$(document).ready(function(){
    $('.navbar-nav a ').hover(function () {
        $(this).css('color', '#E63B3D');
        }, function () {
        $(this).removeAttr('style');
        }
    );
});

function playSound(){
    let audio1 = document.getElementById('audio1');
    audio1.play();
};