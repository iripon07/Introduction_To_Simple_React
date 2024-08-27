const getStoredCart = () => {
    const storedCartString = localStorage.getItem('cart')
    if (storedCartString) {
        return JSON.parse(storedCartString)
    } else {
        return []
    }
}
const saveCartToLS = cart => {
    const cartStringified = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringified)
}
const addToLS = id => {
    const cart = getStoredCart()
    cart.push(id)

    // Save to local storage
    saveCartToLS(cart)
}
const removeFromLS = (id) => {
    const cart = getStoredCart()
    const remainingId = cart.filter(idx => idx !== id)
    saveCartToLS(remainingId)
}
export { addToLS, getStoredCart, removeFromLS }