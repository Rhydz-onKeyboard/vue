var app = new Vue({
    el: '#app',
    data:{
        brand: 'Pokemón',
        product: 'Pokemón',
        selectedVariant: 0,
        link: 'https://www.youtube.com/watch?v=CtJfE9cv7lc',
        details: ["80% algodon", "20% poliester", "Gender-neutral"],
        variants:[
            {
                variantId: 2234,
                variantColor: "purple",
                variantImage: './assets/mis.png',
                variantNombre: "Misdreavus",
                variantCantidad: 6
            },
            {
                variantId: 2235,
                variantColor: "green",
                variantImage: './assets/bul.png',
                variantNombre: "Bulbasaur",
                variantCantidad: 0
            }
        ],
        cart:0
    },
    methods: {
            addCarrito(){
                this.cart += 1
        },


        updateProduct (index){
            this.selectedVariant = index
            console.log(index)
        },
    },

    computed:{
        title(){
            return this.brand + ' ' + this.variants[this.selectedVariant].variantNombre
        },
        image(){
            return this.variants[this.selectedVariant].variantImage
        },
        inStock(){
            return this.variants[this.selectedVariant].variantCantidad
        }
    }

})