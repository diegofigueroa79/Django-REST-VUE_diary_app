
function sendRequest(url, method, data) {
    // creating an instance of the axios class
    // and passing a config data object through the constructor
    let r = axios({
        method: method,
        url: url,
        data: data,
        xsrfCookieName: 'csrftoken',
        xsrfHeaderName: 'X-CSRFToken',
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        }
    });
    return r;
}
let test = [];
let app = new Vue({
    delimiters: ["[[", "]]"],
    el: '#app',
    data: {
        message: 'Hello',
        entry: '',
        entries: '',
    },

    // I want to send the request when the page is loaded
    // for that we use hooks, gives us moments of the 
    // vue objects lifetime
    created(){
        let vm = this;
        let r = sendRequest('', 'get',)
            .then(function(response){
                vm.entries = response.data;
            });
    }
})