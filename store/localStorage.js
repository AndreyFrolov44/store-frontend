export const state = () => ({
    cart: []
})

export const mutations = {
    addToCart(state, { item, quantity }) {
        if(quantity > 0){
            let price;
            if(item.priceSale) price = item.priceSale
            else price = item.price
            let found = state.cart.find(product => product.id == item.id)
            if (found) {
                found.quantity++
                found.totalPrice = found.quantity * found.price
            } else {
                state.cart.push({ id: item.id, slug: item.slug, name: item.name, price: price, image: item.image, quantity: parseInt(quantity), totalPrice: price * quantity })
            }
        }
    },
    updateQuantity(state, { item, quantity }) {
        if(item.quantity > 0) {
            let found = state.cart.find(product => product.id == item.id)
            found.quantity += quantity
            found.totalPrice = found.quantity * found.price
        }
    },
    removeFromCart(state, item) {
        let index = state.cart.indexOf(item);

        if (index > -1) {
            state.cart.splice(index, 1);
        }
    }
}