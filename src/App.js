const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return (
    <div>
      <h1>🌴FAR AWAY👜</h1>
    </div>
  );
}
function Form() {
  return (
    <div className="add-form ">
      <h3> What do you need for your trip</h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="item..." />
      <button>ADD</button>
    </div>
  );
}
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
function Item({ item }) {
  return (
    <li style={item.packed ? { textDecoration: "line-through" } : {}}>
      {item.quantity} {item.description}
      <button>❌</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>👜you have 4 items on your list, and you already packed 0(0%)</em>
    </footer>
  );
}
