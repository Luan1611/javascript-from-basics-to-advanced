class ShoppingCart {
    constructor(items, itemsTotalQty, totalValue) {
        this.items = items
        this.itemsTotalQty = itemsTotalQty
        this.totalValue = totalValue
    }

    addItem(newItem) {

        let cartContainsNewItem = false

        for (let cartItem of this.items) {
            if (cartItem.id === newItem.id) {
                cartItem.qty += newItem.qty
                cartContainsNewItem = true
                break
            }
        }

        if (!cartContainsNewItem) {
            this.items.push(newItem)
        }

        this.itemsTotalQty += newItem.qty
        this.totalValue += newItem.price

    }

    removeItem(itemToRemove) {
        for (let cartItemIndex in this.items) {
            const currentItem = this.items[cartItemIndex]
            if (currentItem.id === itemToRemove.id) {
                if (currentItem.qty === 1) {
                    this.items.splice(cartItemIndex, 1)
                    break
                }
                currentItem.qty--
                break
            }
        }
        this.itemsTotalQty -= itemToRemove.qty
        this.totalValue -= itemToRemove.price

    }
}

let myItems = [
    {
        id: 1,
        name: 'PS5',
        qty: 1,
        price: 3000
    },
    {
        id: 2,
        name: 'Mechanical Keyboard',
        qty: 2,
        price: 100
    }
]

let myCart = new ShoppingCart(myItems, 3, 3200)
console.log(myCart)

myCart.addItem({id: 1, name: 'PS5', qty: 1, price: 3000})
console.log(myCart)

myCart.addItem({id: 3, name: 'Nintendo Switch', qty: 1, price: 2000})
console.log(myCart)

myCart.removeItem({id: 1, name: 'PS5', qty: 1, price: 3000})
console.log(myCart)