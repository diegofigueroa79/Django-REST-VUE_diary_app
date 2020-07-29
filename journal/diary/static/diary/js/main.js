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

testvar = 0;
const app = new Vue({
    el: '#app',
    delimiters: ["[[", "]]"],
    data: {
        entry: {
            title: '',
            text: ''
        },
        editing_entry: {
            title: '',
            text: ''
        },
        entries: '',
        form: false,
    },

    created() {
        let vm = this;
        let r = sendRequest('', 'get',)
            .then(function(response){
                vm.entries = response.data;
            })
    },

    methods: {
        addEntry: function() {
            vm = this;
            form = new FormData();
            form.append('title', vm.entry.title);
            form.append('text', vm.entry.text);
            sendRequest('entry/add/', 'post', form)
                .then(function(response){
                    vm.entries.push(response.data);
                    vm.entry.title = '';
                    vm.entry.text = '';
                })
        }
    }
})
