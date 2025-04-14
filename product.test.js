//! TEST 1

const { resetProducts, addProduct } = require('./product');

beforeEach (() => {
    resetProducts();
});

describe('addProduct', () =>{
    it('should add product', () => {
        expect(() => addProduct('product1', 50).toEqual({ id:1, name: 'product1',price: 50}))
        })

    it('Should increment the id by 1', () => {
        addProduct('manzana', 2)
        expect(addProduct('pera', 3)).toEqual({ id: 2, name : 'pera', price : 3 })
        })

    it('should throw an error if name is empty', () => {
        expect(() => addProduct('kiwi', null)).toThrow('must be a name for the product')
        })

    it('should throw an error if the product already exists', () => {
        addProduct('manzana', 2)
        expect(() => addProduct('manzana', 2)).toThrow('the product already exists')
        })
})


/* //! TEST 2

describe('addProduct', () => {
    it('Should add product', () => {
        const product = addProduct('macbook', 1200);
        expect(product). toEqual({
            id: 1,
            name : 'macbook',
            price : 1200
        })
    })
})  


//! TEST 3

describe('addProduct', () => {
    test('Should add product', () => {
        addProduct('laptop', 1000);
        expect(getProducts()).toEqual([{
            id: 1,
            name : 'laptop',
            price : 1000
        }])
    })
}) */


/* //! TEST 1 REMOVE PRODUCT

    describe('Remove product', () => {
        test('should remove a product', () => {
            addProduct('teclado', 150)
            removeProduct(1)
            expect(getProducts()).toEqual([])
        })

        test('should throw an error if the product does not exists', () => {
expect(() => removeProduct(999)).toThrow('product does not exists') // test producto no existe
        })
})*/




