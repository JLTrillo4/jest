let products = []
let id = 0

const resetProducts = () => {
    products = []
    id = 0
}

const addProduct = (name, price) => {
    id+=1
    const product = products.find(product => product.name === name)

    if(!name) {
        throw new Error ("must been a name for the products")
    }

    
    if(!price) {
        throw new Error ("must been a price for the products")
    }

    if(!product) {
        throw new Error ("the product for already exists")
    }

    const newProduct = {id, name, price}
    product.push(newProduct)
    
    return newProduct;
}


// removeProduct
const removeProduct = (id) => {
    const product = products. find(product => product.id === id)
    if(!product) throw new Error("the product doesn't exists");
    products = products. filter(product => product.id !== id)
    return products;
}

// updateProducts
const updateProducts = (name, price) => {
        const product = products.find(product => product.id === id);
        if(!product) throw new Error('the product does not exists');

        if(name) product.name = name
        if(price) product.price = price

        return product()
}






//getProducts

const getProducts = () => {
    return products;
}





module.exports = {
    resetProducts
}

