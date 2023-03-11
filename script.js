
let ClickCounter =  {
    template: '<button @click="count++">{{count}}</button>',
    data() {
        return {
            count:0
        }
    }
}


let InputField = {
    props: {
        label: String,
    },
    template: `
        <div>
            <label>{{label}}</label>
            <input type="text">
        </div>
    `,
}


let app = Vue.createApp({
    components: {
        'click-counter': ClickCounter,
        'input-field': InputField,
      },
})

.mount("#app");
