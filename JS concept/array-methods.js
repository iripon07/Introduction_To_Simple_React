const products = [
    {name: 'laptop', price:3200, brand:'lenovo', color:'sliver'},
    {name: 'phone', price:32000, brand:'iphone', color:'black'},
    {name: 'watch', price:3000, brand:'xiaomi', color:'grey'},
    {name: 'pad', price:3200, brand:'apple', color:'sliver'},
    {name: 'laptop', price:3200, brand:'lenovo', color:'sliver'},
]

const brands = products.map(product => product.brand)
console.log(brands);
const prices  = products.map( product => product.price)
console.log(prices);

products.forEach(product => console.log(product.name))

const cheap = products.filter(product => product.price <= 5000)
console.log(cheap, 'cheap');
const specificName= products.filter(product=> product.name.includes('n'))
console.log(specificName);
const special = products.find(product => product.name.includes('n'))
console.log('special', special);