const BOOKS = [
  {
    id: '1',
    title: "Clean Code",
    author: "Robert C. Martin"
  },
  {
    id: '2',
    title: "Extreme Programming Explained",
    author: "Kent Beck"
  }
]


function App() {
  return (
    <div className="App">
      <ul>
        {
          BOOKS.map(book => {
            return <li key={book.id}>
              <div>TITLE: {book.title}</div>
              <div>AUTHOR: {book.author}</div>
            </li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
