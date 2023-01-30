import { useState, useRef } from 'react';


function App() {
  const [query, setQuery] = useState('');
  const [items, setItems] = useState([]);
  const InputRef = useRef();

  function onSubmit(e) {
    e.preventDefault();
    const value = InputRef.current.value;
    setItems(prev => [...prev, value]);
    InputRef.current.value = "";
  }


  const filteredItems = items.filter(item => {
    return item.toLowerCase().includes(query.toLowerCase());
  })

  return (
    <>
      Search: <input value={query} onChange={(e) => setQuery(e.target.value)} type='search' />
      <br/>
      <br/>
      <form onSubmit={onSubmit}>
        Input: <input ref={InputRef} type='text' /> <button type='submit'>Add</button>
      </form>

      {
        filteredItems.map(item => {
          return <div>{item}</div>
        })
      }
    </>

  );
}

export default App;
