
const app = new Vue({
    el: '#app',
    delimiters: ["[[", "]]"],
    data: {
        entry: '',
        form: false,
    }
})


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