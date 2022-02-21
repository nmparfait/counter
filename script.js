const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Finish the course and learn Vue!',
            courseGoalB: 'Master Vue and create great Apps',
            vueLink: 'https://vuejs.org',
            autor: 'https://github.com/nmparfait',
            counter: 0,
        };
    },

    methods: {
        outputGoal(){
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }

    }
});


app.mount('#vue-event');




