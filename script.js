let InputField = {
    props: {
        label: String,
    },
    template: `
        <div>
            <label>{{label}}</label>
            <input type="text" v-model="inputValue" @input="updateValue" @keyup.enter="updateValue">
        </div>
    `,
    data() {
        return  {
            inputValue: ''
        };
    },
    methods: {
        updateValue() {
            this.$emit('update:count', this.inputValue);
        }
    }
};

let ClickCounter =  {
    components: {
        'input-field': InputField,
    },
    template: `
        <div>
            <button @click="count++">{{count}}</button>
            <input-field label="Enter a value" v-bind:count.sync="count"></input-field>
        </div>
    `,
    data() {
        return {
            count:0
        }
    }
}

let app = Vue.createApp({
    components: {
        'click-counter': ClickCounter,
      },
})

.mount("#app");

