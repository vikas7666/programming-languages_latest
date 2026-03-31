import { useReducer } from "react"

export const ShoppingCartWithReducer = () => {
    const [state, dispatch] = useReducer(reducer, intialState)

    const intialState = {
        item: [],
        totalAmount: 0,
        totalItem: 0
    }
    // reducer accept 2 parameter state and action 
    const reducer = (state, action) => {
        // return a new State


    }


    const Product = [
        { id: 1, name: 'React Course ', price: 49.99 },
        { id: 2, name: 'Javascript Course', price: 39.99 },
        { id: 3, name: 'Javascript Bundle', price: 49.99 }
    ]
    /* 
        {}	“I will write logic here. I must explicitly return.”
        ()	“Just return this expression immediately.”
    */
    return <div>
        <ul>
            {/* // When using curly braces {} in an arrow function body, you must explicitly return. */}
            {Product.map((item) => {
                return <li key={item.id}>{item.name}- ${item.price}</li>
            })}
        </ul>
        {/* Option A — Implicit return (cleaner)
             {products.map((item) => (
                    <li key={item.id}>
                        {item.name} - ${item.price}
                    </li>
                ))}
        */}

        {/* Option B — Explicit return
            {products.map((item) => {
            return (
                <li key={item.id}>
                    {item.name} - ${item.price}
                </li>
            );
        })}
                
        */}
    </div>
}



