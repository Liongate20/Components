Vue.component('component-lists',{
    template:`
      <div>
       <p v-if="!isActive" @click="toggleName">{{name}}</p>
       <p v-if="isActive" @click="toggleName">{{codename}}</p>
       </div>
      `,
    props:['name','codename'],
    data(){
        return{
            isActive:false,
        }
    },
    methods:{
        toggleName(){
            this.isActive = !this.isActive;
        }
    }

});

new Vue({
    el: "#app",
    data: {
        name: "",
        email: "",
        message: [],
        isName: false,
        isEmail: false,
        items:[
            {
                name:"Protagonist",
                codename:"Joker"
            },
            {
                name:"Anne",
                codename:"Panther"
            },
            {
                name:"Ryuji",
                codename:"Skull"
            }

        ]
    },
    computed: {
        validated() {
            if (this.isName && this.isEmail) {
                return "Submitted";
            }
        },
    },
    watch: {
        name(value) {
            if (value.length > 2) {
                this.message["email"] =
                    "emails needs to be formatted as example@domain.xxx";
                this.isName = true;
            } else {
                this.message["name"] = "Name needs at least 2 characters";
                this.message["email"] =
                    "emails needs to be formatted as example@domain.xxx";
                this.isName = false;
            }
        },
        email(value) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                this.isEmail = true;
            } else {
                this.message["email"] =
                    "emails needs to be formatted as example@domain.xxx";
                this.isEmail = false;
            }
        },
    },
});
