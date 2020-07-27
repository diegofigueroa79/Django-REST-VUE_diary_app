$(document).ready(function(){
    $(".list-group").on({
        mouseenter: function() {
            $(this).addClass("active");
        },
        mouseleave: function() {
            $(this).removeClass("active");
        }
    }, "li");
})