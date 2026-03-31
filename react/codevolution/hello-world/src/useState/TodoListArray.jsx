import { useState } from "react"

export const TodoList = () => {
    const [items, setItem] = useState([
        { id: 1, text: "learn React", done: false },
        { id: 2, text: "Build an app", done: false }
    ])
    console.log('rendering with items', items)

    const addItem = () => {
        let newItem = {
            id: Date.now(),
            text: 'Deploy to Prodution'
        }
        setItem([...items, newItem])
    }
    // const removeItem = (id) => {
    //     setItem(items.filter((item) => item.id !== id))
    // } 
    /* 
    filter method only 
    What does .filter() do?
        filter() creates a NEW array.
        It looks at each item one by one
        If your condition is true → keep the item
        If your condition is false → remove the item
        filter() does not change the original array.
    */
    const removeItem = (id) => {
        const newItems = items.filter(item => {
            if (item.id === id) {
                return false
            }
            return true
        })

        setItem(newItems)
    }
    const toggleDone = (id) => {
        setItem(
            items.map((item) => {
                if (item.id === id) {
                    return { ...item, done: !item.done }
                }
                return item
            })

        )
    }
    return (
        <ul>
            {items.map((item) => {
                return (
                    <li key={item.id}>
                        <span style={{ textDecoration: item.done ? "line-through" : "none" }}>{ }</span>
                        {item.text}
                        <button onClick={() => toggleDone(item.id)}>{item.done ? "Undo" : "Done"}</button>
                        <button onClick={() => removeItem(item.id)}>Delete Item</button></li>
                )
            })}

            <button onClick={addItem}>Push Data</button>

        </ul>

    )
}