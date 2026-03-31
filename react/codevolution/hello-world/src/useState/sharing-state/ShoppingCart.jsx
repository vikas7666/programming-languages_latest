import { useState } from "react"

/*
====================================================
🟢 PARENT COMPONENT
====================================================
- Owns the state (cart data)
- Controls business logic
- Passes data + functions to children
*/
export const ShoppingCart = () => {

    // 🧠 STATE lives ONLY in the parent
    const [cartItem, setCartItem] = useState({
        reactCourse: 0,
        vueCourse: 0
    })

    // ✅ Parent function: add React course
    const handleReactCourse = () => {
        setCartItem({
            ...cartItem,                   // keep previous state
            reactCourse: cartItem.reactCourse + 1
        })
    }

    // ✅ Parent function: add Vue course
    const handleVueCourse = () => {
        setCartItem({
            ...cartItem,
            vueCourse: cartItem.vueCourse + 1
        })
    }

    // Static price data
    const prices = {
        reactCourse: 49.99,
        vueCourse: 39.99
    }

    return (
        <div>
            <h2>Shopping Cart Component (Parent)</h2>

            {/* 
              🔵 CHILD COMPONENT
              - Receives data as props
              - Calls parent function on click
            */}
            <ProductCard
                name="React Course"
                price={prices.reactCourse}
                quantity={cartItem.reactCourse}
                onAddCard={handleReactCourse}
            />

            {/* 🔵 CHILD COMPONENT */}
            <ProductCard
                name="Vue Course"
                price={prices.vueCourse}
                quantity={cartItem.vueCourse}
                onAddCard={handleVueCourse}
            />

            {/* 🔵 CHILD COMPONENT */}
            <CartSummary
                cartItem={cartItem}
                price={prices}
            />
        </div>
    )
}

/*
====================================================
🔵 CHILD COMPONENT: ProductCard
====================================================
- Does NOT own state
- Only displays data
- Sends events back to parent
*/
const ProductCard = ({ name, price, quantity, onAddCard }) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <p>Quantity: {quantity}</p>

            {/*
              Child does NOT update state
              It only calls the parent function
            */}
            <button onClick={onAddCard}>
                Add to Cart
            </button>
        </div>
    )
}

/*
====================================================
🔵 CHILD COMPONENT: CartSummary
====================================================
- Receives data from parent
- Calculates derived values
- Displays result
*/
const CartSummary = ({ cartItem, price }) => {

    // Derived data (calculated from props)
    const totalItem =
        cartItem.reactCourse + cartItem.vueCourse

    const totalPrice =
        cartItem.reactCourse * price.reactCourse +
        cartItem.vueCourse * price.vueCourse

    return (
        <div>
            <h3>Cart Summary</h3>
            <p>Total Items: {totalItem}</p>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
        </div>
    )
}