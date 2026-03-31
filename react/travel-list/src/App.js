const initialItem = [
  { id: 1, description: "passport", quntity: 2, packed: false },
  { id: 2, description: "socks", quntity: 12, packed: true },
  { id: 2, description: "charger", quntity: 12, packed: false }
]
// Array from methodx
// Array.from(object, mapFunction, thisValue)
// console.log(Array.from({length:5},(_,i) => i)) // easy way 
// Since we don’t need currentValue, developers often use _ as a throwaway variable name.
function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  )
}
function Logo() {
  return <h1>🌴 Far away 👜</h1>
}
function Form() {
  return (
    <form className="add-form">
      <h3>What do you need for you trip</h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>{num}</option>
        ))}
      </select>
      <input type="text" placeholder="Item" />
      <button>Add</button>
    </form>
  )
}
function PackingList() {
  return (
    <div className="list">
      <ul>
        {/* Basically jo hum item ={item} pass karenge wahi props child me use karate hai */}
        {initialItem.map(item =>
          <Item item={item}></Item>)
        }
      </ul>
    </div>
  )
}
// here we can pass an props or descture and same as above name we can pass here 
function Item({ item }) {
  return <li>
    {/* Ternary Operator */}
    <span style={item.packed ? { textDecoration: "line-through" } : {}}>
      {item.quntity} {item.description}
    </span>
    <button>❌</button>
  </li>
}

function Stats() {
  return <footer className="stats">
    <em>👜</em>
    You have * item on your list X (X%)
  </footer>
}

export default App;
