$(document).ready(function(){
    $("#container3").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html,container1').animate({scrollTop: top}, 1500);
    });
});