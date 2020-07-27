function sendRequest(url, method, data){
    let r = axios({
        url: url,
        method: method,
        data: data,
        xsrfCookieName: 'csrftoken',
        xsrfHeaderName: 'X-CSRFToken',
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        }
    });
    return r;
}


const app = new Vue({
    el: '#app',
    delimiters: ["[[", "]]"],
    data: {
        entry: '',
        entries: '',
        form: false,
    },

    created() {
        let vm = this;
        let r = sendRequest('', 'get',)
            .then(function(response){
                vm.entries = response.data;
            })
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