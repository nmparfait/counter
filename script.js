const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: ''
        };
    },

    computerd: {
        fullname(){
            this.name = event.target.value + '' + lastName;
        }

    },

    methods: {
        setName(event, lastName){
            this.name = event.target.value + '' + lastName;
        }
        ,
        add(num){
            this.counter = this.counter + num;
        },
        reduce(num){
            this.counter = this.counter - num;
        },
        submitForm(){
            alert('Submitted!');
        },
        resetInput(){
            this.name = '';
        }

    }
});


app.mount('#vue-event');




