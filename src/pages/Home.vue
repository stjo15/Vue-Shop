<template>
    <div id="home">
        <div class="title">
            <h1>{{msg}}</h1>
        </div>
        <div>{{text}}</div>
        <button v-on:click="incrementCounter">++</button>
        <p>{{counter}}</p>
        <div><button @click="toggle">Klicka här</button></div>
        <p id="text" v-show="isShown">Lorem ipsum dolor sit amet...</p>
        <div class="product-container">
            <div>
                <template
                  v-for="product in products"
                >
                    <div class="product" :key="product">
                        <div class="card-header" :key="product.name">
                            {{product.name}}
                        </div>
                        <div class="card-content" :key="product.description">
                            {{product.description}}
                        </div>
                        <div class="card-footer" :key="product.price">
                            {{product.price}} {{currency}}
                        </div>
                    </div>
                </template>
            </div>
        </div>
        <div class="form">
            <Form></Form>
        </div>
    </div>
</template>

<script>
import Form from "../components/Form";
export default {
  name: 'Hem',
  components: {Form},
  data() {
    return {
      msg: 'Välkommen till Designeras demobutik byggd i Vue.js!',
      counter: 1,
      text: 'Här visas några exempel på funktionalitet i Vue.js',
      isShown: false,
      currency: 'kr',
      products: [
        { id: 1, name: 'iPhone7', description: 'En suverän telefon', price: 6890 },
        { id: 2, name: 'iPhone6', description: 'En bra telefon', price: 4590 },
      ],
    };
  },
  methods: {
    incrementCounter() {
      this.counter += 1;
    },
    toggle() {
      // Toggles control property
      this.isShown = !this.isShown;
    },
    saveProduct() {
      // prints all the errors
      console.log(this.errors);
    },
  },
};
</script>

<style scoped>

</style>
